import { useNavigate } from 'react-router-dom';
import CalendarDoor from '../components/features/CalendarDoor';
import { getAdventCalendarDays } from '../constants/calendar.constants';

function Home() {
  const navigate = useNavigate();
  const days = getAdventCalendarDays();

  const handleDoorClick = (day: number) => {
    navigate(`/day/${day}`);
  };

  return (
    <div className="min-h-screen py-8 px-4 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 flex flex-col items-center justify-center">
      <h1 className="text-5xl md:text-6xl text-white mb-12 font-bold drop-shadow-lg">
        🎄 어드벤트 캘린더 🎄
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-4xl w-full">
        {days.map((day) => (
          <CalendarDoor
            key={day}
            day={day}
            onClick={() => handleDoorClick(day)}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
