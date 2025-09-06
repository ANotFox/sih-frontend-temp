import { useState, useRef, useCallback } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { ErrorMessage } from "@/components/ui/error-message";
import { CloudUpload, Camera, X, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAccessibility } from "@/contexts/AccessibilityContext";
import { audioFeedback } from "@/lib/audio-feedback";

interface UploadZoneProps {
  onAnalysisComplete: (resultId: string) => void;
}

export function UploadZone({ onAnalysisComplete }: UploadZoneProps) {
  const [dragOver, setDragOver] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();
  const { t } = useLanguage();
  const { audioFeedbackEnabled } = useAccessibility();

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
        if (audioFeedbackEnabled) {
          audioFeedback.playSuccess();
        }
        onAnalysisComplete(record.id);
      })
      .catch(() => {
        if (audioFeedbackEnabled) {
          audioFeedback.playError();
        }
        setError("Unable to save analysis results. Please check your connection and try again.");
        toast({
          title: t('toast.saveError'),
          description: t('toast.saveErrorDesc'),
          variant: "destructive",
        });
      });
    },
    onError: (error: any) => {
      if (audioFeedbackEnabled) {
        audioFeedback.playError();
      }
      let errorMessage = "Analysis failed. Please check your connection and try again.";
      
      if (error?.message?.includes('network')) {
        errorMessage = "Network error. Please check your internet connection and try again.";
      } else if (error?.message?.includes('size')) {
        errorMessage = "File too large. Please choose an image smaller than 10MB.";
      } else if (error?.message?.includes('format')) {
        errorMessage = "Invalid file format. Please upload a valid image file (JPG, PNG, etc.).";
      }
      
      setError(errorMessage);
      toast({
        title: t('toast.analysisFailed'), 
        description: errorMessage,
        variant: "destructive",
      });
    },
  });

  const handleFileSelect = useCallback((file: File) => {
    if (!file.type.startsWith('image/')) {
      if (audioFeedbackEnabled) {
        audioFeedback.playError();
      }
      const errorMsg = "Please select a valid image file (JPG, PNG, GIF, etc.).";
      setError(errorMsg);
      toast({
        title: t('toast.invalidFile'),
        description: errorMsg,
        variant: "destructive",
      });
      return;
    }
    
    // Clear any previous errors
    setError(null);

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
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    URL.revokeObjectURL(previewUrl);
  }, [previewUrl]);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleUploadClick();
    }
  };

  const handleCameraClick = () => {
    // In a real implementation, this would open the camera
    toast({
      title: t('toast.cameraFeature'),
      description: t('toast.cameraFeatureDesc'),
    });
  };

  const handleAnalyze = () => {
    if (selectedFile) {
      analyzeImageMutation.mutate(selectedFile);
    }
  };

  return (
    <div className="space-y-4">
      {error && (
        <ErrorMessage
          message={error}
          onDismiss={() => setError(null)}
          actionLabel="Try Again"
          onAction={handleClear}
        />
      )}
      
      <div
        className={cn(
          "upload-zone border-2 border-dashed border-border bg-card p-8 rounded-lg text-center transition-all duration-300",
          dragOver && "border-primary bg-accent",
          "hover:border-primary hover:bg-muted"
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onKeyDown={handleKeyDown}
        onClick={handleUploadClick}
        data-testid="upload-zone"
        role="button"
        tabIndex={0}
        aria-label="Upload zone for animal images - click, drag and drop, or press Enter to select files"
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
          <Loader2 className="h-12 w-12 mx-auto animate-spin text-primary" aria-hidden="true" />
          <div>
            <p className="text-lg font-medium">{t('upload.analyzing')}</p>
            <p className="text-muted-foreground">{t('upload.analyzeWait')}</p>
          </div>
        </div>
      ) : previewUrl ? (
        <div className="space-y-4" data-testid="image-preview">
          <img 
            src={previewUrl} 
            alt="Preview of uploaded animal image ready for AI analysis" 
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
              {t('upload.submitAnalysis')}
            </Button>
            <Button 
              variant="outline" 
              onClick={handleClear}
              data-testid="button-clear"
            >
              <X className="mr-2 h-4 w-4" />
              {t('upload.clear')}
            </Button>
          </div>
        </div>
      ) : (
        <div className="space-y-4" data-testid="upload-prompt">
          <CloudUpload className="h-16 w-16 mx-auto text-muted-foreground" aria-hidden="true" />
          <div>
            <p className="text-lg font-medium">{t('upload.uploadPrompt')}</p>
            <p className="text-muted-foreground">{t('upload.dragDropPrompt')}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button onClick={handleUploadClick} data-testid="button-upload">
              <CloudUpload className="mr-2 h-4 w-4" />
              {t('upload.chooseFile')}
            </Button>
            <Button 
              variant="secondary" 
              onClick={handleCameraClick}
              data-testid="button-camera"
            >
              <Camera className="mr-2 h-4 w-4" />
              {t('upload.takePhoto')}
            </Button>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}
