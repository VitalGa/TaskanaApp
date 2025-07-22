import styles from './taskEditorFooter.module.css';
import Button from '@/ui/button/Button';

export const TaskEditorFooter = ({ disabled }) => {
  return (
    <div className={styles.taskEditorFooter}>
      <Button variant='thirdLeft' size='small' className={styles.thirdLeft} disabled={disabled}>
        Создать
      </Button>
      <Button variant='thirdRight' size='small' className={styles.thirdRight} disabled={disabled}>
        Отмена
      </Button>
    </div>
  );
};
