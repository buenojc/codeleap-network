const initialState = {
    posts: [],
    next: ''
}

export const postReducer = (state = initialState, {type, payload}) => {
    switch (type){
        case 'SET_POSTS':
            return {...state, posts: payload.posts, next: payload.next};
        case 'LOAD_MORE_POSTS':
            return {...state, posts: [...state.posts, ...payload.posts], next: payload.next};
        default:
            return state;
    }
}