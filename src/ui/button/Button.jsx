import styles from './button.module.css';
import Spinner from '../spinner/Spinner';

/**
 * Компонент кнопки
 * @param {React.ReactNode} children - Содержимое кнопки
 * @param {'primary' | 'secondary'} variant - Вариант стиля кнопки
 * @param {'medium' | 'large'} size - Размер кнопки
 * @param {boolean} disabled - Состояние отключения
 * @param {boolean} loading - Состояние загрузки
 * @param {function} onClick - Обработчик клика
 * @param {string} className - Дополнительные CSS классы
 * @param {'default' | '8' | '10'} gap - Отступ между элементами в контенте (в пикселях)
 */
function Button({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  onClick,
  className = '',
  gap = 'default',
}) {
  const buttonClasses = [
    styles.button,
    styles[variant],
    styles[size],
    disabled ? styles.disabled : '',
    loading ? styles.loading : '',
    className,
  ].join(' ');

  const contentClasses = [
    styles.content,
    'inline-flex items-center',
    gap !== 'default' ? styles[`gap-${gap}`] : '',
  ].join(' ');

  return (
    <button
      type='button'
      className={buttonClasses}
      disabled={disabled || loading}
      onClick={onClick}>
      <div className={contentClasses}>{children}</div>
      <div className={styles.spinnerWrapper}>
        <Spinner width={24} height={24} />
      </div>
    </button>
  );
}

export default Button;
