import { useEffect, useRef } from 'react';

/**
 * @param {Function} callback
 * @param {boolean} enabled
 */

export const useEscapeKey = (callback, enabled = true) => {
  const callbackRef = useRef();
  callbackRef.current = callback;

  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        callbackRef.current?.(event);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [enabled]);
};
