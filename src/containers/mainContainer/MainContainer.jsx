import styles from './mainContainer.module.css';
import { ContainerHeader } from '@/components';
import { TaskList } from '@/components';

import { useState, useMemo, useContext } from 'react';
import { TaskContext } from '@/context/TaskContext';
import { sortTasksBy } from '@/utils/sortTasks';
import { sortOptions } from '@/components/data/sortOptions';

export function MainContainer() {
  const [sortBy, setSortBy] = useState('createdAtDesc');
  const { tasks } = useContext(TaskContext);

  const sortedTasks = useMemo(() => {
    return sortTasksBy(tasks, sortBy);
  }, [tasks, sortBy]);

  return (
    <main className={styles.mainContainer}>
      <ContainerHeader sortBy={sortBy} onSortChange={setSortBy} sortOptions={sortOptions} />
      <TaskList tasks={sortedTasks} />
    </main>
  );
}
