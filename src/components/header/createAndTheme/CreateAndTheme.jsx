import Button from '@/ui/button/Button';
import plusIcon from '@/assets/icons/buttonIcons/plus-2-Icon.svg';
import styles from './createAndTheme.module.css';
import ThemeToggle from '../themeToggle/ThemeToggle';

function CreateAndTheme() {
  return (
    <div className={`${styles.createAndTheme} flex gap-24`}>
      <Button variant='primary' size='medium' className='text-md-semibold' shadow='shadow-md'>
        <img src={plusIcon} width={24} height={24} alt='Плюс' />
        Создать
      </Button>
      <ThemeToggle />
    </div>
  );
}

export default CreateAndTheme;
