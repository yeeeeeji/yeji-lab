import { useState } from "react";
import { MenuButtonStyle } from "./MenuButtonStyle";
import { MenuPalette } from "../MenuPalette/MenuPalette";
import { PAGES } from "../../constants/pages";
import { useLocation } from "react-router-dom";

export const MenuButton = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const location = useLocation();

  const pageEmoji: string =
    PAGES.find((page) => page.path === location.pathname)?.emoji ?? "?";

  return (
    <div style={{ display: "flex", position: "relative" }}>
      <MenuButtonStyle onClick={handleToggle}>{pageEmoji}</MenuButtonStyle>
      <MenuPalette isOpen={isOpen} />
    </div>
  );
};
