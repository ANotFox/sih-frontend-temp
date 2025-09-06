import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RecordCard } from "@/components/history/record-card";
import { Skeleton } from "@/components/ui/skeleton";
import { ClassificationRecord } from "@shared/schema";
import { Download, History as HistoryIcon } from "lucide-react";

export default function History() {
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [timeFilter, setTimeFilter] = useState<string>("30");

  const { data: records, isLoading, error } = useQuery<ClassificationRecord[]>({
    queryKey: ['/api/classifications'],
    staleTime: 1000 * 60 * 2, // 2 minutes
  });

  const filteredRecords = records?.filter(record => {
    if (typeFilter !== "all" && !record.animalType.toLowerCase().includes(typeFilter.toLowerCase())) {
      return false;
    }
    
    if (timeFilter !== "all") {
      const daysAgo = parseInt(timeFilter);
      const recordDate = new Date(record.createdAt);
      const cutoffDate = new Date();
      cutoffDate.setDate(cutoffDate.getDate() - daysAgo);
      return recordDate >= cutoffDate;
    }
    
    return true;
  }) || [];

  const handleExport = () => {
    if (!records || records.length === 0) return;
    
    const csvContent = [
      'Date,Animal Type,Classification Score,Height at Withers,Body Length,Rump Angle,Body Condition Score,Estimated Weight',
      ...filteredRecords.map(record => {
        const measurements = record.measurements as any;
        return [
          new Date(record.createdAt).toLocaleDateString(),
          record.animalType,
          record.classificationScore.toFixed(1),
          measurements.heightAtWithers,
          measurements.bodyLength,
          measurements.rumpAngle,
          measurements.bodyConditionScore,
          measurements.estimatedWeight
        ].join(',');
      })
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'classification-history.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-4 font-serif" data-testid="history-title">
          Classification History
        </h1>
        <p className="text-lg text-muted-foreground" data-testid="history-description">
          View and manage all past animal classifications. Export data or review individual records.
        </p>
      </div>

      {/* Filters and Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div className="flex flex-wrap gap-2">
          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-32" data-testid="select-type-filter">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="dairy">Dairy Cow</SelectItem>
              <SelectItem value="beef">Beef Cattle</SelectItem>
              <SelectItem value="buffalo">Buffalo</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={timeFilter} onValueChange={setTimeFilter}>
            <SelectTrigger className="w-36" data-testid="select-time-filter">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7">Last 7 days</SelectItem>
              <SelectItem value="30">Last 30 days</SelectItem>
              <SelectItem value="90">Last 90 days</SelectItem>
              <SelectItem value="all">All time</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <Button 
          variant="secondary" 
          onClick={handleExport}
          disabled={!records || records.length === 0}
          data-testid="button-export-data"
        >
          <Download className="mr-2 h-4 w-4" />
          Export Data
        </Button>
      </div>

      {/* Records Grid */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <Card key={i}>
              <CardContent className="p-4">
                <Skeleton className="aspect-square mb-3 rounded-md" />
                <Skeleton className="h-5 w-32 mb-1" />
                <Skeleton className="h-4 w-24 mb-2" />
                <Skeleton className="h-3 w-28 mb-3" />
                <Skeleton className="h-8 w-full" />
              </CardContent>
            </Card>
          ))}
        </div>
      ) : error ? (
        <div className="text-center py-12">
          <p className="text-destructive" data-testid="error-message">
            Failed to load classification history. Please try again.
          </p>
        </div>
      ) : filteredRecords.length === 0 ? (
        <div className="text-center py-12">
          <HistoryIcon className="h-12 w-12 mx-auto mb-4 opacity-50" />
          <p className="text-muted-foreground" data-testid="no-records-message">
            {records?.length === 0 
              ? "No classifications yet. Start by uploading your first image!"
              : "No records match the selected filters. Try adjusting your search criteria."
            }
          </p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRecords.map((record) => (
              <RecordCard key={record.id} record={record} />
            ))}
          </div>
          
          {/* Load More - placeholder for pagination */}
          {filteredRecords.length >= 20 && (
            <div className="text-center mt-8">
              <Button variant="outline" data-testid="button-load-more">
                Load More Records
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
