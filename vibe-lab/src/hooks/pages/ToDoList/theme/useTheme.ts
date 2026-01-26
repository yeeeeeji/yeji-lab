import { useState } from "react";

export const useThemeState = () => {
  const [showTheme, setShowTheme] = useState(false);

  return {
    showTheme,
    setShowTheme,
  };
};