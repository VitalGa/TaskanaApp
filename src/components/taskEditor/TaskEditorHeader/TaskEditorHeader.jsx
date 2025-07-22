import React, { useState } from 'react';
import styles from './taskEditorHeader.module.css';
import Icon from '@/components/icon/Icon';

export const TaskEditorHeader = () => {
  const [isTyping, setIsTyping] = useState(false);
  const [value, setValue] = useState('');

  const handleFocus = () => setIsTyping(true);
  const handleBlur = () => setIsTyping(false);

  const handleChange = (e) => {
    setValue(e.target.value);
    setIsTyping(true);
  };

  return (
    <form className={styles.taskForm}>
      <h2 className={styles.taskFormHeader}>Создание задачи</h2>
      <div className={styles.inputGroup}>
        <label className={styles.inputLabel} htmlFor='task-name'>
          Название
          <span className={styles.inputLabelRequired}>*</span>
        </label>
        <div
          className={
            isTyping
              ? `${styles.customInputContainer} ${styles.typing}`
              : styles.customInputContainer
          }>
          <input
            type='text'
            className={styles.customInput}
            placeholder='Название задачи'
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={value}
            onChange={handleChange}
            id='task-name'
          />
          {value && (
            <button
              type='button'
              className={styles.xmarkIcon}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => {
                setValue('');
                setIsTyping(false);
              }}
              aria-label='Очистить поле'>
              <Icon name='mark' />
            </button>
          )}
        </div>
      </div>
    </form>
  );
};
