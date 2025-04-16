import Logo from '@/components/logo/Logo';
import Button from '@/ui/button/Button';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Button />
    </header>
  );
};

export default Header;
