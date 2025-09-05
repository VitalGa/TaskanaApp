import styles from './mainContainer.module.css';
import { ContainerHeader } from '@/components';
import TaskList from '@/components/taskList/TaskList';

function MainContainer() {
  return (
    <main className={styles.mainContainer}>
      <ContainerHeader />
      <TaskList />
    </main>
  );
}

export default MainContainer;
