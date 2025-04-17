import styles from './button.module.css';

function Button({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  onClick,
  className = '',
  type = 'button',
}) {
  const buttonClasses = [
    styles.button,
    styles[variant],
    styles[size],
    disabled ? styles.disabled : '',
    className,
  ].join(' ');

  return (
    <button type={type} className={buttonClasses} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
