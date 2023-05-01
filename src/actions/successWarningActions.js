export const setSuccessMessage = (message) => {
    return {
        type: 'SET_SUCCESS_MESSAGE',
        payload: message
    }
}

export const removeSuccessMessage = () => {
    return {
        type: 'REMOVE_SUCCESS_MESSAGE'
    }
}