import styles from './logo.module.css';
import Icon from '../icon/Icon';

function Logo() {
  const handleClick = (e) => {
    e.preventDefault();
    const baseUrl = import.meta.env.BASE_URL;
    window.history.pushState({}, '', baseUrl);
  };

  return (
    <a href={import.meta.env.BASE_URL} className={styles.logo} onClick={handleClick}>
      <Icon name='logo' width='124' height='40' />
    </a>
  );
}

export default Logo;
