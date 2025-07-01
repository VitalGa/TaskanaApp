import Icon from '@/components/icon/Icon';
import styles from './themeSwitcher.module.css';
import { useTheme } from '@/context/ThemeContext';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  const handleKeyDown = (event, isActiveButton) => {
    if ((event.key === 'Enter' || event.key === ' ') && isActiveButton) {
      event.preventDefault();
      toggleTheme();
    }
  };

  return (
    <div
      className={`${styles.themeSwitcher} flex gap-4`}
      role='group'
      aria-label='Переключатель темы'>
      <button
        type='button'
        className={`${styles.themeSwitcherButtonSun} ${
          theme === 'light' ? styles.themeSwitcherButtonActive : ''
        } flex items-center justify-center`}
        onClick={theme === 'dark' ? toggleTheme : undefined}
        onKeyDown={(event) => handleKeyDown(event, theme === 'dark')}
        disabled={theme === 'light'}
        aria-label='Светлая тема'
        aria-pressed={theme === 'light'}
        tabIndex={theme === 'dark' ? 0 : -1}>
        <Icon name='sun' color='white' size={32} />
      </button>
      <button
        type='button'
        className={`${styles.themeSwitcherButtonMoon} ${
          theme === 'dark' ? styles.themeSwitcherButtonActive : ''
        } flex items-center justify-center`}
        onClick={theme === 'light' ? toggleTheme : undefined}
        onKeyDown={(event) => handleKeyDown(event, theme === 'light')}
        disabled={theme === 'dark'}
        aria-label='Тёмная тема'
        aria-pressed={theme === 'dark'}
        tabIndex={theme === 'light' ? 0 : -1}>
        <Icon name='moon' color='white' size={32} />
      </button>
    </div>
  );
};

export default ThemeSwitcher;
