import { MainContainer, MainContent } from "../styles/Layout.styled";
import { Header } from "../components/Header/Header";
import { AddWishButton } from "../features/wishes/components/AddWishButton/AddWishButton";

export const Wishes = () => {
  return (
    <MainContainer>
      <Header title="Wishes" />
      <MainContent>
        <AddWishButton />
      </MainContent>
    </MainContainer>
  );
};
