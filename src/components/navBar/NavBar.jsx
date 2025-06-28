import styles from './navBar.module.css';
import Button from '@/ui/button/Button';
import Icon from '@/components/icon/Icon';

function NavBar() {
  return (
    <aside className={`${styles.wrapper} flex flex-col items-center`}>
      <nav className={styles.navBar}>
        <ul>
          <li>
            <Button variant='secondary' size='large' className={styles.navButton}>
              <Icon name='inbox' />
              <div className={`${styles.textWrapper} flex flex-start`}>
                <span className='text-md-semibold'>Входящие</span>
              </div>
            </Button>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default NavBar;
