import ButtonComponent from "../ButtonComponent";
import styles from "./loadOlderPostsButton.module.css";
import { loadMorePosts as loadOlderPosts } from "../../actions/apiRequests";
import { loadMorePosts } from "../../actions/postActions";
import { useDispatch, useSelector } from "react-redux";
import LoadingAnimation from "../LoadingAnimation";
import { useEffect, useState } from "react";
import { setError } from "../../actions/errorActions";

export default function LoadOlderPostsButton() {
  const { next } = useSelector((state) => state.posts);
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(true);
  const dispatch = useDispatch();
  async function handleButtonClick() {
    try {
      setLoaded(false);
      setLoading(true);
      const olderPosts = await loadOlderPosts(next);
      dispatch(loadMorePosts(olderPosts));
      setLoaded(true);
    } catch (e) {
      dispatch(setError(e.message));
      setLoaded(true);
    }
  }

  useEffect(() => {
    if (loaded) {
      setLoading(false);
    }
  }, [loaded]);

  return (
    <div className={styles.loadOlderPostsWrapper}>
      {next !== null ? 
        <>
          {loading ? (
            <LoadingAnimation />
          ) : (
            <ButtonComponent onClick={handleButtonClick}>
              Load Older Posts
            </ButtonComponent>
          )}
        </>
        : <p>You loaded all posts</p>}
    </div>
  );
}
