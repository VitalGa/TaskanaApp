import NavBar from '@/components/navBar/NavBar';
import IncomingTasks from '@/pages/incomingTasks/IncomingTasks';
import SideBar from '@/components/sideBar/SideBar';

const Content = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <NavBar />
      <IncomingTasks />
      <SideBar />
    </div>
  );
};

export default Content;
