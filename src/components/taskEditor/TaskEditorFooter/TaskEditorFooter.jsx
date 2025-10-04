import styles from './taskEditorFooter.module.css';
import { Button } from '@/ui';
import { Icon } from '@/components';

export const TaskEditorFooter = ({ disabled, disabledCancel, handleCreate, handleCancel }) => {
  return (
    <div className={styles.taskEditorFooterWrapper}>
      <div className={styles.taskEditorFooter}>
        <Button
          onClick={handleCreate}
          variant='thirdLeft'
          size='small'
          className={styles.thirdLeft}
          disabled={disabled}
          tabIndex={disabled ? -1 : 6}>
          Создать
        </Button>
        <Button
          onClick={handleCancel}
          variant='thirdRight'
          size='small'
          className={styles.thirdRight}
          disabled={disabledCancel}
          tabIndex={disabledCancel ? -1 : 7}>
          Отмена
        </Button>
      </div>
      <div className={styles.taskEditorFooterDelete}>
        <button className={styles.taskEditorFooterDeleteButton}>
          <Icon name='footerDelete' />
        </button>
      </div>
    </div>
  );
};
