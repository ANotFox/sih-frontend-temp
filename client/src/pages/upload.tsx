import { useState } from "react";
import { useLocation } from "wouter";
import { UploadZone } from "@/components/upload/upload-zone";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Upload() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleAnalysisComplete = (resultId: string) => {
    toast({
      title: t('toast.analysisComplete'),
      description: t('toast.analysisCompleteDesc'),
    });
    setLocation(`/results/${resultId}`);
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-4 font-serif" data-testid="upload-title">
          {t('upload.title')}
        </h1>
        <p className="text-lg text-muted-foreground" data-testid="upload-description">
          {t('upload.description')}
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <UploadZone onAnalysisComplete={handleAnalysisComplete} />
        
        {/* Instructions */}
        <Card className="mt-6">
          <CardContent className="p-4">
            <h4 className="font-semibold mb-2">{t('upload.bestResults')}</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• {t('upload.standing')}</li>
              <li>• {t('upload.fullBody')}</li>
              <li>• {t('upload.goodLighting')}</li>
              <li>• {t('upload.avoidBlurry')}</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
