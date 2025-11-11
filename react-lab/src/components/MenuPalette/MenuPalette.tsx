import { useLocation, useNavigate } from "react-router-dom";

function MenuPalette() {
  const pages: { [key: string]: string }[] = [
    { name: "Home", path: "/" },
    { name: "Wishes", path: "/wishes" },
  ];

  const location = useLocation();
  const navigate = useNavigate();

  const menus: { [key: string]: string }[] = pages.filter(
    (page) => page.path !== location.pathname
  );

  return (
    <div>
      {menus.map((page) => (
        <button key={page.name} onClick={() => navigate(page.path)}>
          {page.name}
        </button>
      ))}
    </div>
  );
}

export default MenuPalette;
