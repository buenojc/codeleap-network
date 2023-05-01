const initialState = {
    login: false,
    username: 'CodeLeapDev'
}

export const loginReducer = (state = initialState, {type, payload}) => {
    switch (type){
        case 'SET_LOGIN':
            return {...state, login: true};
        case 'SET_LOGOUT':
            return {...state, login: false};
        default:
            return state;
    }
}