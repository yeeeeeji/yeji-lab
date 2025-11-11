import { MainTitle } from "../styles/Typography.styled";
import { MainContainer, MainHeader } from "../styles/Layout.styled";
import MenuButton from "../components/MenuButton/MenuButton";

function Home() {
  return (
    <MainContainer>
      <MainHeader>
        <MenuButton />
        <MainTitle>Home</MainTitle>
      </MainHeader>
      <div className="content"></div>
    </MainContainer>
  );
}

export default Home;
