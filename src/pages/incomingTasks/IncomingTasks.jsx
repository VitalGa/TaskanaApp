import MainContainer from '@/containers/mainContainer/MainContainer';
import Footer from '@/components/footer/Footer';
import styles from './incomingTasks.module.css';
const IncomingTasks = () => {
  return (
    <div className={`${styles.incomingTasks} flex flex-col`}>
      <MainContainer />
      <Footer />
    </div>
  );
};

export default IncomingTasks;
