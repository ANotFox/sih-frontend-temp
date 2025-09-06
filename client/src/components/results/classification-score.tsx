import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useLanguage } from "@/contexts/LanguageContext";

interface ClassificationScoreProps {
  score: number;
  animalType: string;
}

export function ClassificationScore({ score, animalType }: ClassificationScoreProps) {
  const { t } = useLanguage();
  
  return (
    <Card>
      <CardContent className="p-6 text-center">
        <h3 className="text-xl font-semibold mb-2 font-serif">{t('results.classificationScore')}</h3>
        <div className="text-4xl font-bold text-chart-1 mb-2" data-testid="classification-score">
          {score.toFixed(1)}%
        </div>
        <p className="text-muted-foreground mb-4" data-testid="animal-type">
          {animalType}
        </p>
        <Progress value={score} className="h-3" data-testid="score-progress" />
      </CardContent>
    </Card>
  );
}
