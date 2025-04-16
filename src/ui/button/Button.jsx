import styles from './button.module.css';
import plusIcon from '@public/plus-2-Icon.svg';

function Button() {
  return (
    <button className={styles.button}>
      <img src={plusIcon} width={24} height={24} alt='плюс' />
      <span className={styles.button__text + ' text-md-semibold'}>Создать</span>
    </button>
  );
}

export default Button;
