import { useState, useContext, useRef, useEffect } from 'react';

import { TaskEditorHeader, TaskEditorBody, TaskEditorFooter } from '@/components/taskEditor';
import styles from './taskEditor.module.css';
import { TaskContext } from '@/context/TaskContext';
import { useTaskEditor } from '@/context/TaskEditorContext';

export const TaskEditor = () => {
  const { addTask } = useContext(TaskContext);
  const { isTaskEditorOpen, closeTaskEditor } = useTaskEditor();
  const inputRef = useRef(null);

  useEffect(() => {
    let timeout;
    if (isTaskEditorOpen && inputRef.current) {
      timeout = setTimeout(() => {
        inputRef.current.focus();
      }, 300);
    }
    return () => clearTimeout(timeout);
  }, [isTaskEditorOpen]);

  const handleCreate = () => {
    addTask({ title, priority });
  };

  const handleCancel = () => {
    setTitle('');
    setPriority('low');
    closeTaskEditor();
  };

  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('low');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div className={styles.taskEditorWrapper}>
      <div className={`${styles.taskEditor} ${isTaskEditorOpen ? styles.taskEditorOpen : ''}`}>
        <TaskEditorHeader value={title} handleChange={handleChange} ref={inputRef} />
        <TaskEditorBody priority={priority} setPriority={setPriority} />
        <TaskEditorFooter
          disabled={title === ''}
          handleCreate={handleCreate}
          handleCancel={handleCancel}
        />
      </div>
    </div>
  );
};
