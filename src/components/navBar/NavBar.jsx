import styles from './navBar.module.css';
import Button from '@/ui/button/Button';
import Icon from '@/components/icon/Icon';

function NavBar() {
  return (
    <aside className={`${styles.wrapper} flex flex-col items-center`}>
      <nav className={styles.navBar}>
        <ul>
          <li>
            <a href='#'>
              <Button variant='secondary' size='large'>
                <Icon name='inbox' fill='white' />
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
