import styles from './footer.module.css';

function Footer() {
  return (
    <footer className={`${styles.footer} text-md-regular flex justify-center items-center`}>
      Проект выполнен в рамках стажировки
      <a
        href='https://preax.ru'
        target='_blank'
        rel='noopener noreferrer'
        className={styles.footer__link}>
        PREAX
      </a>
    </footer>
  );
}

export default Footer;
