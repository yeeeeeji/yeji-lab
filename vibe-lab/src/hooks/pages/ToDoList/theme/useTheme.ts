import { useState } from "react";

export const useThemeState = () => {
  const [showTheme, setShowTheme] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("To Do List");
  const [bgColor, setBgColor] = useState<string>("#FFFFFF");

  return {
    showTheme,
    setShowTheme,
    title,
    setTitle,
    bgColor,
    setBgColor,
  };
};
