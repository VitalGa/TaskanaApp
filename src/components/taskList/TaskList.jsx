import React, { useContext } from 'react';
import { TaskContext } from '@/context/TaskContext';
import { ContainerText, EmptyTask } from '@/components';
import TaskItem from './TaskItem';
import styles from './taskList.module.css';

function TaskList() {
  const { tasks } = useContext(TaskContext);

  const hasTasks = Array.isArray(tasks) && tasks.length > 0;

  return (
    <div className={`${styles.taskList} flex flex-col`}>
      {hasTasks ? (
        <ul className={styles.taskItemsList} role='list'>
          {tasks.toReversed().map((task) => (
            <TaskItem key={task.id} title={task.title} priority={task.priority} />
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

export default TaskList;
