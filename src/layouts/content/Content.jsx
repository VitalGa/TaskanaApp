import styles from './content.module.css';
import { NavBar, SideBar } from '@/components';
import { TaskEditor } from '@/components/taskEditor';
import { IncomingTasks } from '@/pages';
import { useState } from 'react';
import { useTaskEditor } from '@/context/TaskEditorContext';

function Content({ className = '' }) {
  const { isTaskEditorOpen, openTaskEditor, closeTaskEditor } = useTaskEditor();

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
