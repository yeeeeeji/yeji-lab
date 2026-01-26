import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ToDoList from './pages/ToDoList/ToDoList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/day/1" element={<ToDoList />} />
      </Routes>
    </Router>
  );
}

export default App;
