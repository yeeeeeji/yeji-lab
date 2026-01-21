import type { RefObject } from 'react';
import { useClickOutside } from '../../../common/useClickOutside';

interface UseDateInteractionsProps {
  setSelectedDate: (date: Date) => void;
  showCalendar: boolean;
  setShowCalendar: (value: boolean) => void;
  calendarRef: RefObject<HTMLDivElement | null>;
}

/**
 * 날짜 도메인의 사용자 상호작용만 담당
 * 단일 책임: 날짜 관련 사용자 상호작용
 */
export const useDateInteractions = ({
  setSelectedDate,
  showCalendar,
  setShowCalendar,
  calendarRef,
}: UseDateInteractionsProps) => {
  // 외부 클릭 감지 (사이드 이펙트)
  useClickOutside(calendarRef, () => setShowCalendar(false), showCalendar);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = new Date(e.target.value);
    setSelectedDate(newDate);
    setShowCalendar(false);
  };

  return {
    handleDateChange,
  };
};
