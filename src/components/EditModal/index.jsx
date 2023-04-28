import Button from "../Button";
import ModalContainer from "../ModalContainer";
import styles from "./editModal.module.css";
import Input from "../Input";
import Textarea from "../Textarea";

export default function EditModal({ closeModal}) {
  return (
    <ModalContainer>
      <h2 className={styles.editModalTitle}>Edit Item</h2>
      <div className={styles.editInputsContainer}>
        <Input>Title</Input>
        <Textarea>Content</Textarea>
      </div>
      <div className={styles.editButtonsContainer}>
        <span onClick={closeModal}>Cancel</span>
        <Button>Save</Button>
      </div>
    </ModalContainer>
  );
}
