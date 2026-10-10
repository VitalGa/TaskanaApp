import styles from './sideBar.module.css';
import { Statistic } from '@/components';

export function SideBar() {
  return (
    <aside className={styles.sideBar}>
      <div className={styles.sideBar__wrapper}>
        <Statistic />
      </div>
    </aside>
  );
}
