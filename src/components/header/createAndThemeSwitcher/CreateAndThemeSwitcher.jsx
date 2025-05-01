import Button from '@/ui/button/Button';
import plusIcon from '@/assets/icons/buttonIcons/plus-2-Icon.svg';
import styles from './createAndThemeSwitcher.module.css';
import ThemeSwitcher from '../themeSwitcher/ThemeSwitcher';

function CreateAndThemeSwitcher() {
  return (
    <div className={`${styles.createAndThemeSwitcher} flex gap-24`}>
      <Button variant='primary' size='medium' className='text-md-semibold' shadow='shadow-md'>
        <img src={plusIcon} width={24} height={24} alt='Плюс' />
        Создать
      </Button>
      <ThemeSwitcher />
    </div>
  );
}

export default CreateAndThemeSwitcher;
