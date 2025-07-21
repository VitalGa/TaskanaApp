import { useState } from 'react';
import Icon from '@/components/icon/Icon';

import styles from './TaskEditorBody.module.css';

export default function TaskEditorBody() {
  const [priority, setPriority] = useState('normal');

  return (
    <div className={styles.priorityContainer}>
      <span className='label'>Приоритет</span>
      <div className='buttons'>
        <button
          className={`${styles.btn} ${priority === 'low' ? styles.active + ' ' + styles.low : ''}`}
          onClick={() => setPriority('low')}>
          <Icon name='priorityLow' />
        </button>
        <button
          className={`${styles.btn} ${
            priority === 'normal' ? styles.active + ' ' + styles.normal : ''
          }`}
          onClick={() => setPriority('normal')}>
          <Icon name='priorityNormal' />
        </button>
        <button
          className={`${styles.btn} ${
            priority === 'high' ? styles.active + ' ' + styles.high : ''
          }`}
          onClick={() => setPriority('high')}>
          <Icon name='priorityHight' />
        </button>
      </div>
    </div>
  );
}
