import { useState, useRef, useEffect } from 'react';
import { Icon } from '@/components';
import styles from './dropdown.module.css';

export function Dropdown({ options = [], value, onChange, disabled = false }) {
  const [open, setOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  const dropdownRef = useRef(null);
  const triggerRef = useRef(null);
  const timeoutRef = useRef(null);

  const selected = options.find((opt) => opt.value === value) || null;

  useEffect(() => {
    if (open) {
      setShouldRender(true);
    } else {
      timeoutRef.current = setTimeout(() => {
        setShouldRender(false);
      }, 200);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [open]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleToggle = () => {
    if (disabled) return;
    setOpen((v) => !v);
  };

  const handleSelect = (option) => {
    setOpen(false);
    triggerRef.current && triggerRef.current.focus();
    if (onChange) onChange(option.value);
  };

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <button
        ref={triggerRef}
        className={styles.dropdownTrigger}
        onClick={handleToggle}
        aria-haspopup='menu'
        aria-expanded={open}
        disabled={disabled}
        type='button'>
        {selected && (
          <Icon
            name={selected.icon}
            className={`${styles.icon} ${value === 'createdAtDesc' ? styles.labelSelected : ''}`}
          />
        )}
        <span
          className={`${styles.label} ${value === 'createdAtDesc' ? styles.labelSelected : ''}`}>
          {selected
            ? `По ${selected.label.charAt(0).toLowerCase()}${selected.label.slice(1)}`
            : 'Выберите…'}
        </span>
        <Icon
          name='chevronDropdown'
          className={`${styles.chevron} ${value === 'createdAtDesc' ? styles.labelSelected : ''} ${
            open ? styles.open : ''
          } `}
        />
      </button>
      {shouldRender && (
        <div
          className={`${styles.dropdownMenu} ${open ? styles.dropdownMenuVisible : ''}`}
          role='menu'>
          <div className={styles.dropdownHeaderWrapper}>
            <Icon name='filterDropdown' className={styles.filterIcon} />
            <div className={styles.dropdownHeader}>Сортировка по:</div>
          </div>

          <ul className={styles.dropdownList}>
            {options.map((option) => (
              <li
                key={option.value}
                role='menuitemradio'
                aria-checked={selected && selected.value === option.value}
                tabIndex={0}
                className={`${styles.dropdownItem} ${
                  selected && selected.value === option.value ? styles.active : ''
                }`}
                onClick={() => handleSelect(option)}>
                <div className={styles.left}>
                  <Icon name={option.icon} className={styles.icon} />
                  <span className={styles.dropdownItemLabel}>{option.label}</span>
                </div>
                <div className={styles.rightCheckIconWrapper}>
                  {selected && selected.value === option.value && (
                    <Icon name='checkDropdown' className={styles.checkIcon} />
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
