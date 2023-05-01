export const setPosts = (posts) => {
    return {
        type: 'SET_POSTS',
        payload: posts
    }
}

export const loadMorePosts = (posts) => {
    return {
        type: 'LOAD_MORE_POSTS',
        payload: posts
    }
}