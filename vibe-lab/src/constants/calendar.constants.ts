/**
 * 어드벤트 캘린더의 총 일수
 */
export const ADVENT_CALENDAR_DAYS = 25;

/**
 * 어드벤트 캘린더의 날짜 배열을 생성합니다.
 */
export const getAdventCalendarDays = (): number[] => {
  return Array.from({ length: ADVENT_CALENDAR_DAYS }, (_, i) => i + 1);
};
