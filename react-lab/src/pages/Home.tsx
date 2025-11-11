import SidebarToggle from "../components/MenuButton/MenuButton";
import { MainTitle } from "../styles/Typography.styled";
import { MainContainer, MainHeader } from "../styles/Layout.styled";

function Home() {
  return (
    <MainContainer>
      <MainHeader>
        <SidebarToggle />
        <MainTitle>Home</MainTitle>
      </MainHeader>
      <div className="content"></div>
    </MainContainer>
  );
}

export default Home;
