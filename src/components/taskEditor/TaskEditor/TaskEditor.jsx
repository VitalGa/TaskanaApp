import { TaskEditorHeader, TaskEditorBody, TaskEditorFooter } from '@/components/taskEditor';
import styles from './taskEditor.module.css';

export const TaskEditor = () => {
  return (
    <div className={styles.taskEditor}>
      <TaskEditorHeader />
      <TaskEditorBody />
      <TaskEditorFooter />
    </div>
  );
};
