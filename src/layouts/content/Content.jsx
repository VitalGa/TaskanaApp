import styles from './content.module.css';
import { NavBar, SideBar } from '@/components';
import { TaskEditor } from '@/components/taskEditor';
import { IncomingTasks } from '@/pages';
import { useState } from 'react';

function Content() {
  const [isTaskEditorOpen, setIsTaskEditorOpen] = useState(true);

  return (
    <div className={`${styles.content} flex`}>
      <NavBar />
      <div className={`flex flex-col flex-grow`}>
        <IncomingTasks />
      </div>
      {isTaskEditorOpen ? <TaskEditor /> : <SideBar />}
    </div>
  );
}

export default Content;
