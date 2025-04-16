import NavBar from '@/components/navBar/NavBar';
import SideBar from '@/components/sideBar/SideBar';
import { Outlet } from 'react-router-dom';

const Content = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <NavBar />
      <Outlet />
      <SideBar />
    </div>
  );
};

export default Content;
