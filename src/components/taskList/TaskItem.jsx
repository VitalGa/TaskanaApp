import React from 'react';
import styles from './taskItem.module.css';

export function TaskItem({ title, priority }) {
  const priorityClassMap = {
    1: 'low',
    2: 'normal',
    3: 'high',
  };

  const priorityClass = priorityClassMap[priority] || 'low';

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
    </li>
  );
}
