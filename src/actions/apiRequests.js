import axios from "axios";

export const getAllPosts = async () => {
  try {
    const posts = await axios.get("https://dev.codeleap.co.uk/careers/");
    return {posts: posts.data.results, next: posts.data.next};
  } catch (e) {
    throw new Error('Unable to get posts, please try again later')
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
    throw new Error('Unable to create a post, please try again later')
  }
};

export const deletePost = async (postId) => {
  try {
    await axios.delete(`https://dev.codeleap.co.uk/careers/${postId}/`);
    const allPosts = await getAllPosts();
    return allPosts;
  } catch (e) {
    throw new Error('Unable to delete the post, please try again later')
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
    throw new Error('Unable to edit the post, please try again later')
  }
};

export const loadMorePosts = async (nextUrl) => {
  try {
    const posts = await axios.get(nextUrl)
    return {posts: posts.data.results, next: posts.data.next};
  } catch (e) {
    throw new Error('Unable to get posts, please try again later')
  }
}