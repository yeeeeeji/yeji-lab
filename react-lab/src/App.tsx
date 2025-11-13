import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Wishes } from "./pages/Wishes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/wishes" element={<Wishes />} />
    </Routes>
  );
}

export default App;
