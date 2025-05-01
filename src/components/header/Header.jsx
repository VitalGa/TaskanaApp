import CreateAndTheme from './createAndTheme/CreateAndTheme';
import styles from './header.module.css';
import Icon from '@/components/icon/Icon';

const Header = () => {
  return (
    <header className={`${styles.header} flex justify-between items-center`}>
      <Icon name='logo' width='126' height='40' />
      <CreateAndTheme />
    </header>
  );
};

export default Header;
