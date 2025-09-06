import { Button } from "@/components/ui/button";
import { 
  Contrast, 
  Type, 
  Plus, 
  Minus 
} from "lucide-react";
import { useAccessibility, MIN_FONT_SIZE, MAX_FONT_SIZE } from "@/contexts/AccessibilityContext";
import { useLanguage } from "@/contexts/LanguageContext";

export function AccessibilityControls() {
  const { 
    isHighContrast, 
    fontSize, 
    toggleHighContrast, 
    increaseFontSize, 
    decreaseFontSize 
  } = useAccessibility();
  const { t } = useLanguage();

  return (
    <div className="flex items-center space-x-1">
      {/* High Contrast Toggle */}
      <Button
        variant={isHighContrast ? "default" : "ghost"}
        size="sm"
        onClick={toggleHighContrast}
        className="h-8 w-8 px-0"
        aria-label={isHighContrast ? "Disable high contrast mode" : "Enable high contrast mode"}
        data-testid="high-contrast-toggle"
      >
        <Contrast className="h-4 w-4" />
        <span className="sr-only">
          {isHighContrast ? "Disable high contrast" : "Enable high contrast"}
        </span>
      </Button>

      {/* Font Size Controls */}
      <div className="flex items-center border rounded-md">
        <Button
          variant="ghost"
          size="sm"
          onClick={decreaseFontSize}
          disabled={fontSize <= MIN_FONT_SIZE}
          className="h-8 w-8 px-0 rounded-r-none border-r"
          aria-label="Decrease font size"
          data-testid="decrease-font-size"
        >
          <Type className="h-3 w-3" />
          <Minus className="h-2 w-2 -ml-1" />
          <span className="sr-only">Decrease font size</span>
        </Button>
        
        <div className="px-2 text-xs font-medium min-w-[2.5rem] text-center">
          {fontSize}%
        </div>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={increaseFontSize}
          disabled={fontSize >= MAX_FONT_SIZE}
          className="h-8 w-8 px-0 rounded-l-none border-l"
          aria-label="Increase font size"
          data-testid="increase-font-size"
        >
          <Type className="h-3 w-3" />
          <Plus className="h-2 w-2 -ml-1" />
          <span className="sr-only">Increase font size</span>
        </Button>
      </div>
    </div>
  );
}