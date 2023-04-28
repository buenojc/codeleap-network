import Button from "../Button";
import styles from "./deleteModal.module.css";
import ModalContainer from "../ModalContainer";

export default function DeleteModal({ closeModal, handleDelete }) {
  return (
    <ModalContainer>
      <h2>Are you sure you want to delete this item?</h2>
      <div className={styles.deleteButtonsContainer}>
        <span onClick={() => closeModal(false)}>Cancel</span>
        <Button onClick={handleDelete}>Delete</Button>
      </div>
    </ModalContainer>
  );
}
