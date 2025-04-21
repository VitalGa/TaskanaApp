import NavBar from '@/components/navBar/NavBar';
import SideBar from '@/components/sideBar/SideBar';
import styles from './content.module.css';
import IncomingTasks from '@/pages/incomingTasks/IncomingTasks';

const Content = () => {
  return (
    <div className={styles.content}>
      <NavBar />
      <div className={styles.incomingTasks}>
        <IncomingTasks />
      </div>
      <SideBar />
    </div>
  );
};

export default Content;
