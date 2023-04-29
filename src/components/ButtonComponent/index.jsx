import styles from "./buttonComponent.module.css";

export default function ButtonComponent({
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
