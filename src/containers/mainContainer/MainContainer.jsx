import styles from './mainContainer.module.css';
import { ContainerHeader, TaskList } from '@/components';

const MainContainer = () => {
  return (
    <main className={styles.mainContainer}>
      <ContainerHeader />
      <TaskList />
    </main>
  );
};

export default MainContainer;
