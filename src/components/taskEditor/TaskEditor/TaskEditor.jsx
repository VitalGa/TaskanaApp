import { useState, useContext, useRef, useEffect, useCallback } from 'react';
import { useClickOutside } from '@/hooks/useClickOutside';
import { useEscapeKey } from '@/hooks/useEscapeKey';

import { TaskEditorHeader, TaskEditorBody, TaskEditorFooter } from '@/components/taskEditor';
import styles from './taskEditor.module.css';
import { TaskContext } from '@/context/TaskContext';
import { useTaskEditor } from '@/context/TaskEditorContext';

export const TaskEditor = () => {
  const { addTask, editTask, deleteTask } = useContext(TaskContext);
  const { isTaskEditorOpen, closeTaskEditor, editorMode, editingTask } = useTaskEditor();

  const currentType = editorMode;
  const currentTask = editingTask;

  const inputRef = useRef(null);
  const taskEditorRef = useRef(null);

  const [title, setTitle] = useState(currentTask?.title || '');
  const [priority, setPriority] = useState(currentTask?.priority || 1);
  const [originalTask, setOriginalTask] = useState(currentTask);

  const hasChanges = () => {
    if (currentType === 'create') return title.trim() !== '';
    if (!originalTask) return false;

    return title.trim() !== originalTask.title || priority !== originalTask.priority;
  };

  const canSave = () => {
    if (currentType === 'create') {
      return title.trim() !== '';
    }
    if (currentType === 'edit') {
      return title.trim() !== '' && hasChanges();
    }
    return false;
  };

  const handleCancel = useCallback(() => {
    setTitle('');
    setPriority(1);
    closeTaskEditor();
  }, [closeTaskEditor]);

  const handleSave = useCallback(() => {
    if (title.trim()) {
      if (currentType === 'edit' && currentTask) {
        editTask(currentTask.id, {
          updatedFields: {
            title: title.trim(),
            priority,
          },
        });
      } else {
        addTask({ title: title.trim(), priority });
      }

      closeTaskEditor();

      setTimeout(() => {
        setTitle('');
        setPriority(1);
      }, 500);
    }
  }, [title, priority, currentType, currentTask, addTask, editTask, closeTaskEditor]);

  const handleDelete = useCallback(() => {
    if (currentType === 'edit' && currentTask) {
      deleteTask(currentTask.id);
      closeTaskEditor();
    }
  }, [currentType, currentTask, deleteTask, closeTaskEditor]);

  const handleChange = useCallback((e) => {
    setTitle(e.target.value);
  }, []);

  useClickOutside(taskEditorRef, handleCancel, isTaskEditorOpen);

  useEscapeKey(handleCancel, isTaskEditorOpen);

  useEffect(() => {
    if (isTaskEditorOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isTaskEditorOpen, editorMode]);

  useEffect(() => {
    if (currentType === 'edit' && currentTask) {
      setTitle(currentTask.title);
      setPriority(currentTask.priority);
      setOriginalTask(currentTask);
    } else {
      setTitle('');
      setPriority(1);
      setOriginalTask(null);
    }
  }, [currentType, currentTask]);

  return (
    <>
      <div className={styles.taskEditorWrapper}>
        <div
          className={`${styles.taskEditor} ${isTaskEditorOpen ? styles.taskEditorOpen : ''}`}
          ref={taskEditorRef}>
          <div className={styles.taskEditorContent}>
            <TaskEditorHeader
              title={currentType === 'edit' ? 'Редактирование' : 'Создание задачи'}
              value={title}
              handleChange={handleChange}
              onSubmit={handleSave}
              ref={inputRef}
              disabled={!isTaskEditorOpen}
            />
            <div className={styles.taskEditorBodyContainer}>
              <TaskEditorBody
                priority={priority}
                setPriority={setPriority}
                disabled={!isTaskEditorOpen}
              />
            </div>
          </div>
          <div className={styles.taskEditorFooterContainer}>
            <TaskEditorFooter
              type={currentType}
              disabled={!isTaskEditorOpen || !canSave()}
              disabledCancel={!isTaskEditorOpen}
              handleSave={handleSave}
              handleCancel={handleCancel}
              handleDelete={handleDelete}
            />
          </div>
        </div>
      </div>
    </>
  );
};
