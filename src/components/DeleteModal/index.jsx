import Button from '../Button'
import styles from './deleteModal.module.css'

export default function DeleteModal({closeModal, handleDelete}){
    return(
        <div className={styles.deleteModalWrapper}>
            <div className={styles.modal}>
                <h2>Are you sure you want to delete this item?</h2>
                <div className={styles.buttonsContainer}>
                    <span onClick={() => closeModal(false)}>Cancel</span>
                    <Button onClick={handleDelete}>Delete</Button>
                </div>
            </div>
        </div>
    )
}