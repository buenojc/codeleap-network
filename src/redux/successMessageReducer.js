const initialState = {
  success: false,
  message: "",
};

export const successMessageReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_SUCCESS_MESSAGE":
      return {...state, success: true, message: payload};
    case "REMOVE_SUCCESS_MESSAGE":
        return {...state, success: false, message: ''};
    default:
      return state
  }
};
