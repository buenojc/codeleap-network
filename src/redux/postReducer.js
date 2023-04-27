const initialState = {
    posts: []
}

export const postReducer = (state = initialState, {type, payload}) => {
    switch (type){
        case 'SET_POSTS':
            return {...state, posts: payload};
        default:
            return state;
    }
}