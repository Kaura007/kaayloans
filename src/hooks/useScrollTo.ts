import { useCallback } from 'react';

export function useScrollTo(elementId: string) {
  return useCallback(() => {
    document.getElementById(elementId)?.scrollIntoView({ behavior: 'smooth' });
  }, [elementId]);
}