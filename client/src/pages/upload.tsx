import { useState } from "react";
import { useLocation } from "wouter";
import { UploadZone } from "@/components/upload/upload-zone";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export default function Upload() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const handleAnalysisComplete = (resultId: string) => {
    toast({
      title: "Analysis Complete",
      description: "Your image has been successfully analyzed.",
    });
    setLocation(`/results/${resultId}`);
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-4 font-serif" data-testid="upload-title">
          Upload Animal Image
        </h1>
        <p className="text-lg text-muted-foreground" data-testid="upload-description">
          Take a clear photo of the animal or upload from your device. Ensure the full body is visible for accurate analysis.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <UploadZone onAnalysisComplete={handleAnalysisComplete} />
        
        {/* Instructions */}
        <Card className="mt-6">
          <CardContent className="p-4">
            <h4 className="font-semibold mb-2">For best results:</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Ensure the animal is standing upright</li>
              <li>• Capture the full body from a side view</li>
              <li>• Use good lighting conditions</li>
              <li>• Avoid blurry or distorted images</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
