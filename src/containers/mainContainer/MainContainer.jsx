import styles from './mainContainer.module.css';
import { ContainerHeader, TaskList } from '@/components';

function MainContainer() {
  return (
    <main className={styles.mainContainer}>
      <ContainerHeader />
      <TaskList />
    </main>
  );
}

export default MainContainer;
