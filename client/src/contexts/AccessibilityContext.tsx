import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AccessibilityContextType {
  isHighContrast: boolean;
  fontSize: number;
  audioFeedbackEnabled: boolean;
  toggleHighContrast: () => void;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
  resetFontSize: () => void;
  toggleAudioFeedback: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

interface AccessibilityProviderProps {
  children: ReactNode;
}

export const MIN_FONT_SIZE = 80; // 80% of base size
export const MAX_FONT_SIZE = 150; // 150% of base size
export const FONT_SIZE_STEP = 10; // 10% increment/decrement
export const DEFAULT_FONT_SIZE = 100; // 100% of base size

export function AccessibilityProvider({ children }: AccessibilityProviderProps) {
  const [isHighContrast, setIsHighContrast] = useState(() => {
    const saved = localStorage.getItem('accessibility-high-contrast');
    return saved === 'true';
  });

  const [fontSize, setFontSize] = useState(() => {
    const saved = localStorage.getItem('accessibility-font-size');
    return saved ? parseInt(saved, 10) : DEFAULT_FONT_SIZE;
  });

  const [audioFeedbackEnabled, setAudioFeedbackEnabled] = useState(() => {
    const saved = localStorage.getItem('accessibility-audio-feedback');
    return saved === null ? true : saved === 'true'; // Default to enabled
  });

  const toggleHighContrast = () => {
    setIsHighContrast(prev => {
      const newValue = !prev;
      localStorage.setItem('accessibility-high-contrast', newValue.toString());
      return newValue;
    });
  };

  const increaseFontSize = () => {
    setFontSize(prev => {
      const newSize = Math.min(prev + FONT_SIZE_STEP, MAX_FONT_SIZE);
      localStorage.setItem('accessibility-font-size', newSize.toString());
      return newSize;
    });
  };

  const decreaseFontSize = () => {
    setFontSize(prev => {
      const newSize = Math.max(prev - FONT_SIZE_STEP, MIN_FONT_SIZE);
      localStorage.setItem('accessibility-font-size', newSize.toString());
      return newSize;
    });
  };

  const resetFontSize = () => {
    setFontSize(DEFAULT_FONT_SIZE);
    localStorage.setItem('accessibility-font-size', DEFAULT_FONT_SIZE.toString());
  };

  const toggleAudioFeedback = () => {
    setAudioFeedbackEnabled(prev => {
      const newValue = !prev;
      localStorage.setItem('accessibility-audio-feedback', newValue.toString());
      return newValue;
    });
  };

  useEffect(() => {
    // Apply high contrast theme
    if (isHighContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  }, [isHighContrast]);

  useEffect(() => {
    // Apply font size scaling
    document.documentElement.style.fontSize = `${fontSize}%`;
  }, [fontSize]);

  const value = {
    isHighContrast,
    fontSize,
    audioFeedbackEnabled,
    toggleHighContrast,
    increaseFontSize,
    decreaseFontSize,
    resetFontSize,
    toggleAudioFeedback,
  };

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  );
}

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};