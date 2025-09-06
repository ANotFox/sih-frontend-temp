import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ClassificationRecord } from "@shared/schema";
import { format } from "date-fns";
import { useLanguage } from "@/contexts/LanguageContext";

interface RecordCardProps {
  record: ClassificationRecord;
}

export function RecordCard({ record }: RecordCardProps) {
  const formattedDate = format(new Date(record.createdAt), "MMM dd, yyyy • HH:mm");
  const { t } = useLanguage();

  return (
    <Card data-testid={`record-card-${record.id}`}>
      <CardContent className="p-4">
        <div className="aspect-square mb-3 overflow-hidden rounded-md">
          <img 
            src={record.imageUrl} 
            alt={`${record.animalType} classification from ${formattedDate} with ${record.classificationScore.toFixed(1)}% score`} 
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300';
            }}
            data-testid={`record-image-${record.id}`}
          />
        </div>
        <h4 className="font-semibold mb-1" data-testid={`record-title-${record.id}`}>
          {record.animalType}
        </h4>
        <p className="text-sm text-muted-foreground mb-2" data-testid={`record-score-${record.id}`}>
          {t('dashboard.score')}: {record.classificationScore.toFixed(1)}%
        </p>
        <p className="text-xs text-muted-foreground mb-3" data-testid={`record-date-${record.id}`}>
          {formattedDate}
        </p>
        <Link href={`/results/${record.id}`}>
          <Button 
            variant="outline" 
            className="w-full text-sm"
            data-testid={`button-view-details-${record.id}`}
          >
            {t('history.viewDetails')}
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
