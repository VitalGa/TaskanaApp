import styles from './taskEditorFooter.module.css';
import Button from '@/ui/button/Button';

export const TaskEditorFooter = () => {
  return (
    <div className={styles.taskEditorFooter}>
      <Button variant='thirdLeft' size='small' className={styles.thirdLeft} disabled={true}>
        Создать
      </Button>
      <Button variant='thirdRight' size='small' className={styles.thirdRight} disabled={true}>
        Отмена
      </Button>
    </div>
  );
};
