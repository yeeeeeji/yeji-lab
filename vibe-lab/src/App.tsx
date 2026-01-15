import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Day1 from './pages/Day1';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/day/1" element={<Day1 />} />
      </Routes>
    </Router>
  );
}

export default App;
