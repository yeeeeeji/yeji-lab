import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      Home
      <Link to="/wishes">Wishes</Link>
    </div>
  );
}

export default Home;
