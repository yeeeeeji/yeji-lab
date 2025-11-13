import styled from "styled-components";

interface MenuPaletteContainerProps {
  $isOpen: boolean;
}

export const MenuPaletteContainerStyle = styled.div<MenuPaletteContainerProps>`
  display: ${(props) => (props.$isOpen ? "block" : "none")};
  position: absolute;
  right: 120px;
  bottom: 10px;
`;

export const MenuStyle = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 10px;
  font-size: 60px;
`;
