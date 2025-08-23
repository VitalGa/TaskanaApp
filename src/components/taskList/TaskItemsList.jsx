import React, { useContext } from 'react';
import { TaskContext } from '@/context/TaskContext';
import TaskItem from './TaskItem';
import styles from './taskItemsList.module.css';

function TaskItemsList() {
  const { tasks } = useContext(TaskContext);

  if (!Array.isArray(tasks)) {
    console.warn('TaskItemsList: tasks is not an array, received:', tasks);
    return null;
  }

  if (tasks.length === 0) return null;

  return (
    <div className={styles.taskItemsList}>
      {tasks
        .slice()
        .reverse()
        .map((task) => (
          <TaskItem key={task.id} title={task.title} priority={task.priority} />
        ))}
    </div>
  );
}

export default TaskItemsList;
