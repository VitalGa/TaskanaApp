import MainContainer from '@/containers/mainContainer/MainContainer';
import Footer from '@/components/footer/Footer';
import styles from './incomingTasks.module.css';
import ContainerHeader from '@/components/containerHeader/ContainerHeader';

const IncomingTasks = () => {
  return (
    <div className={`${styles.incomingTasks} flex flex-col justify-between`}>
      <ContainerHeader />
      <MainContainer />
      <Footer />
    </div>
  );
};

export default IncomingTasks;
