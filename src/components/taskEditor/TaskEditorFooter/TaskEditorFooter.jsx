import styles from './taskEditorFooter.module.css';
import Button from '@/ui/button/Button';

export const TaskEditorFooter = () => {
  return (
    <div className={styles.taskEditorFooter}>
      <Button variant='secondary' size='small'>
        Создать
      </Button>
      <Button variant='third' size='small'>
        Отмена
      </Button>
    </div>
  );
};
