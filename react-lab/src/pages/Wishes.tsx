import { MainContainer, MainContent } from "../styles/Layout.styled";
import { Header } from "../components/Header/Header";
import { AddWishButton } from "../features/wishes/components/AddWishButton/AddWishButton";
import { WishModal } from "../features/wishes/components/WishModal/WishModal";

export const Wishes = () => {
  return (
    <MainContainer>
      <Header title="Wishes" />
      <MainContent>
        <AddWishButton />
        <WishModal />
      </MainContent>
    </MainContainer>
  );
};
