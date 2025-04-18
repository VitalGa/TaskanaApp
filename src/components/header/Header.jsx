import Logo from '@/components/logo/Logo';
import Button from '@/ui/button/Button';
import styles from './header.module.css';
import plusIcon from '@/assets/icons/buttonIcons/plus-2-Icon.svg';

const Header = () => {
  return (
    <header className={`${styles.header} flex justify-between items-center`}>
      <Logo />
      <Button variant='primary' size='medium' className='text-md-semibold'>
        <img src={plusIcon} width={24} height={24} alt='Плюс' />
        Создать
      </Button>
    </header>
  );
};

export default Header;
