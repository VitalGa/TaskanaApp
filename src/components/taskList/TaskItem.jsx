import React from 'react';
import styles from './taskItem.module.css';

function TaskItem({ title, priority }) {
  return (
    <div className={styles.taskItemWrapper} tabIndex={0}>
      <div className={styles.taskItem}>
        <div className={styles.priorityContainer}>
          <div
            className={`${styles.priorityBox} ${styles[priority]}`}
            aria-label={`Приоритет: ${priority}`}
            role='img'
          />
        </div>
        <p className={styles.taskTitle}>{title}</p>
      </div>
    </div>
  );
}

export default TaskItem;
