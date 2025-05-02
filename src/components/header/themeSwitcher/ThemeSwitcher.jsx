import { useEffect } from 'react';
import Icon from '@/components/icon/Icon';
import styles from './themeSwitcher.module.css';
import { useTheme } from '@/context/ThemeContext';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className={`${styles.themeSwitcher} flex gap-4`}>
      <button
        className={`${styles.themeSwitcherButtonSun} ${
          theme === 'light' ? styles.themeSwitcherButtonActive : ''
        } flex items-center justify-center`}
        onClick={toggleTheme}
        aria-label='Светлая тема'>
        <Icon name='sun' color='white' size={24} />
      </button>
      <button
        className={`${styles.themeSwitcherButtonMoon} ${
          theme === 'dark' ? styles.themeSwitcherButtonActive : ''
        } flex items-center justify-center`}
        onClick={toggleTheme}
        aria-label='Тёмная тема'>
        <Icon name='moon' color='white' size={24} />
      </button>
    </div>
  );
};

export default ThemeSwitcher;
