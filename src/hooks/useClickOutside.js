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

      // Проверяем, не является ли цель клика кнопкой редактирования задачи
      const isEditButton = event.target.closest('[data-task-edit-button]');

      if (isOutsideAll && !isEditButton) {
        // Добавляем небольшую задержку для обработки клика по кнопке редактирования
        setTimeout(() => {
          callbackRef.current(event);
        }, 0);
      }
    };

    // Используем capture: false для обработки кликов по кнопкам редактирования первыми
    document.addEventListener('mousedown', handleClickOutside, false);
    document.addEventListener('touchstart', handleClickOutside, false);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside, false);
      document.removeEventListener('touchstart', handleClickOutside, false);
    };
  }, [refs, enabled]);
};
