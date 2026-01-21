import { useEffect } from 'react';
import type { RefObject } from 'react';

/**
 * 포커스 관리를 담당하는 공통 훅
 * 사이드 이펙트만 담당 (포커스 제어)
 */
export const useFocusManagement = (
  ref: RefObject<HTMLInputElement | null>,
  shouldFocus: boolean,
  shouldSelect?: boolean,
) => {
  useEffect(() => {
    if (shouldFocus && ref.current) {
      ref.current.focus();
      if (shouldSelect) {
        ref.current.select();
      }
    }
  }, [ref, shouldFocus, shouldSelect]);
};
