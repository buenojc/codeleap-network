import styles from "./button.module.css";

export default function Button({
  children,
  type,
  disabled,
  onClick,
}) {
  return (
    <button
      className={styles.btnComponent}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}
