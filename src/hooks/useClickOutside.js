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

      const isEditButton = event.target.closest('[data-task-edit-button]');
      const isCreateButton = event.target.closest('.header-button-create');

      if (isOutsideAll && !isEditButton && !isCreateButton) {
        setTimeout(() => {
          callbackRef.current(event);
        }, 0);
      }
    };

    document.addEventListener('mousedown', handleClickOutside, false);
    document.addEventListener('touchstart', handleClickOutside, false);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside, false);
      document.removeEventListener('touchstart', handleClickOutside, false);
    };
  }, [refs, enabled]);
};
