import { useState } from 'react';
import { FaMinus, FaChevronUp, FaChevronDoubleUp } from 'react-icons/fa';
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
          <FaMinus />
        </button>
        <button
          className={`${styles.btn} ${
            priority === 'normal' ? styles.active + ' ' + styles.normal : ''
          }`}
          onClick={() => setPriority('normal')}>
          <FaChevronUp />
        </button>
        <button
          className={`${styles.btn} ${
            priority === 'high' ? styles.active + ' ' + styles.high : ''
          }`}
          onClick={() => setPriority('high')}>
          <FaChevronDoubleUp />
        </button>
      </div>
    </div>
  );
}
