import styles from './incomingTasks.module.css';
import { MainContainer } from '@/containers';
import { Footer } from '@/components';

const IncomingTasks = () => {
  return (
    <div className={`${styles.incomingTasks} flex flex-col justify-between`}>
      <MainContainer />
      <Footer />
    </div>
  );
};

export default IncomingTasks;
