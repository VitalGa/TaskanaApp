import Statistic from '@/components/statistic/Statistic';
import styles from './sideBar.module.css';

function SideBar() {
  return (
    <aside className={styles.sideBar}>
      <h3>SideBar</h3>
      <Statistic />
    </aside>
  );
}

export default SideBar;
