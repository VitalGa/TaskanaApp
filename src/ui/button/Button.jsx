import styles from './button.module.css';
import Spinner from '../spinner/Spinner';

function Button({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  onClick,
  className = '',
  type = 'button',
  shadow = 'shadow-md',
  fixedColor = false,
  loading = false,
}) {
  const buttonClasses = [
    styles.button,
    fixedColor ? styles.primaryFixed : styles[variant],
    styles[size],
    styles[shadow],
    disabled ? styles.disabled : '',
    loading ? styles.loading : '',
    className,
  ].join(' ');

  return (
    <button type={type} className={buttonClasses} disabled={disabled || loading} onClick={onClick}>
      <div className={`${styles.content} inline-flex items-center`}>{children}</div>
      <div className={styles.spinnerWrapper}>
        <Spinner width={24} height={24} />
      </div>
    </button>
  );
}

export default Button;
