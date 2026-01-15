import { Link } from 'react-router-dom';
import './Day1.css';

function Day1() {
  return (
    <div className="day-page">
      <div className="day-content">
        <h1 className="day-title">🎁 Day 1</h1>
        <p className="day-message">첫 번째 날입니다!</p>
        <Link to="/" className="back-button">
          ← 홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
}

export default Day1;
