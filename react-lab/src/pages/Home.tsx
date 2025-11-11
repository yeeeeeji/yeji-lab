import { MainTitle } from "../styles/Typography.styled";
import {
  MainContainer,
  MainHeader,
  MainTitleContainer,
} from "../styles/Layout.styled";
import MenuButton from "../components/MenuButton/MenuButton";

function Home() {
  return (
    <MainContainer>
      <MainHeader>
        <MainTitleContainer>
          <MenuButton />
          <MainTitle>Home</MainTitle>
        </MainTitleContainer>
      </MainHeader>
      <div className="content"></div>
    </MainContainer>
  );
}

export default Home;
