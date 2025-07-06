import styles from './sideBar.module.css';
import { Statistic } from '@/components';

function SideBar() {
  return (
    <aside className={`${styles.sideBar}`}>
      <div className={`${styles.sideBar__wrapper} flex  items-center justify-center`}>
        <Statistic />
      </div>
    </aside>
  );
}

export default SideBar;
