import { createContext, useContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

const getSystemTheme = () => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    // Читаем уже установленную тему из DOM (установлена синхронным скриптом)
    const currentTheme = document.documentElement.getAttribute('data-theme');

    if (currentTheme) {
      return currentTheme;
    }

    // Fallback на случай, если скрипт не сработал
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }

    return getSystemTheme();
  });

  useEffect(() => {
    // Синхронизируем состояние с DOM и localStorage
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleSystemThemeChange = (e) => {
      const savedTheme = localStorage.getItem('theme');
      const newSystemTheme = e.matches ? 'dark' : 'light';

      if (!savedTheme || savedTheme === getSystemTheme()) {
        setTheme(newSystemTheme);
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const resetToSystemTheme = () => {
    localStorage.removeItem('theme');

    setTheme(getSystemTheme());
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, resetToSystemTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
