import React, { useContext } from 'react';
import { TaskContext } from '@/context/TaskContext';
import TaskItem from './TaskItem';

function TaskItemsList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) return null;

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task.id} title={task.title} priority={task.priority} />
      ))}
    </div>
  );
}

export default TaskItemsList;
