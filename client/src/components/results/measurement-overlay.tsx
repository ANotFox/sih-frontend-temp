import { MeasurementPoint } from "@shared/schema";

interface MeasurementOverlayProps {
  imageUrl: string;
  measurementPoints?: MeasurementPoint[];
  animalType: string;
}

export function MeasurementOverlay({ imageUrl, measurementPoints, animalType }: MeasurementOverlayProps) {
  return (
    <div className="relative inline-block w-full" data-testid="measurement-overlay">
      <img 
        src={imageUrl} 
        alt={`Analyzed ${animalType} image`} 
        className="w-full rounded-lg"
        onError={(e) => {
          (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400';
        }}
        data-testid="analyzed-image"
      />
      {measurementPoints && measurementPoints.map((point, index) => (
        <div
          key={index}
          className="measurement-point"
          style={{ 
            top: `${point.y}%`, 
            left: `${point.x}%` 
          }}
          title={point.label}
          data-testid={`measurement-point-${index}`}
        />
      ))}
    </div>
  );
}
