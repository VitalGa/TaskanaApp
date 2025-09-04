import React, { useContext } from 'react';
import { TaskContext } from '@/context/TaskContext';
import TaskItem from './TaskItem';
import styles from './taskItemsList.module.css';

function TaskItemsList() {
  const { tasks } = useContext(TaskContext);

  if (!Array.isArray(tasks)) {
    return null;
  }

  return (
    <ul className={styles.taskItemsList} role='list'>
      {tasks.toReversed().map((task) => (
        <TaskItem key={task.id} title={task.title} priority={task.priority} />
      ))}
    </ul>
  );
}

export default TaskItemsList;
