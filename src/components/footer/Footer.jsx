import styles from './footer.module.css';

function Footer() {
  return (
    <footer className={`${styles.footer} text-md-regular flex justify-center items-center`}>
      Проект выполнен в рамках стажировки <p className={styles.footer__text}> PREAX</p>
    </footer>
  );
}

export default Footer;
