import TaskList from '@/components/taskList/TaskList';
import styles from './mainContainer.module.css';

const MainContainer = () => {
  return (
    <div className={styles.mainContainer}>
      <h1>Входящие задачи</h1>
      <TaskList />
    </div>
  );
};

export default MainContainer;
