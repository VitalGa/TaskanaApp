import Icon from '@/components/icon/Icon';
import styles from './themeSwitcher.module.css';
import { useTheme } from '@/context/ThemeContext';

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleTheme();
      event.currentTarget.focus();
    }
  };

  return (
    <div
      className={`${styles.themeSwitcher} flex gap-4`}
      role='switch'
      aria-label='Переключатель темы'
      aria-checked={theme === 'dark'}
      onClick={toggleTheme}
      onKeyDown={handleKeyDown}
      tabIndex={0}>
      <button
        tabIndex={-1}
        type='button'
        className={`${styles.themeSwitcherButtonSun} ${
          theme === 'light' ? styles.themeSwitcherButtonActive : ''
        } flex items-center justify-center`}
        aria-hidden='true'>
        <Icon name='sun' color='white' size={32} />
      </button>
      <button
        tabIndex={-1}
        type='button'
        className={`${styles.themeSwitcherButtonMoon} ${
          theme === 'dark' ? styles.themeSwitcherButtonActive : ''
        } flex items-center justify-center`}
        aria-hidden='true'>
        <Icon name='moon' color='white' size={32} />
      </button>
    </div>
  );
}

export default ThemeSwitcher;
