import Button from "../Button";
import ModalContainer from "../ModalContainer";
import styles from "./editModal.module.css";
import Input from "../Input";
import Textarea from "../Textarea";
import { useState } from "react";
import { editPost } from "../../actions/apiRequests";
import { useDispatch } from "react-redux";
import { setPosts } from "../../actions/postActions";

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
    event.preventDefault();
    const updatedPosts = await editPost(post.id, editedTitle, editedContent)
    dispatch(setPosts(updatedPosts));
    closeModal()
  }

  return (
    <ModalContainer>
      <h2 className={styles.editModalTitle}>Edit Item</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.editInputsContainer}>
          <Input value={editedTitle} onChange={handleTitleChange}>
            Title
          </Input>
          <Textarea value={editedContent} onChange={handleContentChange}>
            Content
          </Textarea>
        </div>
        <div className={styles.editButtonsContainer}>
          <span onClick={closeModal}>Cancel</span>
          <Button>Save</Button>
        </div>
      </form>
    </ModalContainer>
  );
}
