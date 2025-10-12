import { useState, useContext, useRef, useEffect, useCallback } from 'react';
import { useClickOutside } from '@/hooks/useClickOutside';
import { Modal } from '@/ui/modal/Modal';

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
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [originalTask, setOriginalTask] = useState(currentTask);

  const hasChanges = () => {
    if (currentType === 'create') return title.trim() !== '';
    if (!originalTask) return false;

    return title.trim() !== originalTask.title || priority !== originalTask.priority;
  };

  const handleConfirmClose = useCallback(() => {
    setTitle('');
    setPriority(1);
    setShowConfirmModal(false);
    closeTaskEditor();
  }, [closeTaskEditor]);

  const handleCancelClose = useCallback(() => {
    setShowConfirmModal(false);
  }, []);

  const handleCancel = useCallback(() => {
    if (hasChanges()) {
      setShowConfirmModal(true);
    } else {
      setTitle('');
      setPriority(1);
      closeTaskEditor();
    }
  }, [title, priority, closeTaskEditor, currentType, originalTask]);

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

  useEffect(() => {
    if (isTaskEditorOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isTaskEditorOpen]);

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
  }, [isTaskEditorOpen, handleCancel]);

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
              disabled={
                !isTaskEditorOpen ||
                (currentType === 'create' && title.trim() === '') ||
                (currentType === 'edit' && !hasChanges())
              }
              disabledCancel={!isTaskEditorOpen}
              handleSave={handleSave}
              handleCancel={handleCancel}
              handleDelete={handleDelete}
            />
          </div>
        </div>
        <Modal
          isOpen={showConfirmModal}
          onClose={handleCancelClose}
          onConfirm={handleConfirmClose}
          title='Несохраненные изменения'
          message='Вы не сохранили задачу. Закрыть и очистить форму?'
          confirmText='Закрыть и очистить'
          cancelText='Отмена'
        />
      </div>
    </>
  );
};
