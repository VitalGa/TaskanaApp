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
    <div className={styles.wrapper}>
      <div className={styles.illustration}>
        <img src={card1} className={styles.card1} alt='Задание 1' />
        <img src={card2} className={styles.card2} alt='Задание 2' />
        <img src={card3} className={styles.card3} alt='Задание 3' />
        <img src={card4} className={styles.card4Big} alt='Задание 4' />
        <img src={girl} className={styles.girl} alt='Девушка' />
        <img src={leafBig} className={styles.leafBig} alt='Листок большой' />
        <img src={leafSmall} className={styles.leafSmall} alt='Листок маленький' />
      </div>
    </div>
  );
};

export default EmptyTask;
