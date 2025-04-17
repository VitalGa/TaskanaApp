import styles from './taskList.module.css';
import ContainerText from '@/components/containerText/ContainerText';
import EmptyTask from '@/components/emptyTask/EmptyTask';
function TaskList() {
  return (
    <div className={styles.taskList}>
      <ContainerText />
      <EmptyTask />
    </div>
  );
}

export default TaskList;
