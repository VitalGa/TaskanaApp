import styles from './logo.module.css';
import { Icon } from '@/components';

export function Logo() {
  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <a href={import.meta.env.BASE_URL} className={styles.logo} onClick={handleClick}>
      <Icon name='logo' width='126' height='40' />
    </a>
  );
}
