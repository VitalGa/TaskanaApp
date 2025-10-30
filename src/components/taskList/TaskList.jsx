import { ContainerText, EmptyTask } from '@/components';
import { TaskItem } from './TaskItem';
import styles from './taskList.module.css';

export function TaskList({ tasks, onEditTask }) {
  const hasTasks = Array.isArray(tasks) && tasks.length > 0;

  return (
    <div className={`${styles.taskList} ${!hasTasks ? styles.isEmpty : ''} flex flex-col`}>
      {hasTasks ? (
        <ul className={styles.taskItemsList} role='list'>
          {tasks.map((task) => (
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
