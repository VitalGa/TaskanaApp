import styles from './taskEditorFooter.module.css';
import { Button } from '@/ui';
import { Icon } from '@/components';

export const TaskEditorFooter = ({
  type = 'create',
  disabled,
  disabledCancel,
  handleSave,
  handleCancel,
  handleDelete,
}) => {
  return (
    <div className={styles.taskEditorFooterWrapper}>
      <div className={styles.taskEditorFooter}>
        <Button
          onClick={handleSave}
          variant='thirdLeft'
          size='small'
          className={styles.thirdLeft}
          disabled={disabled}
          tabIndex={disabled ? -1 : 6}>
          {type === 'edit' ? 'Сохранить' : 'Создать'}
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
        <button
          className={styles.taskEditorFooterDeleteButton}
          onClick={handleDelete}
          style={{ display: type === 'edit' ? 'block' : 'none' }}
          tabIndex={type === 'edit' ? 8 : -1}
          aria-hidden={type !== 'edit'}>
          <Icon name='footerDelete' className={styles.taskEditorFooterDeleteIcon} />
        </button>
      </div>
    </div>
  );
};
