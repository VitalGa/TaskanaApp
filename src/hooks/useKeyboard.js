import { useCallback } from 'react';

export function useKeyboard(keys, callback) {
  const handleKeyDown = useCallback(
    (event) => {
      if (keys.includes(event.key)) {
        event.preventDefault();
        callback(event);
      }
    },
    [keys, callback],
  );

  return handleKeyDown;
}
