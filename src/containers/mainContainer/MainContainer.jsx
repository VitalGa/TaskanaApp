import TaskList from '@/components/taskList/TaskList';
import styles from './mainContainer.module.css';
import ContainerHeader from '@/components/containerHeader/ContainerHeader';

const MainContainer = () => {
  return (
    <main className={styles.mainContainer}>
      <ContainerHeader />
      <TaskList />
    </main>
  );
};

export default MainContainer;
