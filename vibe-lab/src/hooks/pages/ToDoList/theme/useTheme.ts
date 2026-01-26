import { useState } from "react";

export const useThemeState = () => {
  const [showTheme, setShowTheme] = useState(false);
  const [bgColor, setBgColor] = useState('#FFFFFF');

  return {
    showTheme,
    setShowTheme,
    bgColor,
    setBgColor
  };
};