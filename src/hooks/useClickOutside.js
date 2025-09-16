import { useEffect, useRef } from 'react';

export const useClickOutside = (refs, callback, enabled = true) => {
  const callbackRef = useRef();
  callbackRef.current = callback;

  useEffect(() => {
    if (!enabled) return;

    const handleClickOutside = (event) => {
      const refArray = Array.isArray(refs) ? refs : [refs];

      const isOutsideAll = refArray.every(
        (ref) => !ref?.current || !ref.current.contains(event.target),
      );

      if (isOutsideAll) {
        callbackRef.current(event);
      }
    };

    document.addEventListener('mousedown', handleClickOutside, true);
    document.addEventListener('touchstart', handleClickOutside, true);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside, true);
      document.removeEventListener('touchstart', handleClickOutside, true);
    };
  }, [refs, enabled]);
};
