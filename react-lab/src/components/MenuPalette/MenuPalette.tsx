import { useLocation, useNavigate } from "react-router-dom";
import { MenuPaletteContainerStyle, MenuStyle } from "./MenuPaletteStyle";
import { PAGES, type Page } from "../../constants/pages";

interface MenuPaletteProps {
  isOpen: boolean;
}

export const MenuPalette = ({ isOpen }: MenuPaletteProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const menus: Page[] = PAGES.filter((page) => page.path !== location.pathname);

  return (
    <MenuPaletteContainerStyle $isOpen={isOpen}>
      {menus.map((page) => (
        <MenuStyle key={page.name} onClick={() => navigate(page.path)}>
          {page.emoji}
        </MenuStyle>
      ))}
    </MenuPaletteContainerStyle>
  );
};
