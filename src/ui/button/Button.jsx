import styles from './button.module.css';

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
}) {
  const buttonClasses = [
    styles.button,
    fixedColor ? styles.primaryFixed : styles[variant],
    styles[size],
    styles[shadow],
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
