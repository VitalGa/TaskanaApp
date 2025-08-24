import { useState, useContext, useRef, useEffect } from 'react';

import { TaskEditorHeader, TaskEditorBody, TaskEditorFooter } from '@/components/taskEditor';
import styles from './taskEditor.module.css';
import { TaskContext } from '@/context/TaskContext';
import { useTaskEditor } from '@/context/TaskEditorContext';

export const TaskEditor = () => {
  const { addTask } = useContext(TaskContext);
  const { isTaskEditorOpen, closeTaskEditor } = useTaskEditor();
  const inputRef = useRef(null);
  const taskEditorRef = useRef(null);

  useEffect(() => {
    let timeout;
    if (isTaskEditorOpen && inputRef.current) {
      timeout = setTimeout(() => {
        inputRef.current.focus();
      }, 300);
    }
    return () => clearTimeout(timeout);
  }, [isTaskEditorOpen]);

  // Добавляем обработку клавиш Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isTaskEditorOpen) {
        handleCancel();
      }
    };

    if (isTaskEditorOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isTaskEditorOpen]);

  const handleCreate = () => {
    if (title.trim()) {
      addTask({ title: title.trim(), priority });
      setTitle('');
      setPriority('low');
      closeTaskEditor();
    }
  };

  const handleCancel = () => {
    setTitle('');
    setPriority('low');
    closeTaskEditor();
  };

  const handleOverlayClick = () => {
    handleCancel();
  };

  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('low');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <>
      <div
        className={`${styles.overlay} ${isTaskEditorOpen ? styles.overlayVisible : ''}`}
        onClick={handleOverlayClick}
      />

      <div className={styles.taskEditorWrapper}>
        <div
          className={`${styles.taskEditor} ${isTaskEditorOpen ? styles.taskEditorOpen : ''}`}
          ref={taskEditorRef}>
          <div className={styles.taskEditorContent}>
            <TaskEditorHeader
              value={title}
              handleChange={handleChange}
              onSubmit={handleCreate}
              ref={inputRef}
            />
            <TaskEditorBody priority={priority} setPriority={setPriority} />
          </div>
          <div className={styles.taskEditorFooterContainer}>
            <TaskEditorFooter
              disabled={title.trim() === ''}
              handleCreate={handleCreate}
              handleCancel={handleCancel}
            />
          </div>
        </div>
      </div>
    </>
  );
};
