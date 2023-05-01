import ButtonComponent from "../ButtonComponent";
import ModalContainer from "../ModalContainer";
import styles from "./editModal.module.css";
import InputComponent from "../InputComponent";
import TextareaComponent from "../TextareaComponent";
import { useState } from "react";
import { editPost } from "../../actions/apiRequests";
import { useDispatch } from "react-redux";
import { setPosts } from "../../actions/postActions";
import { removeError, setError } from "../../actions/errorActions";
import { setSuccessMessage } from "../../actions/successWarningActions";

export default function EditModal({ closeModal, post }) {
  const [editedTitle, setEditedTitle] = useState(post.title);
  const [editedContent, setEditedContent] = useState(post.content);
  const dispatch = useDispatch();

  function handleTitleChange(event) {
    setEditedTitle(event.target.value);
  }

  function handleContentChange(event) {
    setEditedContent(event.target.value);
  }

  async function handleSubmit(event) {
    try{
      event.preventDefault();
      const updatedPosts = await editPost(post.id, editedTitle, editedContent)
      dispatch(setPosts(updatedPosts));
      dispatch(removeError())
      dispatch(setSuccessMessage('Post edited'))
      closeModal()
    }catch(e){
      closeModal()
      dispatch(setError(e.message))
    }
  }

  return (
    <ModalContainer>
      <h2 className={styles.editModalTitle}>Edit Item</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.editInputsContainer}>
          <InputComponent value={editedTitle} onChange={handleTitleChange}>
            Title
          </InputComponent>
          <TextareaComponent value={editedContent} onChange={handleContentChange}>
            Content
          </TextareaComponent>
        </div>
        <div className={styles.editButtonsContainer}>
          <span onClick={closeModal}>Cancel</span>
          <ButtonComponent>Save</ButtonComponent>
        </div>
      </form>
    </ModalContainer>
  );
}
