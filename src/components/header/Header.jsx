import Logo from '@/components/logo/Logo';
import Button from '@/ui/button/Button';
import styles from './header.module.css';
import plusIcon from '@public/plus-2-Icon.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Button variant='primary' size='medium' className='text-md-semibold'>
        <img src={plusIcon} width={24} height={24} alt='плюс' />
        Создать
      </Button>
    </header>
  );
};

export default Header;
