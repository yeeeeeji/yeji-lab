import { useState } from "react";
import { MenuButtonStyle } from "./MenuButtonStyle";
import { MenuPalette } from "../MenuPalette/MenuPalette";

export const MenuButton = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ position: "relative" }}>
      <MenuButtonStyle onClick={handleToggle}>🫧</MenuButtonStyle>
      <MenuPalette isOpen={isOpen} />
    </div>
  );
};
