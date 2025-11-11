import { useState } from "react";
import { MenuButtonStyle } from "./MenuButtonStyle";
import MenuPalette from "../MenuPalette/MenuPalette";

function MenuButton() {
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
}

export default MenuButton;
