import styles from './mainContainer.module.css';
import { ContainerHeader } from '@/components';
import TaskList from '@/components/taskList/TaskList';
import TaskItemsList from '@/components/taskList/TaskItemsList';
import { TaskContext } from '@/context/TaskContext';
import React, { useContext } from 'react';

function MainContainer() {
  const { tasks } = useContext(TaskContext);

  return (
    <main className={styles.mainContainer}>
      <ContainerHeader />
      {tasks.length === 0 ? <TaskList /> : <TaskItemsList />}
    </main>
  );
}

export default MainContainer;
