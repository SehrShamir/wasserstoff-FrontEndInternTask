// components/Input/Input.tsx
import React, { ChangeEvent } from 'react';
import styles from './Input.module.css';

export interface InputProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

export const Input: React.FC<InputProps> = ({ label, name, value, onChange, type = 'text' }) => {
  return (
    <div className={styles.inputGroup}>
      <label htmlFor={name} className={styles.label}>{label}</label>
      <input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        className={styles.input}
      />
    </div>
  );
};

