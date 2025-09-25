import styles from './navBar.module.css';
import { Icon } from '@/components';
import { Button } from '@/ui';

export function NavBar() {
  return (
    <aside className={`${styles.wrapper} flex flex-col items-center`}>
      <nav className={styles.navBar}>
        <ul>
          <li>
            <Button
              variant='secondary'
              size='large'
              className={styles.navButton}
              gap='8'
              ariaLabel='Перейти к входящим задачам'>
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
