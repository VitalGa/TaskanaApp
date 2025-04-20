import styles from './navBar.module.css';
import Button from '@/ui/button/Button';
import inboxIcon from '@/assets/icons/buttonIcons/inboxIcon.svg';

function NavBar() {
  return (
    <div className={`${styles.wrapper} flex flex-col items-center`}>
      <nav className={styles.navBar}>
        <ul>
          <li>
            <a href='#'>
              <Button variant='secondary' size='large'>
                <img src={inboxIcon} width={24} height={24} alt='Входящие' />
                <div className={`${styles.textWrapper} flex flex-start`}>
                  <span className='text-md-semibold'>Входящие</span>
                </div>
              </Button>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

// {Array.from({ length: 30 }).map((_, index) => (
//   <li key={index}>Покормить кота</li>
// ))}

export default NavBar;
