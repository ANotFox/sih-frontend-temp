import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, BarChart3, History } from "lucide-react";
import { ClassificationRecord } from "@shared/schema";

export default function Dashboard() {
  const { data: recentClassifications, isLoading } = useQuery<ClassificationRecord[]>({
    queryKey: ['/api/classifications', { limit: '3' }],
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-4 font-serif" data-testid="dashboard-title">
          Animal Type Classification System
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl" data-testid="dashboard-description">
          Welcome to the AI-powered Animal Type Classification system. Upload images of cattle and buffaloes 
          to get instant analysis with detailed measurements and classification scores.
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Camera className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold font-serif">New Classification</h3>
            </div>
            <p className="text-muted-foreground mb-4">Start a new animal classification by uploading an image.</p>
            <Link href="/upload">
              <Button className="w-full" data-testid="button-new-classification">
                Upload Image
              </Button>
            </Link>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-3 mb-4">
              <BarChart3 className="h-8 w-8 text-chart-2" />
              <h3 className="text-xl font-semibold font-serif">View History</h3>
            </div>
            <p className="text-muted-foreground mb-4">Review past classifications and export data.</p>
            <Link href="/history">
              <Button variant="secondary" className="w-full" data-testid="button-view-history">
                View Records
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* Recent Classifications Summary */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-4 font-serif" data-testid="recent-classifications-title">
            Recent Classifications
          </h3>
          {isLoading ? (
            <div className="space-y-3">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex items-center space-x-3 p-3 bg-muted rounded-md animate-pulse">
                  <div className="w-12 h-12 rounded bg-muted-foreground/20"></div>
                  <div className="space-y-2 flex-1">
                    <div className="h-4 bg-muted-foreground/20 rounded w-1/3"></div>
                    <div className="h-3 bg-muted-foreground/20 rounded w-1/4"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : recentClassifications && recentClassifications.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {recentClassifications.map((record) => (
                <div key={record.id} className="flex items-center space-x-3 p-3 bg-muted rounded-md" data-testid={`recent-record-${record.id}`}>
                  <img 
                    src={record.imageUrl} 
                    alt={`${record.animalType} classification`} 
                    className="w-12 h-12 rounded object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100';
                    }}
                  />
                  <div>
                    <p className="font-medium" data-testid={`text-animal-type-${record.id}`}>{record.animalType}</p>
                    <p className="text-sm text-muted-foreground" data-testid={`text-score-${record.id}`}>
                      Score: {record.classificationScore.toFixed(1)}%
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-muted-foreground" data-testid="no-classifications-message">
              <History className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No classifications yet. Start by uploading your first image!</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
