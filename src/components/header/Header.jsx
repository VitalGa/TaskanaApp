import CreateAndThemeSwitcher from './createAndThemeSwitcher/CreateAndThemeSwitcher';
import styles from './header.module.css';
import Icon from '@/components/icon/Icon';

const Header = () => {
  return (
    <header className={`${styles.header} flex justify-between items-center`}>
      <Icon name='logo' width='126' height='40' />
      <CreateAndThemeSwitcher />
    </header>
  );
};

export default Header;
