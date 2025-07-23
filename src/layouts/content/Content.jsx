import styles from './content.module.css';
import { NavBar, SideBar } from '@/components';
import { TaskEditor } from '@/components/taskEditor';
import { IncomingTasks } from '@/pages';
import { useState } from 'react';
import { useTaskEditor } from '@/context/TaskEditorContext';

function Content() {
  const { isTaskEditorOpen, openTaskEditor, closeTaskEditor } = useTaskEditor();

  return (
    <div className={`${styles.content} flex`}>
      <NavBar />
      <div className={`flex flex-col flex-grow`}>
        <IncomingTasks />
      </div>
      {/* {isTaskEditorOpen ? <TaskEditor /> : <SideBar />} */}
      {isTaskEditorOpen ? (
        <TaskEditor onClose={closeTaskEditor} />
      ) : (
        <SideBar onCreateClick={openTaskEditor} />
      )}
    </div>
  );
}

export default Content;
