import Icon from '@/components/icon/Icon';
import styles from './taskEditorBody.module.css';

export function TaskEditorBody({ priority, setPriority }) {
  return (
    <div className={styles.bodyWrapper}>
      <div className={styles.priorityContainer}>
        <span className={styles.label}>Приоритет</span>
        <div className={styles.buttons}>
          <button
            type='button'
            className={`${styles.btn} ${styles.low} ${priority === 'low' ? styles.active : ''}`}
            onClick={() => setPriority('low')}>
            <Icon name='priorityLow' color={styles.priorityButtonColorLow} />
          </button>
          <button
            type='button'
            className={`${styles.btn} ${styles.normal} ${
              priority === 'normal' ? styles.active : ''
            }`}
            onClick={() => setPriority('normal')}>
            <Icon name='priorityNormal' color={styles.priorityButtonColorNormal} />
          </button>
          <button
            type='button'
            className={`${styles.btn} ${styles.high} ${priority === 'high' ? styles.active : ''}`}
            onClick={() => setPriority('high')}>
            <Icon name='priorityHight' color={styles.priorityButtonColorHigh} />
          </button>
        </div>
      </div>
    </div>
  );
}
