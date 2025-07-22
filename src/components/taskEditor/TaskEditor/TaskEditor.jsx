import { useState } from 'react';

import { TaskEditorHeader, TaskEditorBody, TaskEditorFooter } from '@/components/taskEditor';
import styles from './taskEditor.module.css';

export const TaskEditor = () => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={styles.taskEditor}>
      <TaskEditorHeader value={value} handleChange={handleChange} />
      <TaskEditorBody />
      <TaskEditorFooter disabled={value === ''} />
    </div>
  );
};
