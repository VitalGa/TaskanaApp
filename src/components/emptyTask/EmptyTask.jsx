import styles from './emptyTask.module.css';
import girl from '@/assets/icons/emptyTaskIcons/girl.svg';
import card1 from '@/assets/icons/emptyTaskIcons/card1.svg';
import card2 from '@/assets/icons/emptyTaskIcons/card2.svg';
import card3 from '@/assets/icons/emptyTaskIcons/card3.svg';
import card4 from '@/assets/icons/emptyTaskIcons/card4Big.svg';
import leafBig from '@/assets/icons/emptyTaskIcons/leafBig.svg';
import leafSmall from '@/assets/icons/emptyTaskIcons/leafSmall.svg';

const EmptyTask = () => {
  return (
    <div className={`${styles.wrapper} flex flex-col items-center justify-center`}>
      <div className={styles.illustration}>
        {/* Карточки задач */}
        <img src={card1} className={styles.card1} alt='Карточка задачи 1' loading='lazy' />
        <img src={card2} className={styles.card2} alt='Карточка задачи 2' loading='lazy' />
        <img src={card3} className={styles.card3} alt='Карточка задачи 3' loading='lazy' />
        <img src={card4} className={styles.card4Big} alt='Карточка задачи 4' loading='lazy' />

        {/* Основная иллюстрация */}
        <img src={girl} className={styles.girl} alt='Девушка с карточками' loading='lazy' />

        {/* Декоративные элементы */}
        <img src={leafBig} className={styles.leafBig} alt='Большой листок' loading='lazy' />
        <img src={leafSmall} className={styles.leafSmall} alt='Маленький листок' loading='lazy' />
      </div>
    </div>
  );
};

export default EmptyTask;
