import { useClickOutside } from "../../../common/useClickOutside";

interface UseThemeInteractionsProps {
  themeRef: React.RefObject<HTMLDivElement | null>;
  showTheme: boolean;
  setShowTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

export const useThemeInteractions = ({
  themeRef,
  showTheme,
  setShowTheme,
}: UseThemeInteractionsProps) => {
  useClickOutside(themeRef, () => setShowTheme(false), showTheme);

  const handleShowTheme = () => {
    setShowTheme((prev: boolean) => !prev);
  };

  return {
    handleShowTheme,
  };
};