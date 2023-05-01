import styles from "./postCard.module.css";
import DeleteIcon from "../../assets/delete-icon.svg";
import EditIcon from "../../assets/edit-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import DeleteModal from "../DeleteModal";
import { useEffect, useState } from "react";
import { deletePost } from "../../actions/apiRequests";
import { setPosts } from "../../actions/postActions";
import EditModal from "../EditModal";
import dateFormatter from "../../utils/dateFormatter";
import { removeError, setError } from "../../actions/errorActions";
import { setSuccessMessage } from "../../actions/successWarningActions";


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
    try{
      handleCloseModalDelete()
      const postsAfterDelete = await deletePost(post.id);
      dispatch(setPosts(postsAfterDelete))
      dispatch(removeError())
      dispatch(setSuccessMessage('Post deleted'))
    }catch(e){
      dispatch(setError(e.message))
    }
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
  const [postDate, setPostDate] = useState('')
  const [informationLoaded, setInformationLoaded] = useState(false)
  
  useEffect(() => {
    setPostDate(dateFormatter(post.created_datetime))
    setInformationLoaded(true)
  }, [])

  useEffect(() => {
    if(informationLoaded){
      setInterval(() => {
        setPostDate(dateFormatter(post.created_datetime))
      }, 60 * 1000)
    }
  }, [informationLoaded])

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
          <p>{ postDate }</p>
        </div>
        <p>{post.content}</p>
      </div>
    </div>
  );
}
