const initialState = {
  loading: false,
  error: false,
  values: [],
};
const commentReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_USER_FAILED":
      return { ...state, loading: true };
    case "GET_USER_SUCCESS":
      return { ...state, values: payload, loading: false };

    default:
      return state;
  }
};

export default commentReducer;
