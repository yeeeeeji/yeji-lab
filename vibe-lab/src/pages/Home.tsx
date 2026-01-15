import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const days = Array.from({ length: 25 }, (_, i) => i + 1);

  return (
    <div className="advent-calendar">
      <h1 className="advent-title">🎄 어드벤트 캘린더 🎄</h1>
      <div className="calendar-grid">
        {days.map((day) => (
          <Link
            key={day}
            to={`/day/${day}`}
            className="calendar-door"
          >
            <span className="door-number">{day}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
