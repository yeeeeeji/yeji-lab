import { useState } from 'react';

/**
 * 제목 도메인의 상태 관리만 담당
 * 단일 책임: 제목 상태 관리
 */
export const useTitleState = () => {
  const [title, setTitle] = useState('To Do List');
  const [isEditingTitle, setIsEditingTitle] = useState(false);

  return {
    title,
    setTitle,
    isEditingTitle,
    setIsEditingTitle,
  };
};
