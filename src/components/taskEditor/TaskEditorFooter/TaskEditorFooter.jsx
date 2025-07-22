import styles from './taskEditorFooter.module.css';
import Button from '@/ui/button/Button';

export const TaskEditorFooter = () => {
  return (
    <div className={styles.taskEditorFooter}>
      <Button variant='thirdLeft' size='small'>
        Создать
      </Button>
      <Button variant='thirdRight' size='small'>
        Отмена
      </Button>
    </div>
  );
};
