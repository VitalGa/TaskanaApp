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
      <div className={styles.icons}>
        <Icon name='priorityDesc' />
        <Icon name='priorityAsc' />

        <Icon name='alphabeticalDesc' />
        <Icon name='alphabeticalAsc' />

        <Icon name='createdAtDesc' />
        <Icon name='createdAtAsc' />

        <Icon name='updatedAtDesc' />
        <Icon name='updatedAtAsc' />

        <Icon name='checkDropdown' />

        <Icon name='chevronDropdown' />

        <Icon name='taskEdit' />
      </div>
    </aside>
  );
}
