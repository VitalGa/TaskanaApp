import { Icon } from '@/components';
import styles from './themeSwitcher.module.css';
import { useTheme } from '@/context';
import { useKeyboard } from '@/hooks/useKeyboard';

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  const handleKeyDown = useKeyboard(['Enter', ' '], () => {
    toggleTheme();
  });

  const buttons = [
    { icon: 'sun', theme: 'light' },
    { icon: 'moon', theme: 'dark' },
  ];

  return (
    <button
      className={`${styles.themeSwitcher} flex gap-4`}
      role='switch'
      aria-label='Переключатель темы'
      aria-checked={theme === 'dark'}
      style={{ '--active-index': theme === 'dark' ? 1 : 0 }}
      onClick={toggleTheme}
      onKeyDown={handleKeyDown}
      tabIndex={0}>
      {buttons.map((button) => (
        <div
          key={button.theme}
          className={`${styles.themeSwitcherButton} ${
            theme === button.theme ? styles.themeSwitcherButtonActive : ''
          } flex items-center justify-center`}>
          <Icon name={button.icon} color={theme === button.theme ? 'white' : '#6C6C6C'} size={32} />
        </div>
      ))}
    </button>
  );
}
