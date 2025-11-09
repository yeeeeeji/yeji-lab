import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/wishes">Wishes</Link>
    </div>
  );
}

export default Sidebar;
