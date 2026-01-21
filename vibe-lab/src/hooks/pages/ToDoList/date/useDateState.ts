import { useState, useEffect } from 'react';

/**
 * 날짜 도메인의 상태 관리만 담당
 * 단일 책임: 날짜 상태 관리
 */
export const useDateState = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  // 오늘 날짜를 기본값으로 설정
  useEffect(() => {
    setSelectedDate(new Date());
  }, []);

  return {
    selectedDate,
    setSelectedDate,
    showCalendar,
    setShowCalendar,
  };
};
