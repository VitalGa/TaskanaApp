import TaskList from '@/components/taskList/TaskList';
import styles from './mainContainer.module.css';

const MainContainer = () => {
  return (
    <main className={styles.mainContainer}>
      <TaskList />
    </main>
  );
};

export default MainContainer;
