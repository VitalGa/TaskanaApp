import styles from './taskEditorFooter.module.css';
import Button from '@/ui/button/Button';
import { useTaskEditor } from '@/context/TaskEditorContext';

export const TaskEditorFooter = ({ disabled, handleCreate }) => {
  const { closeTaskEditor } = useTaskEditor();

  return (
    <div className={styles.taskEditorFooter}>
      <Button
        onClick={handleCreate}
        variant='thirdLeft'
        size='small'
        className={styles.thirdLeft}
        disabled={disabled}>
        Создать
      </Button>
      <Button
        onClick={closeTaskEditor}
        variant='thirdRight'
        size='small'
        className={styles.thirdRight}>
        Отмена
      </Button>
    </div>
  );
};
