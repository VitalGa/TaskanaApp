import styles from './emptyTask.module.css';
import illustrationIcon from '@/assets/icons/emptyTaskIcons/illustrationIcon.svg';
import Illustration from '@/components/illustration/Illustration';

const EmptyTask = () => {
  return (
    <div className={`${styles.emptyTask_wrapper} flex flex-col items-center justify-center`}>
      {/* <img
          src={illustrationIcon}
          className={styles.illustrationIcon}
          alt='Девушка с карточками'
          loading='lazy'
        /> */}
      <Illustration name='girl' width={464} height={320} />
    </div>
  );
};

export default EmptyTask;
