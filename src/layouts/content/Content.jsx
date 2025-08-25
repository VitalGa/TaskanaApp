import styles from './content.module.css';
import { NavBar, SideBar } from '@/components';
import { TaskEditor } from '@/components/taskEditor';
import { IncomingTasks } from '@/pages';

function Content({ className = '' }) {
  return (
    <div className={`${styles.content} ${className} flex`}>
      <NavBar />
      <div className={`flex flex-col flex-grow`}>
        <IncomingTasks />
      </div>
      <SideBar />
      <TaskEditor />
    </div>
  );
}

export default Content;
