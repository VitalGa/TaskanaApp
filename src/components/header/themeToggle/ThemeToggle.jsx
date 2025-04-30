import styles from './themeToggle.module.css';
import Icon from '../../icon/Icon';

const ThemeToggle = () => {
  return (
    <div className={`${styles.themeToggle} flex gap-4`}>
      <button className={`${styles.themeToggleButton} flex items-center justify-center`}>
        <Icon name='sun' color='white' size={24} />
      </button>
      <button className={`${styles.themeToggleButton} flex items-center justify-center`}>
        <Icon name='moon' color='white' size={24} />
      </button>
    </div>
  );
};

export default ThemeToggle;
