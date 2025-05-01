import { useEffect, useState } from 'react';
import styles from './themeSwitcher.module.css';
import Icon from '../../icon/Icon';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('light'); // состояние для темы

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme); // изменение темы в атрибуте data-theme
  }, [theme]); // зависимость от состояния темы

  return (
    <div className={`${styles.themeSwitcher} flex gap-4`}>
      <button
        className={`${styles.themeSwitcherButtonSun} flex items-center justify-center`}
        onClick={() => setTheme('light')} // смена темы на светлую
        aria-label='Светлая тема'>
        <Icon name='sun' color='white' size={24} />
      </button>
      <button
        className={`${styles.themeSwitcherButtonMoon} flex items-center justify-center`}
        onClick={() => setTheme('dark')} // смена темы на тёмную
        aria-label='Тёмная тема'>
        <Icon name='moon' color='white' size={24} />
      </button>
    </div>
  );
};

export default ThemeSwitcher;
