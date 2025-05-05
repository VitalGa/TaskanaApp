import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    // Проверяем есть ли сохраненная тема в localStorage
    const savedTheme = localStorage.getItem('theme');
    // Если есть, возвращаем её, иначе используем 'light' как значение по умолчанию
    return savedTheme || 'light';
  });

  // Сохраняем тему в localStorage при её изменении
  useEffect(() => {
    localStorage.setItem('theme', theme);
    // Также обновляем атрибут data-theme на корневом элементе
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
