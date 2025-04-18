import Statistic from '@/components/statistic/Statistic';
import styles from './sideBar.module.css';

function SideBar() {
  return (
    <aside className={styles.sideBar}>
      <Statistic />
    </aside>
  );
}

export default SideBar;
