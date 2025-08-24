import styles from './taskEditorFooter.module.css';
import Button from '@/ui/button/Button';
import { useTaskEditor } from '@/context/TaskEditorContext';

export const TaskEditorFooter = ({ disabled, handleCreate, handleCancel }) => {
  const { closeTaskEditor } = useTaskEditor();

  return (
    <div className={styles.taskEditorFooter}>
      <Button
        onClick={handleCreate}
        variant='thirdLeft'
        size='small'
        className={styles.thirdLeft}
        disabled={disabled}
        tabIndex={6}>
        Создать
      </Button>
      <Button
        onClick={handleCancel}
        variant='thirdRight'
        size='small'
        className={styles.thirdRight}
        tabIndex={7}>
        Отмена
      </Button>
    </div>
  );
};
