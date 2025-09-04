import styles from './taskEditorFooter.module.css';
import { Button } from '@/ui';

export const TaskEditorFooter = ({ disabled, handleCreate, handleCancel }) => {
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
