import { useState, useContext, useRef, useEffect, useCallback } from 'react';
import { useClickOutside } from '@/hooks/useClickOutside';
import { Modal } from '@/ui/modal/Modal';

import { TaskEditorHeader, TaskEditorBody, TaskEditorFooter } from '@/components/taskEditor';
import styles from './taskEditor.module.css';
import { TaskContext } from '@/context/TaskContext';
import { useTaskEditor } from '@/context/TaskEditorContext';

export const TaskEditor = ({ type = 'create', task = null }) => {
  const { addTask, editTask } = useContext(TaskContext);
  const { isTaskEditorOpen, closeTaskEditor } = useTaskEditor();
  const inputRef = useRef(null);
  const taskEditorRef = useRef(null);

  const [title, setTitle] = useState(task?.title || '');
  const [priority, setPriority] = useState(task?.priority || 1);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [originalTask, setOriginalTask] = useState(task);

  const hasChanges = () => {
    if (type === 'create') return title.trim() !== '';
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
  }, [title, closeTaskEditor]);

  // const handleCreate = useCallback(() => {
  //   if (title.trim()) {
  //     addTask({ title: title.trim(), priority });
  //     closeTaskEditor();

  //     setTimeout(() => {
  //       setTitle('');
  //       setPriority(1);
  //     }, 500);
  //   }
  // }, [title, priority, addTask, closeTaskEditor]);

  const handleSave = useCallback(() => {
    if (title.trim()) {
      if (type === 'edit' && task) {
        // Режим редактирования
        editTask(task.id, {
          updatedFields: {
            title: title.trim(),
            priority,
          },
        });
      } else {
        // Режим создания
        addTask({ title: title.trim(), priority });
      }

      closeTaskEditor();
      // Очистка полей после успешного сохранения
      setTimeout(() => {
        setTitle('');
        setPriority(1);
      }, 500);
    }
  }, [title, priority, type, task, addTask, editTask, closeTaskEditor]);

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
    if (type === 'edit' && task) {
      setTitle(task.title);
      setPriority(task.priority);
      setOriginalTask(task);
    } else {
      setTitle('');
      setPriority(1);
      setOriginalTask(null);
    }
  }, [type, task]);

  return (
    <>
      <div className={styles.taskEditorWrapper}>
        <div
          className={`${styles.taskEditor} ${isTaskEditorOpen ? styles.taskEditorOpen : ''}`}
          ref={taskEditorRef}>
          <div className={styles.taskEditorContent}>
            <TaskEditorHeader
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
              disabled={title.trim() === '' || !isTaskEditorOpen}
              disabledCancel={!isTaskEditorOpen}
              handleCreate={handleSave}
              handleCancel={handleCancel}
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
