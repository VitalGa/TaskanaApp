import styles from './mainContainer.module.css';
import { ContainerHeader, TaskList, TaskItemsList } from '@/components';

function MainContainer() {
  return (
    <main className={styles.mainContainer}>
      <ContainerHeader />
      <TaskList />
      <TaskItemsList />
    </main>
  );
}

export default MainContainer;
