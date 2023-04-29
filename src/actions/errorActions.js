export const setError = (payload) => {
    return {
        type: 'SET_ERROR',
        payload
    }
}

export const removeError = () => {
    return {
        type: 'REMOVE_ERROR',
    }
}