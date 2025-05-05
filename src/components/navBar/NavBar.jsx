import styles from './navBar.module.css';
import Button from '@/ui/button/Button';
import { useTheme } from '@/context/ThemeContext';
import Icon from '@/components/icon/Icon';

function NavBar() {
  const { theme } = useTheme();
  const color = theme === 'light' ? 'white' : 'black';

  return (
    <aside className={`${styles.wrapper}   flex flex-col items-center`}>
      <nav className={styles.navBar}>
        <ul>
          <li>
            <a className={styles.button} href='#'>
              <Button variant='secondary' size='large'>
                <Icon name='inbox' fill={color} />
                <div className={`${styles.textWrapper} flex flex-start`}>
                  <span className='text-md-semibold'>Входящие</span>
                </div>
              </Button>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default NavBar;
