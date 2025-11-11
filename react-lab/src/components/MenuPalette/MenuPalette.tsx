import { useLocation, useNavigate } from "react-router-dom";
import { MenuPaletteContainerStyle, MenuStyle } from "./MenuPaletteStyle";

interface MenuPaletteProps {
  isOpen: boolean;
}

function MenuPalette({ isOpen }: MenuPaletteProps) {
  const pages: { [key: string]: string }[] = [
    { name: "Home", emoji: "🫧", path: "/" },
    { name: "Wishes", emoji: "🌠", path: "/wishes" },
  ];

  const location = useLocation();
  const navigate = useNavigate();

  const menus: { [key: string]: string }[] = pages.filter(
    (page) => page.path !== location.pathname
  );

  return (
    <MenuPaletteContainerStyle $isOpen={isOpen}>
      {menus.map((page) => (
        <MenuStyle key={page.name} onClick={() => navigate(page.path)}>
          {page.emoji}
        </MenuStyle>
      ))}
    </MenuPaletteContainerStyle>
  );
}

export default MenuPalette;
