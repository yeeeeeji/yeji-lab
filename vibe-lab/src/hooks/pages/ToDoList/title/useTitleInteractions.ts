import type { RefObject } from 'react';
import { useFocusManagement } from '../../../common/useFocusManagement';

interface UseTitleInteractionsProps {
  isEditingTitle: boolean;
  setIsEditingTitle: (value: boolean) => void;
  titleInputRef: RefObject<HTMLInputElement | null>;
}

/**
 * 제목 도메인의 사용자 상호작용만 담당
 * 단일 책임: 제목 관련 사용자 상호작용
 */
export const useTitleInteractions = ({
  isEditingTitle,
  setIsEditingTitle,
  titleInputRef,
}: UseTitleInteractionsProps) => {
  // 포커스 관리 (사이드 이펙트)
  useFocusManagement(titleInputRef, isEditingTitle, true);

  const handleTitleBlur = () => {
    setIsEditingTitle(false);
  };

  const handleTitleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setIsEditingTitle(false);
    }
  };

  return {
    handleTitleBlur,
    handleTitleKeyDown,
  };
};
