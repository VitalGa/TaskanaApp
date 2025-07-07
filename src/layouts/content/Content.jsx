import styles from './content.module.css';
import { NavBar, SideBar } from '@/components';
import { IncomingTasks } from '@/pages';

function Content() {
  return (
    <div className={`${styles.content} flex`}>
      <NavBar />
      <div className={`flex flex-col flex-grow`}>
        <IncomingTasks />
      </div>
      <SideBar />
    </div>
  );
}

export default Content;
