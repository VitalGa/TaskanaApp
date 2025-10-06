import React from 'react';
import styles from './taskItem.module.css';
import { Icon } from '@/components';
import { useTaskEditor } from '@/context';

export function TaskItem({ title, priority, task, onEdit }) {
  const priorityClassMap = {
    1: 'low',
    2: 'normal',
    3: 'high',
  };

  const priorityClass = priorityClassMap[priority] || 'low';

  const handleEdit = () => {
    if (onEdit) {
      onEdit(task);
    }
  };

  return (
    <li className={styles.taskItemWrapper} tabIndex={0} role='listitem'>
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
      <div className={styles.editIconContainer}>
        <button
          className={styles.editButton}
          onClick={handleEdit}
          data-task-edit-button
          aria-label='Редактировать задачу'>
          <Icon name='taskEdit' className={styles.editIcon} />
        </button>
      </div>
    </li>
  );
}
