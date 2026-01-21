import { useEffect } from 'react';
import type { RefObject } from 'react';

/**
 * 외부 클릭을 감지하는 공통 훅
 * 사이드 이펙트만 담당 (사용자 상호작용 감지)
 */
export const useClickOutside = (
  ref: RefObject<HTMLElement | null>,
  handler: () => void,
  isEnabled: boolean,
) => {
  useEffect(() => {
    if (!isEnabled) {
      return;
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, handler, isEnabled]);
};
