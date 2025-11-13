import { MainHeader, MainTitleContainer } from "../../styles/Layout.styled";
import { MainTitle } from "../../styles/Typography.styled";
import MenuButton from "../MenuButton/MenuButton";

interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <MainHeader>
      <MainTitleContainer>
        <MenuButton />
        <MainTitle>{title}</MainTitle>
      </MainTitleContainer>
    </MainHeader>
  );
};
