import { useState, useRef, useEffect } from 'react';
import { Icon } from '@/components'; // твой универсальный компонент
import styles from './dropdown.module.css';

export function Dropdown({ options, defaultValue, onSortChange, disabled = false }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(defaultValue);
  const dropdownRef = useRef(null);

  // Закрытие при клике вне
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    setSelected(option);
    setOpen(false);
    if (onSortChange) {
      onSortChange(option.value);
    }
  };

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      {/* Верхний див (триггер) */}
      <button
        className={styles.dropdownTrigger}
        onClick={() => !disabled && setOpen(!open)}
        disabled={disabled}>
        <Icon name={selected.icon} className={styles.icon} />
        {selected.label}
        <Icon name='chevronDropdown' className={`${styles.chevron} ${open ? styles.open : ''}`} />
      </button>

      {/* Дропдаун */}
      {open && (
        <div className={styles.dropdownMenu}>
          <div className={styles.dropdownHeader}>Сортировка по:</div>
          <ul>
            {options.map((option) => (
              <li
                key={option.value}
                className={`${styles.dropdownItem} ${
                  selected?.value === option.value ? styles.active : ''
                }`}
                onClick={() => handleSelect(option)}>
                <Icon name={option.icon} className={styles.icon} />
                {option.label}
                {selected?.value === option.value && (
                  <Icon name='checkDropdown' className={styles.checkIcon} />
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
