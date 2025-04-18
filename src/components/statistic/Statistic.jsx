import styles from './statistic.module.css';
import book from '@/assets/icons/sideBarIcons/book.svg';

const Statistic = () => {
  return (
    <div className={`${styles.wrapper} flex justify-center items-center`}>
      <section className={`${styles.statistic} flex flex-col items-center`}>
        <img src={book} width={231} height={168} alt='statistic' />
        <p className={styles.statistic__text}>
          Здесь мы&nbsp;поможем тебе управлять твоими задачами, отслеживать статистику
          и&nbsp;самочувствие.
        </p>
      </section>
    </div>
  );
};

export default Statistic;
