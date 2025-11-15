import { MainContainer, MainContent } from "../styles/Layout.styled";
import { Header } from "../components/Header/Header";

export const Wishes = () => {
  return (
    <MainContainer>
      <Header title="Wishes" />
      <MainContent>
        <div style={{ height: "100px" }} />
      </MainContent>
    </MainContainer>
  );
};
