import styles from './taskEditorHeader.module.css';

export const TaskEditorHeader = () => {
  return (
    <form className={styles.taskForm}>
      <h2 className={styles.taskFormHeader}>Создание задачи</h2>
      <div className={styles.inputGroup}>
        <label className={styles.inputLabel} htmlFor='task-name'>
          Название
          <span className={styles.inputLabelRequired}>*</span>
        </label>
        <div className={styles.customInputContainer}>
          <input type='text' className={styles.customInput} placeholder='Название задачи' />
          <div className={styles.xmarkIcon}>
            <svg
              width='12'
              height='12'
              viewBox='0 0 12 12'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M1.05071 1.05071C1.44123 0.660181 2.0744 0.660181 2.46492 1.05071L6.00048 4.58627L9.53599 1.05076C9.92651 0.660234 10.5597 0.660234 10.9502 1.05076C11.3407 1.44128 11.3407 2.07445 10.9502 2.46497L7.41469 6.00048L10.9502 9.53599C11.3407 9.92651 11.3407 10.5597 10.9502 10.9502C10.5597 11.3407 9.92651 11.3407 9.53599 10.9502L6.00048 7.41469L2.46492 10.9503C2.0744 11.3408 1.44123 11.3408 1.05071 10.9503C0.660181 10.5597 0.660181 9.92656 1.05071 9.53604L4.58627 6.00048L1.05071 2.46492C0.660181 2.07439 0.660181 1.44123 1.05071 1.05071Z'
                fill='#8C8C8C'
              />
            </svg>
          </div>
        </div>
      </div>
    </form>
  );
};
