import CreateAndThemeSwitcher from './createAndThemeSwitcher/CreateAndThemeSwitcher';
import styles from './header.module.css';
import Logo from '../logo/Logo';

const Header = () => {
  return (
    <header className={`${styles.header} flex justify-between items-center`}>
      <Logo className={styles.logo} />
      <CreateAndThemeSwitcher />
    </header>
  );
};

export default Header;
