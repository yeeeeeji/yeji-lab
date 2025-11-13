import { MainContainer } from "../styles/Layout.styled";
import { Header } from "../components/Header/Header";

export const Home = () => {
  return (
    <MainContainer>
      <Header title="Home" />
      <div className="content"></div>
    </MainContainer>
  );
};
