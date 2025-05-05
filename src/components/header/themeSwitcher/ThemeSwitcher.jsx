import Icon from '@/components/icon/Icon';
import styles from './themeSwitcher.module.css';
import { useTheme } from '@/context/ThemeContext';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`${styles.themeSwitcher} flex gap-4`}
      role='group'
      aria-label='Переключатель темы'>
      <button
        className={`${styles.themeSwitcherButtonSun} ${
          theme === 'light' ? styles.themeSwitcherButtonActive : ''
        } flex items-center justify-center`}
        onClick={theme === 'dark' ? toggleTheme : undefined}
        disabled={theme === 'light'}
        aria-label='Светлая тема'>
        <Icon name='sun' color='white' size={32} />
      </button>
      <button
        className={`${styles.themeSwitcherButtonMoon} ${
          theme === 'dark' ? styles.themeSwitcherButtonActive : ''
        } flex items-center justify-center`}
        onClick={theme === 'light' ? toggleTheme : undefined}
        disabled={theme === 'dark'}
        aria-label='Тёмная тема'>
        <Icon name='moon' color='white' size={32} />
      </button>
    </div>
  );
};

export default ThemeSwitcher;
