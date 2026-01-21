import { getDoorColor } from '../../utils/calendarUtils';

interface CalendarDoorProps {
  day: number;
  onClick: () => void;
}

function CalendarDoor({ day, onClick }: CalendarDoorProps) {
  return (
    <button
      type="button"
      onClick={onClick}
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
    </button>
  );
}

export default CalendarDoor;
