import { useEffect } from "react";
import styles from "./input.module.css";

export default function Input({
  type,
  children,
  name,
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className={styles.inputWrapper}>
      <label className="labelInput" htmlFor={name}>
        {children}
      </label>
      <input
        type={type}
        value={value}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}
