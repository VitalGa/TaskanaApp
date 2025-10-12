import React, { useState } from 'react';
import styles from './taskItem.module.css';
import { Icon } from '@/components';
import { useTaskEditor } from '@/context';

export function TaskItem({ title, priority, task, onEdit }) {
  const { isTaskEditorOpen, openTaskEditorForEdit, editingTask } = useTaskEditor();
  const [isLoading, setIsLoading] = useState(false);

  const isEditing = editingTask?.id === task.id;

  const priorityClassMap = {
    1: 'low',
    2: 'normal',
    3: 'high',
  };

  const priorityClass = priorityClassMap[priority] || 'low';

  const handleEdit = async (e) => {
    e.stopPropagation();

    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (onEdit) {
      onEdit(task);
    } else {
      openTaskEditorForEdit(task);
    }

    setIsLoading(false);
  };

  return (
    <li
      className={`${styles.taskItemWrapper} ${isEditing ? styles.editing : ''}`}
      tabIndex={0}
      role='listitem'>
      <div className={styles.taskItem}>
        <div className={styles.priorityContainer}>
          <div
            className={`${styles.priorityBox} ${styles[priorityClass]}`}
            aria-label={`Приоритет: ${priority}`}
            role='img'
          />
        </div>
        <p className={styles.taskTitle}>{title}</p>
      </div>
      <div className={`${styles.editIconContainer} ${isLoading ? styles.loading : ''}`}>
        <button
          className={styles.editButton}
          onClick={handleEdit}
          disabled={isTaskEditorOpen || isLoading}
          data-task-edit-button
          aria-label={isLoading ? 'Загрузка...' : 'Редактировать задачу'}>
          <Icon
            name={isLoading ? 'loading' : 'taskEdit'}
            className={`${styles.editIcon} ${isLoading ? styles.loadingIcon : ''}`}
          />
        </button>
      </div>
    </li>
  );
}
