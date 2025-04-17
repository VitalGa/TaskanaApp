import NavBar from '@/components/navBar/NavBar';
import SideBar from '@/components/sideBar/SideBar';
import { Outlet } from 'react-router-dom';
import styles from './content.module.css';
import ContainerHeader from '@/components/containerHeader/ContainerHeader';

const Content = () => {
  return (
    <div className={styles.content}>
      <NavBar />
      <div className={styles.mainContent}>
        <ContainerHeader />
        <Outlet />
      </div>
      <SideBar />
    </div>
  );
};

export default Content;
