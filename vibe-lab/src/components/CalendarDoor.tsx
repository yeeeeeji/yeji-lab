import { Link } from 'react-router-dom';

interface CalendarDoorProps {
  day: number;
}

function CalendarDoor({ day }: CalendarDoorProps) {
  // 각 날짜별로 다른 색상 적용
  const getDoorColor = (dayNumber: number) => {
    if (dayNumber % 3 === 0) {
      return 'bg-gradient-to-br from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400';
    } else if (dayNumber % 2 === 0) {
      return 'bg-gradient-to-br from-teal-400 to-emerald-600 hover:from-teal-300 hover:to-emerald-500';
    } else {
      return 'bg-gradient-to-br from-pink-500 to-red-600 hover:from-pink-400 hover:to-red-500';
    }
  };

  return (
    <Link
      to={`/day/${day}`}
      className={`
        aspect-square
        ${getDoorColor(day)}
        border-4 border-white
        rounded-xl
        flex items-center justify-center
        text-white text-3xl font-bold
        shadow-lg
        transition-all duration-300
        hover:-translate-y-1 hover:scale-105 hover:shadow-xl
        relative overflow-hidden
        group
      `}
    >
      {/* 반짝이는 효과 */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <span className="relative z-10 drop-shadow-md">{day}</span>
    </Link>
  );
}

export default CalendarDoor;
