export interface AnalysisResult {
  animalType: string;
  classificationScore: number;
  measurements: {
    heightAtWithers: number;
    bodyLength: number;
    rumpAngle: number;
    bodyConditionScore: number;
    estimatedWeight: number;
  };
  measurementPoints: Array<{
    x: number;
    y: number;
    label: string;
  }>;
  imageUrl: string;
}

export interface UploadState {
  isUploading: boolean;
  isAnalyzing: boolean;
  previewUrl: string | null;
  selectedFile: File | null;
}
