import styles from './emptyTask.module.css';
import Illustration from '../illustration/Illustration';

export const EmptyTask = () => {
  return (
    <div className={`${styles.emptyTask_wrapper} flex flex-col items-center justify-center`}>
      <Illustration name='girl' width={464} height={320} />
    </div>
  );
};

export default EmptyTask;
