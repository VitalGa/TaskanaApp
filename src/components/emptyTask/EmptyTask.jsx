import styles from './emptyTask.module.css';
import Illustration from '../illustration/Illustration';

export function EmptyTask() {
  return (
    <div className={`${styles.emptyTask_wrapper} flex flex-col items-center justify-center`}>
      <Illustration name='girl' width={463} height={319} />
    </div>
  );
}

export default EmptyTask;
