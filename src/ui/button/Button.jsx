import styles from './button.module.css';
import { Spinner } from '../spinner/Spinner';

/**
 * @param {React.ReactNode} children
 * @param {'primary' | 'secondary'} variant
 * @param {'medium' | 'large'} size
 * @param {boolean} disabled
 * @param {boolean} loading
 * @param {function} onClick
 * @param {string} className
 * @param {'default' | '8' | '10'} gap
 * @param {number} tabIndex
 * @param {string} ariaLabel
 * @param {string} ariaDescribedBy
 * @param {boolean} ariaPressed
 */
export function Button({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  onClick,
  className = '',
  gap = 'default',
  tabIndex,
  ariaLabel,
  ariaDescribedBy,
  ariaPressed,
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
      onClick={onClick}
      tabIndex={tabIndex}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      aria-pressed={ariaPressed}>
      <div className={contentClasses}>{children}</div>
      <div className={styles.spinnerWrapper}>
        <Spinner width={24} height={24} />
      </div>
    </button>
  );
}
