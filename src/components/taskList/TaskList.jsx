import React from 'react';
import { ContainerText, EmptyTask } from '@/components';
import { TaskItem } from './TaskItem';
import styles from './taskList.module.css';

export function TaskList({ tasks, onEditTask }) {
  const hasTasks = Array.isArray(tasks) && tasks.length > 0;

  return (
    <div className={`${styles.taskList} flex flex-col`}>
      {hasTasks ? (
        <ul className={styles.taskItemsList} role='list'>
          {tasks.toReversed().map((task) => (
            <TaskItem
              key={task.id}
              title={task.title}
              priority={task.priority}
              task={task}
              onEdit={onEditTask}
            />
          ))}
        </ul>
      ) : (
        <>
          <ContainerText />
          <EmptyTask />
        </>
      )}
    </div>
  );
}
