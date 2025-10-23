import React, { useState, forwardRef } from 'react';
import styles from './taskEditorHeader.module.css';
import { Icon } from '@/components';

export const TaskEditorHeader = forwardRef(
  ({ value, handleChange, onSubmit, disabled = false, title }, ref) => {
    const [isTyping, setIsTyping] = useState(false);

    const handleFocus = () => setIsTyping(true);
    const handleBlur = () => setIsTyping(false);

    const handleSubmit = (e) => {
      e.preventDefault();
      if (onSubmit && value.trim()) {
        onSubmit();
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Enter' && onSubmit && value.trim()) {
        e.preventDefault();
        onSubmit();
      }
    };

    return (
      <form className={styles.taskForm} onSubmit={handleSubmit}>
        <h2 className={styles.taskFormHeader}>{title}</h2>
        <div className={styles.inputGroup}>
          <label className={styles.inputLabel} htmlFor='task-name'>
            Название
            <span className={styles.inputLabelRequired}>*</span>
          </label>
          <div
            className={
              isTyping ? `${styles.inputContainer} ${styles.typing}` : styles.inputContainer
            }>
            <input
              type='text'
              className={styles.input}
              placeholder='Название задачи'
              onFocus={handleFocus}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              value={value}
              onChange={handleChange}
              id='task-name'
              ref={ref}
              disabled={disabled}
              tabIndex={disabled ? -1 : 1}
            />
            {value && (
              <button
                type='button'
                className={styles.clearBtn}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => {
                  handleChange({ target: { value: '' } });
                  setIsTyping(false);
                  if (ref.current) {
                    ref.current.focus();
                  }
                }}
                disabled={disabled}
                tabIndex={disabled ? -1 : 2}
                aria-label='Очистить поле'>
                <Icon name='mark' className={styles.clearIcon} />
              </button>
            )}
          </div>
        </div>
      </form>
    );
  },
);
