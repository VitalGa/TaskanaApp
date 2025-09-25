import styles from './mainContainer.module.css';
import { ContainerHeader } from '@/components';
import { TaskList } from '@/components';

export function MainContainer() {
  return (
    <main className={styles.mainContainer}>
      <ContainerHeader />
      <TaskList />
    </main>
  );
}
