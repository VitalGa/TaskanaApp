import styles from './header.module.css';
import Logo from '../logo/Logo';
import Button from '../../ui/button/Button';
import Icon from '../icon/Icon';
import { useState } from 'react';
import ThemeSwitcher from './themeSwitcher/ThemeSwitcher';

const Header = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };
  return (
    <header className={`${styles.header} flex justify-between items-center`}>
      <Logo className={styles.logo} />
      <div className={`${styles.createAndThemeSwitcher} flex gap-24`}>
        <Button
          type='button'
          loading={isLoading}
          variant='primary'
          size='medium'
          className='text-md-semibold'
          fixedColor={true}
          shadow='shadow-md'
          onClick={handleClick}>
          <Icon name='plus' width={24} height={24} />
          Создать
        </Button>
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
