import React from 'react';
import styles from './taskItem.module.css';

function TaskItem({ title, priority }) {
  return (
    <div className={styles.taskItemWrapper} tabIndex={0}>
      <div className={styles.taskItem}>
        <div className={`${styles.priorityBox} ${styles[priority]}`} tabIndex={0} />
        <span className={styles.taskTitle}>{title}</span>
      </div>
    </div>
  );
}

export default TaskItem;
