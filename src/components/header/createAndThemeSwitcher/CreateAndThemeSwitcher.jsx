import Button from '@/ui/button/Button';
import plusIcon from '@/assets/icons/buttonIcons/plus-2-Icon.svg';
import styles from './createAndThemeSwitcher.module.css';
import ThemeSwitcher from '../themeSwitcher/ThemeSwitcher';
import { useState } from 'react';

function CreateAndThemeSwitcher() {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className={`${styles.createAndThemeSwitcher} flex gap-24`}>
      <Button
        loading={isLoading}
        variant='primary'
        size='medium'
        className='text-md-semibold'
        fixedColor={true}
        shadow='shadow-md'
        onClick={handleClick}>
        <img src={plusIcon} width={24} height={24} alt='Плюс' />
        Создать
      </Button>
      <ThemeSwitcher />
    </div>
  );
}

export default CreateAndThemeSwitcher;
