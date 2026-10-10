import styles from './mainContainer.module.css';
import { ContainerHeader, TaskList } from '@/components';
import { useState, useMemo, useContext } from 'react';
import { TaskContext } from '@/context/TaskContext';
import { sortTasksBy } from '@/utils/sortTasks';
import { useTaskEditor } from '@/context/TaskEditorContext';

export function MainContainer() {
  const [sortBy, setSortBy] = useState('createdAtDesc');
  const { tasks } = useContext(TaskContext);
  const { openTaskEditor } = useTaskEditor();

  const sortedTasks = useMemo(() => {
    return sortTasksBy(tasks, sortBy);
  }, [tasks, sortBy]);

  const handleEditTask = (task) => {
    openTaskEditor('edit', task);
  };

  return (
    <main className={styles.mainContainer}>
      <ContainerHeader sortBy={sortBy} onSortChange={setSortBy} />
      <TaskList tasks={sortedTasks} onEditTask={handleEditTask} />
    </main>
  );
}
