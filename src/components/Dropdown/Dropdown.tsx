import React, { useState } from 'react';
import { UserCircle, Info } from 'phosphor-react';
import styles from './Dropdown.module.scss';

export type DropdownItem = {
  label: string;
  value: string;
};

export type DropdownProps = {
  label: string;
  labelVisibility: 'Visible' | 'Hidden';
  status: 'Unfilled' | 'Filled' | 'Disabled' | 'Error';
  labelIconVisibility: 'Visible' | 'Hidden';
  leftIconVisibility: 'Visible' | 'Hidden';
  helperText: string;
  required: boolean;
  text: string;
  type: 'SingleNoIcon' | 'SingleRadio' | 'Multi';
  activeItemIndex: number;
  items: DropdownItem[];
  onSelect: (value: string) => void;
};

const Dropdown: React.FC<DropdownProps> = ({
  label,
  labelVisibility,
  status,
  labelIconVisibility,
  leftIconVisibility,
  helperText,
  required,
  text,
  type,
  activeItemIndex,
  items,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(activeItemIndex);

  const toggleDropdown = () => {
    if (status !== 'Disabled') {
      setIsOpen(!isOpen);
    }
  };

  const handleSelect = (index: number) => {
    setActiveIndex(index);
    onSelect(items[index].value);
    setIsOpen(false);
  };

  return (
    <div className={`${styles.dropdown} ${styles[status.toLowerCase()]}`}>
      {labelVisibility === 'Visible' && (
        <label className={styles.dropdownLabel}>
          {labelIconVisibility === 'Visible' && <Info className={styles.icon} />}
          {label} {required && '*'}
        </label>
      )}
      <div className={`${styles.dropdownInput} ${styles[status.toLowerCase()]}`} onClick={toggleDropdown}>
        {leftIconVisibility === 'Visible' && <UserCircle className={styles.icon} />}
        <span>{text || (activeIndex >= 0 ? items[activeIndex].label : 'Select...')}</span>
      </div>
      {isOpen && (
        <ul className={styles.dropdownMenu}>
          {items.map((item, index) => (
            <li
              key={index}
              className={index === activeIndex ? styles.active : ''}
              onClick={() => handleSelect(index)}
            >
              {type === 'SingleRadio' && <input type="radio" checked={index === activeIndex} readOnly />}
              {type === 'Multi' && <input type="checkbox" checked={index === activeIndex} readOnly />}
              {item.label}
            </li>
          ))}
        </ul>
      )}
      {helperText && <div className={styles.helperText}>{helperText}</div>}
    </div>
  );
};

export default Dropdown;
