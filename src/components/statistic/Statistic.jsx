import styles from './statistic.module.css';
import { Illustration } from '@/components';

const Statistic = () => {
  return (
    <figure className={`${styles.statistic__figure} flex flex-col items-center justify-center`}>
      <Illustration name='book' width={231} height={168} />
      <figcaption className={styles.statistic__text}>
        Здесь мы&nbsp;поможем тебе управлять твоими
        <br />
        задачами, отслеживать статистику
        <br />
        и&nbsp;самочувствие.
      </figcaption>
    </figure>
  );
};

export default Statistic;
