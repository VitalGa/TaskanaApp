import styles from './incomingTasks.module.css';
import { MainContainer } from '@/containers';
import { Footer } from '@/components';

export function IncomingTasks() {
  return (
    <div className={`${styles.incomingTasks} flex flex-col justify-between`}>
      <MainContainer />
      <Footer />
    </div>
  );
}
