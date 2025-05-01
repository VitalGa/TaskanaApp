import styles from './themeSwitcher.module.css';
import Icon from '../../icon/Icon';

const ThemeSwitcher = () => {
  return (
    <div className={`${styles.themeSwitcher} flex gap-4`}>
      <button className={`${styles.themeSwitcherButtonSun} flex items-center justify-center`}>
        <Icon name='sun' color='white' size={24} />
      </button>
      <button className={`${styles.themeSwitcherButtonMoon} flex items-center justify-center`}>
        <Icon name='moon' color='white' size={24} />
      </button>
    </div>
  );
};

export default ThemeSwitcher;
