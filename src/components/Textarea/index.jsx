import { useEffect } from "react";
import styles from "./textarea.module.css";

export default function Textarea({
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
      <textarea
        value={value}
        name={name}
        // id={name}
        placeholder={placeholder}
        onChange={onChange}
      ></textarea>
    </div>
  );
}
