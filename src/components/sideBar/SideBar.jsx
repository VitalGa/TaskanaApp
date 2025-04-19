import Statistic from '@/components/statistic/Statistic';
import styles from './sideBar.module.css';

function SideBar() {
  return (
    <aside className={styles.sideBar}>
      <Statistic />
      {Array.from({ length: 8 }).map((_, index) => (
        <li key={index}>
          {' '}
          Этот параграф сочинён для того, что бы было видно, что при переполнении этой колонки
          появляется скролл
        </li>
      ))}
    </aside>
  );
}

export default SideBar;
