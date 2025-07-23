import { useState, useContext } from 'react';

import { TaskEditorHeader, TaskEditorBody, TaskEditorFooter } from '@/components/taskEditor';
import styles from './taskEditor.module.css';
import { TaskContext } from '@/context/TaskContext';

export const TaskEditor = () => {
  const { addTask } = useContext(TaskContext);

  const handleCreate = () => {
    addTask({ title, priority });
  };

  const [title, setTitle] = useState('');
  console.log(title);

  const [priority, setPriority] = useState('low');
  console.log(priority);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div className={styles.taskEditor}>
      <TaskEditorHeader value={title} handleChange={handleChange} />
      <TaskEditorBody priority={priority} setPriority={setPriority} />
      <TaskEditorFooter disabled={title === ''} handleCreate={handleCreate} />
    </div>
  );
};
