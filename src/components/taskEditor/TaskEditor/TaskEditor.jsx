import { useState } from 'react';

import { TaskEditorHeader, TaskEditorBody, TaskEditorFooter } from '@/components/taskEditor';
import styles from './taskEditor.module.css';

export const TaskEditor = () => {
  const [value, setValue] = useState('');
  console.log(value);

  const [priority, setPriority] = useState('low');
  console.log(priority);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={styles.taskEditor}>
      <TaskEditorHeader value={value} handleChange={handleChange} />
      <TaskEditorBody priority={priority} setPriority={setPriority} />
      <TaskEditorFooter disabled={value === ''} />
    </div>
  );
};
