import styles from './sideBar.module.css';
import book from '@/assets/icons/sideBarIcons/book.svg';

function SideBar() {
  return (
    <aside className={`${styles.sideBar}`}>
      <div className={`${styles.sideBar__wrapper} flex  items-center justify-center`}>
        <figure className={`${styles.sideBar__figure} flex flex-col items-center justify-center`}>
          <img src={book} width={231} height={168} alt='Тетрадь' />
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

{
  /* <ul>
  {Array.from({ length: 5 }).map((_, index) => (
    <li key={index}>
      Этот параграф сочинён для того, что бы было видно, что при переполнении этой колонки
      появляется скролл
    </li>
  ))}
</ul>; */
}
