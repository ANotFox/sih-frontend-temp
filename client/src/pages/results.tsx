import { useQuery } from "@tanstack/react-query";
import { useRoute, Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MeasurementOverlay } from "@/components/results/measurement-overlay";
import { ClassificationScore } from "@/components/results/classification-score";
import { Skeleton } from "@/components/ui/skeleton";
import { ClassificationRecord } from "@shared/schema";
import { Save, Plus } from "lucide-react";

export default function Results() {
  const [match, params] = useRoute("/results/:id?");
  const recordId = params?.id;

  const { data: record, isLoading, error } = useQuery<ClassificationRecord>({
    queryKey: ['/api/classifications', recordId],
    enabled: !!recordId,
  });

  if (!recordId) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground" data-testid="no-results-message">
          No analysis results to display. Please upload an image first.
        </p>
        <Link href="/upload">
          <Button className="mt-4" data-testid="button-upload-image">
            Upload Image
          </Button>
        </Link>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div>
        <div className="mb-8">
          <Skeleton className="h-8 w-64 mb-4" />
          <Skeleton className="h-6 w-96" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Skeleton className="h-96" />
          <div className="space-y-6">
            <Skeleton className="h-32" />
            <Skeleton className="h-48" />
          </div>
        </div>
      </div>
    );
  }

  if (error || !record) {
    return (
      <div className="text-center py-12">
        <p className="text-destructive mb-4" data-testid="error-message">
          Failed to load analysis results. Please try again.
        </p>
        <Link href="/upload">
          <Button data-testid="button-retry-upload">Try Again</Button>
        </Link>
      </div>
    );
  }

  const measurements = record.measurements as any;

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-4 font-serif" data-testid="results-title">
          Classification Results
        </h1>
        <p className="text-lg text-muted-foreground" data-testid="results-description">
          Analysis complete. Review the measurements and classification score below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image with Measurement Points */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4 font-serif">Analyzed Image</h3>
            <MeasurementOverlay 
              imageUrl={record.imageUrl} 
              measurementPoints={record.measurementPoints as any[]} 
              animalType={record.animalType}
            />
          </CardContent>
        </Card>

        {/* Measurements and Score */}
        <div className="space-y-6">
          {/* Classification Score */}
          <ClassificationScore 
            score={record.classificationScore}
            animalType={record.animalType}
          />

          {/* Extracted Parameters */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 font-serif">Measurements</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="font-medium">Height at Withers</span>
                  <span className="text-muted-foreground" data-testid="measurement-height">
                    {measurements.heightAtWithers} cm
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="font-medium">Body Length</span>
                  <span className="text-muted-foreground" data-testid="measurement-length">
                    {measurements.bodyLength} cm
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="font-medium">Rump Angle</span>
                  <span className="text-muted-foreground" data-testid="measurement-angle">
                    {measurements.rumpAngle}°
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="font-medium">Body Condition Score</span>
                  <span className="text-muted-foreground" data-testid="measurement-condition">
                    {measurements.bodyConditionScore}/5
                  </span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium">Estimated Weight</span>
                  <span className="text-muted-foreground" data-testid="measurement-weight">
                    {measurements.estimatedWeight} kg
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button className="flex-1 bg-chart-2 hover:bg-chart-2/90" data-testid="button-save-record">
              <Save className="mr-2 h-4 w-4" />
              Save Record
            </Button>
            <Link href="/upload">
              <Button variant="outline" className="flex-1 w-full" data-testid="button-new-analysis">
                <Plus className="mr-2 h-4 w-4" />
                New Analysis
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
