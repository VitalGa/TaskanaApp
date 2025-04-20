import styles from './sideBar.module.css';
import book from '@/assets/icons/sideBarIcons/book.svg';

function SideBar() {
  return (
    <aside className={`${styles.sideBar} flex flex-col items-center`}>
      <img src={book} width={231} height={168} alt='Тетрадь' />
      <p className={styles.sideBar__text}>
        Здесь мы&nbsp;поможем тебе управлять твоими задачами, отслеживать статистику
        и&nbsp;самочувствие.
      </p>
      <ul>
        {/* {Array.from({ length: 5 }).map((_, index) => (
          <li key={index}>
            Этот параграф сочинён для того, что бы было видно, что при переполнении этой колонки
            появляется скролл
          </li>
        ))} */}
      </ul>
    </aside>
  );
}

export default SideBar;
