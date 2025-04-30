import Logo from '@/components/logo/Logo';
import CreateAndTheme from './createAndTheme/CreateAndTheme';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={`${styles.header} flex justify-between items-center`}>
      <Logo />
      <CreateAndTheme />
    </header>
  );
};

export default Header;
