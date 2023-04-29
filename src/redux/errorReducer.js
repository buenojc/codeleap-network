const initialState ={
     error: false,
     errorMessage: ''
}

export const errorReducer = (state = initialState, {type, payload}) => {
    switch (type){
        case 'SET_ERROR':
            return {...state, error: true, errorMessage: payload }
        case 'REMOVE_ERROR':
            return {...state, error: false, errorMessage: ''}
        default:
            return state;
    }
}