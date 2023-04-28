import styles from "./modalContainer.module.css";

export default function ModalContainer({ children }) {
  return (
    <div className={styles.modalContainer}>
      <div className={styles.modal}>{children}</div>
    </div>
  );
}
