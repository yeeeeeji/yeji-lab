import { useClickOutside } from "../../../common/useClickOutside";

interface UseThemeInteractionsProps {
  themeRef: React.RefObject<HTMLDivElement | null>;
  showTheme: boolean;
  setShowTheme: React.Dispatch<React.SetStateAction<boolean>>;
  setBgColor: (value: string) => void;
}

export const useThemeInteractions = ({
  themeRef,
  showTheme,
  setShowTheme,
  setBgColor
}: UseThemeInteractionsProps) => {
  useClickOutside(themeRef, () => setShowTheme(false), showTheme);

  const handleShowTheme = () => {
    setShowTheme((prev: boolean) => !prev);
  }; 

  const handleBgColor = (color: string) => {
    setBgColor(color);
  }

  return {
    handleShowTheme,
    handleBgColor
  };
};