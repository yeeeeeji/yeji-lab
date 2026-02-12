import { useClickOutside } from "../../../common/useClickOutside";

interface UseThemeInteractionsProps {
  themeRef: React.RefObject<HTMLDivElement | null>;
  showTheme: boolean;
  setShowTheme: React.Dispatch<React.SetStateAction<boolean>>;
  setTitle: (value: string) => void;
  setBgColor: (value: string) => void;
}

export const useThemeInteractions = ({
  themeRef,
  showTheme,
  setShowTheme,
  setTitle,
  setBgColor,
}: UseThemeInteractionsProps) => {
  useClickOutside(themeRef, () => setShowTheme(false), showTheme);

  const handleShowTheme = () => {
    setShowTheme((prev: boolean) => !prev);
  };

  const handleTheme = (title: string, color: string) => {
    setTitle(title);
    setBgColor(color);
  };

  const handleBgColor = (color: string) => {
    setBgColor(color);
  };

  return {
    handleShowTheme,
    handleTheme,
    handleBgColor,
  };
};
