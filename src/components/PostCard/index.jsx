import styles from "./postCard.module.css";
import DeleteIcon from "../../assets/delete-icon.svg";
import EditIcon from "../../assets/edit-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import DeleteModal from "../DeleteModal";
import { useState } from "react";
import { deletePost } from "../../actions/apiRequests";
import { setPosts } from "../../actions/postActions";
import EditModal from "../EditModal";


function ActionsButtons({ post }) {
  const dispatch = useDispatch();
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);


  function handleCloseModalDelete() {
    setOpenDeleteModal(false);
  }

  function handleCloseModaEdit() {
    setOpenEditModal(false);
  }


  async function handleDelete() {
    const postsAfterDelete = await deletePost(postId);
    dispatch(setPosts(postsAfterDelete))
  }

  return (
    <>
      <div className={styles.actionsWrapper}>
        <span onClick={() => setOpenDeleteModal(true)}>
          <img src={DeleteIcon} alt="Delete Post" />
        </span>
        <span onClick={() => setOpenEditModal(true)}>
          <img src={EditIcon} alt="Edit Post" />
        </span>
        {openDeleteModal && (
          <DeleteModal
            closeModal={handleCloseModalDelete}
            handleDelete={handleDelete}
          />
        )}
        {openEditModal && <EditModal post={post} closeModal={handleCloseModaEdit} /> }
      </div>
    </>
  );
}

export default function PostCard({ post, handleDelete }) {
  const { username } = useSelector((state) => state.user);

  return (
    <div className={styles.postCardWrapper}>
      <div className={styles.header}>
        <h2>{post.title}</h2>
        {username == post.username && (
          <ActionsButtons post={post} handleDelete={handleDelete} />
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.informationWrapper}>
          <p>@{post.username}</p>
          <p>25 minutes ago</p>
        </div>
        <p>{post.content}</p>
      </div>
    </div>
  );
}
