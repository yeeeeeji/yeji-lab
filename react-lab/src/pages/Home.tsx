import { Link } from "react-router-dom";
import SidebarToggle from "../components/SidebarToggle/SidebarToggle";
import { MainTitle } from "../styles/Typography.styled";

function Home() {
  return (
    <div>
      <div className="title-container">
        <MainTitle>Home</MainTitle>
        <div>
          <SidebarToggle />
          {/* <div>
            <Link to="/wishes">Wishes</Link>
          </div> */}
        </div>
      </div>
      <div className="content"></div>
    </div>
  );
}

export default Home;
