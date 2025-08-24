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
            className={`${styles.btn} ${styles.low} ${priority === 'low' ? styles.active : ''}`}
            onClick={() => setPriority('low')}
            onKeyDown={(e) => handleKeyDown(e, 'low')}
            tabIndex={3}
            role='radio'
            aria-checked={priority === 'low'}
            aria-label='Низкий приоритет'>
            <Icon name='priorityLow' color={styles.priorityButtonColorLow} />
          </button>
          <button
            type='button'
            className={`${styles.btn} ${styles.normal} ${
              priority === 'normal' ? styles.active : ''
            }`}
            onClick={() => setPriority('normal')}
            onKeyDown={(e) => handleKeyDown(e, 'normal')}
            tabIndex={4}
            role='radio'
            aria-checked={priority === 'normal'}
            aria-label='Обычный приоритет'>
            <Icon name='priorityNormal' color={styles.priorityButtonColorNormal} />
          </button>
          <button
            type='button'
            className={`${styles.btn} ${styles.high} ${priority === 'high' ? styles.active : ''}`}
            onClick={() => setPriority('high')}
            onKeyDown={(e) => handleKeyDown(e, 'high')}
            tabIndex={5}
            role='radio'
            aria-checked={priority === 'high'}
            aria-label='Высокий приоритет'>
            <Icon name='priorityHight' color={styles.priorityButtonColorHigh} />
          </button>
        </div>
      </div>
    </div>
  );
}
