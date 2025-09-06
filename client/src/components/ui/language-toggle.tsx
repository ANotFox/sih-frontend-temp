import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Languages } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Language, getLanguageName } from "@/lib/translations";

const languages: Language[] = ['en', 'hi', 'ml', 'raj'];

export function LanguageToggle() {
  const { currentLanguage, setLanguage } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className="h-8 w-8 px-0"
          data-testid="language-toggle"
        >
          <Languages className="h-4 w-4" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" data-testid="language-menu">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language}
            onClick={() => setLanguage(language)}
            className={currentLanguage === language ? "bg-accent" : ""}
            data-testid={`language-option-${language}`}
          >
            <span className="text-sm">
              {getLanguageName(language)}
            </span>
            {currentLanguage === language && (
              <span className="ml-auto text-xs">✓</span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}