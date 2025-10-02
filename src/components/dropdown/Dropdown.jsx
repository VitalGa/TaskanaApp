import React, { useState, useRef, useEffect } from 'react';
import { Icon } from '@/components';
import styles from './dropdown.module.css';

export function Dropdown({ options = [], value, onChange, disabled = false }) {
  const [open, setOpen] = useState(false);

  const dropdownRef = useRef(null);
  const triggerRef = useRef(null);

  // Найти текущую выбранную опцию по value
  const selected = options.find((opt) => opt.value === value) || null;

  // Закрытие при клике вне
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
      {/* Кнопка-триггер */}
      <button
        ref={triggerRef}
        className={styles.dropdownTrigger}
        onClick={handleToggle}
        aria-haspopup='menu'
        aria-expanded={open}
        disabled={disabled}
        type='button'>
        {selected && <Icon name={selected.icon} className={styles.icon} />}
        <span className={styles.label}>{selected ? selected.label : 'Выберите…'}</span>
        <Icon name='chevronDropdown' className={`${styles.chevron} ${open ? styles.open : ''}`} />
      </button>

      {/* Выпадающее меню */}
      {open && (
        <div className={styles.dropdownMenu} role='menu'>
          <div className={styles.dropdownHeader}>Сортировка по:</div>
          <ul>
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
                  <span>{option.label}</span>
                </div>

                {selected && selected.value === option.value && (
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
