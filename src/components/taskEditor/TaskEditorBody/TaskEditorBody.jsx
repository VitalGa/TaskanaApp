import Icon from '@/components/icon/Icon';
import styles from './taskEditorBody.module.css';

export function TaskEditorBody({ priority, setPriority }) {
  const handleKeyDown = (e, priorityValue) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setPriority(priorityValue);
    }
  };

  return (
    <div className={styles.bodyWrapper}>
      <div className={styles.priorityContainer}>
        <span className={styles.label}>Приоритет</span>
        <div className={styles.buttons} role='radiogroup' aria-label='Выберите приоритет'>
          <button
            type='button'
            className={`${styles.btn} ${styles.priority1} ${
              priority === '1' ? styles.activePriority1 : ''
            }`}
            onClick={() => setPriority('1')}
            onKeyDown={(e) => handleKeyDown(e, '1')}
            tabIndex={3}
            role='radio'
            aria-checked={priority === '1'}
            aria-label='Низкий приоритет'>
            <Icon name='priorityLow' color={styles.priorityButtonColorLow} />
          </button>
          <button
            type='button'
            className={`${styles.btn} ${styles.priority2} ${
              priority === '2' ? styles.activePriority2 : ''
            }`}
            onClick={() => setPriority('2')}
            onKeyDown={(e) => handleKeyDown(e, '2')}
            tabIndex={4}
            role='radio'
            aria-checked={priority === '2'}
            aria-label='Обычный приоритет'>
            <Icon name='priorityNormal' color={styles.priorityButtonColorNormal} />
          </button>
          <button
            type='button'
            className={`${styles.btn} ${styles.priority3} ${
              priority === '3' ? styles.activePriority3 : ''
            }`}
            onClick={() => setPriority('3')}
            onKeyDown={(e) => handleKeyDown(e, '3')}
            tabIndex={5}
            role='radio'
            aria-checked={priority === '3'}
            aria-label='Высокий приоритет'>
            <Icon name='priorityHight' color={styles.priorityButtonColorHigh} />
          </button>
        </div>
      </div>
    </div>
  );
}
