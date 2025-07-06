import styles from './taskList.module.css';
import { ContainerText, EmptyTask } from '@/components';

function TaskList() {
  return (
    <div className={`${styles.taskList} flex flex-col`}>
      <ContainerText />
      <EmptyTask />
    </div>
  );
}

export default TaskList;
