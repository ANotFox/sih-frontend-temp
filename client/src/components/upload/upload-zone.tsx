import { useState, useRef, useCallback } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { CloudUpload, Camera, X, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface UploadZoneProps {
  onAnalysisComplete: (resultId: string) => void;
}

export function UploadZone({ onAnalysisComplete }: UploadZoneProps) {
  const [dragOver, setDragOver] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const analyzeImageMutation = useMutation({
    mutationFn: async (file: File) => {
      const formData = new FormData();
      formData.append('image', file);
      
      const response = await fetch('/api/analyze-image', {
        method: 'POST',
        body: formData,
      });
      
      if (!response.ok) {
        throw new Error('Failed to analyze image');
      }
      
      return response.json();
    },
    onSuccess: (data) => {
      // Save the analysis results
      const formData = new FormData();
      formData.append('animalType', data.animalType);
      formData.append('classificationScore', data.classificationScore.toString());
      formData.append('measurements', JSON.stringify(data.measurements));
      formData.append('measurementPoints', JSON.stringify(data.measurementPoints));
      if (selectedFile) {
        formData.append('image', selectedFile);
      }
      
      fetch('/api/classifications', {
        method: 'POST',
        body: formData,
      })
      .then(response => response.json())
      .then(record => {
        onAnalysisComplete(record.id);
      })
      .catch(() => {
        toast({
          title: "Error",
          description: "Failed to save analysis results",
          variant: "destructive",
        });
      });
    },
    onError: () => {
      toast({
        title: "Analysis Failed", 
        description: "Failed to analyze the image. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleFileSelect = useCallback((file: File) => {
    if (!file.type.startsWith('image/')) {
      toast({
        title: "Invalid File",
        description: "Please select an image file",
        variant: "destructive",
      });
      return;
    }

    setSelectedFile(file);
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
  }, [toast]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  }, [handleFileSelect]);

  const handleFileInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileSelect(files[0]);
    }
  }, [handleFileSelect]);

  const handleClear = useCallback(() => {
    setSelectedFile(null);
    setPreviewUrl("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    URL.revokeObjectURL(previewUrl);
  }, [previewUrl]);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleCameraClick = () => {
    // In a real implementation, this would open the camera
    toast({
      title: "Camera Feature",
      description: "Camera functionality would be implemented here for mobile devices",
    });
  };

  const handleAnalyze = () => {
    if (selectedFile) {
      analyzeImageMutation.mutate(selectedFile);
    }
  };

  return (
    <div
      className={cn(
        "upload-zone border-2 border-dashed border-border bg-card p-8 rounded-lg text-center transition-all duration-300",
        dragOver && "border-primary bg-accent",
        "hover:border-primary hover:bg-muted"
      )}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      data-testid="upload-zone"
    >
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileInputChange}
        className="hidden"
        data-testid="file-input"
      />

      {analyzeImageMutation.isPending ? (
        <div className="space-y-4" data-testid="loading-state">
          <Loader2 className="h-12 w-12 mx-auto animate-spin text-primary" />
          <div>
            <p className="text-lg font-medium">Analyzing image...</p>
            <p className="text-muted-foreground">Please wait while our AI processes the image</p>
          </div>
        </div>
      ) : previewUrl ? (
        <div className="space-y-4" data-testid="image-preview">
          <img 
            src={previewUrl} 
            alt="Preview" 
            className="max-w-full max-h-64 mx-auto rounded-lg"
            data-testid="preview-image"
          />
          <div className="flex gap-3 justify-center">
            <Button 
              onClick={handleAnalyze}
              className="bg-chart-1 hover:bg-chart-1/90"
              data-testid="button-analyze"
            >
              <Loader2 className="mr-2 h-4 w-4" />
              Submit for Analysis
            </Button>
            <Button 
              variant="outline" 
              onClick={handleClear}
              data-testid="button-clear"
            >
              <X className="mr-2 h-4 w-4" />
              Clear
            </Button>
          </div>
        </div>
      ) : (
        <div className="space-y-4" data-testid="upload-prompt">
          <CloudUpload className="h-16 w-16 mx-auto text-muted-foreground" />
          <div>
            <p className="text-lg font-medium">Upload Image or Take Photo</p>
            <p className="text-muted-foreground">Drag and drop an image here, or click to select</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button onClick={handleUploadClick} data-testid="button-upload">
              <CloudUpload className="mr-2 h-4 w-4" />
              Choose File
            </Button>
            <Button 
              variant="secondary" 
              onClick={handleCameraClick}
              data-testid="button-camera"
            >
              <Camera className="mr-2 h-4 w-4" />
              Take Photo
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
