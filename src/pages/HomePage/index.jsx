import Container from "../../components/Container";
import styles from "./homePage.module.css";
import Header from "../../components/Header";
import CreatePostCart from "../../components/CreatePostCard";
import PostCard from "../../components/PostCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts, createPost, deletePost } from "../../actions/apiRequests";
import { useEffect, useState } from "react";
import { setPosts } from "../../actions/postActions";

export default function HomePage() {
  const { posts } = useSelector((state) => state.posts);
  const { username, login } = useSelector((state) => state.user);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
 
  async function loadPosts() {
    const posts = await getAllPosts();
    dispatch(setPosts(posts));
  }

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleContentChange(event) {
    setContent(event.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try{
        await createPost({title, content})
        loadPosts()
        setTitle('')
        setContent('')
    }catch(e){
        console.log(e)
    }
  }

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <Container>
      <div className={styles.homePageWrapper}>
        <Header />
        <main>
          <CreatePostCart
            titleValue={title}
            titleChange={handleTitleChange}
            contentValue={content}
            contentChange={handleContentChange}
            onSubmit={handleSubmit}
          />
          {posts.map((post) => (
            <PostCard post={post} key={post.id} />
          ))}
        </main>
      </div>
    </Container>
  );
}
