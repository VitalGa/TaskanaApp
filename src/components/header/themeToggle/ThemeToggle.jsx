import styles from './themeToggle.module.css';

const ThemeToggle = () => {
  return (
    <div className={`${styles.themeToggle} flex gap-4`}>
      <button>Sun</button>
      <button>Moon</button>
    </div>
  );
};

export default ThemeToggle;
