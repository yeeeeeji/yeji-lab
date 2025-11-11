import { useState } from "react";
import { MenuButtonStyle } from "./MenuButtonStyle";
import MenuPalette from "../MenuPalette/MenuPalette";

function MenuButton() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <MenuButtonStyle onClick={handleToggle}>🫧</MenuButtonStyle>
      <div style={{ display: isOpen ? "block" : "none" }}>
        <MenuPalette />
      </div>
    </>
  );
}

export default MenuButton;
