import { AlertTriangle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface ErrorMessageProps {
  title?: string;
  message: string;
  onDismiss?: () => void;
  actionLabel?: string;
  onAction?: () => void;
}

export function ErrorMessage({ 
  title = "Error", 
  message, 
  onDismiss, 
  actionLabel, 
  onAction 
}: ErrorMessageProps) {
  return (
    <Alert className="border-destructive bg-destructive/10 text-destructive" role="alert">
      <AlertTriangle className="h-4 w-4" aria-hidden="true" />
      <AlertDescription className="flex items-start justify-between">
        <div className="flex-1">
          <div className="font-medium mb-1">{title}</div>
          <div className="text-sm">{message}</div>
          {actionLabel && onAction && (
            <Button
              variant="outline"
              size="sm"
              onClick={onAction}
              className="mt-2 border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
            >
              {actionLabel}
            </Button>
          )}
        </div>
        {onDismiss && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onDismiss}
            className="h-6 w-6 p-0 text-destructive hover:bg-destructive hover:text-destructive-foreground"
            aria-label="Dismiss error message"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </AlertDescription>
    </Alert>
  );
}