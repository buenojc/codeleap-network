const initialState = {
    login: false,
    username: 'testDev'
}

export const loginReducer = (state = initialState, {type, payload}) => {
    switch (type){
        case 'LOGIN':
            return state.login = true;
        case 'LOGOUT':
            return state.login = false;
        default:
            return state;
    }
}