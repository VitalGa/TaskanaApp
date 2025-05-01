import styles from './sideBar.module.css';
import Illustration from '@/components/illustration/Illustration';

function SideBar() {
  return (
    <aside className={`${styles.sideBar}`}>
      <div className={`${styles.sideBar__wrapper} flex  items-center justify-center`}>
        <figure className={`${styles.sideBar__figure} flex flex-col items-center justify-center`}>
          <Illustration name='book' width={231} height={168} />
          <figcaption className={styles.sideBar__text}>
            Здесь мы&nbsp;поможем тебе управлять твоими
            <br />
            задачами, отслеживать статистику
            <br />
            и&nbsp;самочувствие.
          </figcaption>
        </figure>
      </div>
    </aside>
  );
}

export default SideBar;
