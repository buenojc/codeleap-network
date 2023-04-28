import axios from "axios";

export const getAllPosts = async () => {
  try {
    const posts = await axios.get("https://dev.codeleap.co.uk/careers/");
    console.log(posts.data.results);
    return posts.data.results;
  } catch (e) {
    console.log(e);
  }
};

export const createPost = async (postInfo) => {
  try {
    const newPost = {
      ...postInfo,
      username: "testDev",
    };

    await axios.post("https://dev.codeleap.co.uk/careers/", newPost);
    getAllPosts();
  } catch (e) {
    console.log(e);
  }
};

export const deletePost = async (postId) => {
  try {
    await axios.delete(`https://dev.codeleap.co.uk/careers/${postId}/`);
    const allPosts = await getAllPosts();
    return allPosts;
  } catch (e) {
    console.log(e);
  }
};

export const editPost = async (postId, postTitle, postContent) => {
  try {
    const updatedPost = {
      title: postTitle,
      content: postContent,
    };

    await axios.patch(
      `https://dev.codeleap.co.uk/careers/${postId}/`,
      updatedPost
    );
    const allPosts = await getAllPosts();
    return allPosts;
  } catch (e) {
    console.log(e);
  }
};
