import ContainerComponent from "../../components/ContainerComponent";
import styles from "./feedPage.module.css";
import HeaderComponent from "../../components/HeaderComponent";
import CreatePostCart from "../../components/CreatePostCard";
import PostCard from "../../components/PostCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts, createPost } from "../../actions/apiRequests";
import { useEffect, useState } from "react";
import { setPosts } from "../../actions/postActions";
import { removeError, setError } from "../../actions/errorActions";
import ErrorWarning from "../../components/ErrorWarning";
import SuccessWarning from "../../components/SuccessWarning";
import { setSuccessMessage } from "../../actions/successWarningActions";
import LoadOlderPostsButton from "../../components/LoadOlderPostsButton";
import LoadingAnimation from "../../components/LoadingAnimation";
import ReturnToTopButton from "../../components/ReturnToTopButton";

export default function FeedPage() {
  const { posts } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state)
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  async function loadPosts() {
    try {
      const posts = await getAllPosts();
      dispatch(setPosts(posts));
      setLoading(false);
    } catch (e) {
      dispatch(setError(e.message));
    }
  }

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleContentChange(event) {
    setContent(event.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await createPost({ title, content }, user.username);
      loadPosts();
      setTitle("");
      setContent("");
      dispatch(removeError());
      dispatch(setSuccessMessage("🎉 Post created "));
    } catch (e) {
      dispatch(setError(e.message));
    }
  }

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <ContainerComponent>
      <div className={styles.feedPageWrapper}>
        <ErrorWarning />
        <SuccessWarning />
        <HeaderComponent />
        <main>
          <CreatePostCart
            titleValue={title}
            titleChange={handleTitleChange}
            contentValue={content}
            contentChange={handleContentChange}
            onSubmit={handleSubmit}
          />
          {loading ? (
            <div className={styles.loadingAnimationWrapper}>
              <LoadingAnimation />
            </div>
          ) : (
            <>
              {posts.map((post) => (
                <PostCard post={post} key={post.id} />
              ))}
              <LoadOlderPostsButton />
            </>
          )}
        </main>
        <ReturnToTopButton />
      </div>
    </ContainerComponent>
  );
}
