import { MainContainer } from "../styles/Layout.styled";
import { Header } from "../components/Header/Header";

function Home() {
  return (
    <MainContainer>
      <Header title="Home" />
      <div className="content"></div>
    </MainContainer>
  );
}

export default Home;
