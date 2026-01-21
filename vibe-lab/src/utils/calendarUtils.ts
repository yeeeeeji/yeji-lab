/**
 * 날짜 번호에 따라 캘린더 문의 색상을 반환합니다.
 */
export const getDoorColor = (dayNumber: number): string => {
  if (dayNumber % 3 === 0) {
    return 'bg-gradient-to-br from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400';
  } else if (dayNumber % 2 === 0) {
    return 'bg-gradient-to-br from-teal-400 to-emerald-600 hover:from-teal-300 hover:to-emerald-500';
  } else {
    return 'bg-gradient-to-br from-pink-500 to-red-600 hover:from-pink-400 hover:to-red-500';
  }
};
