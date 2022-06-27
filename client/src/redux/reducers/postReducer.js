const initialState = {
  loading: false,
  error: false,
  values: [],
};
const postReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "POST_FAILED":
      return { ...state, loading: true };
    case "POST_SUCCESS":
      return { ...state, values: payload, loading: false };

    default:
      return state;
  }
};

export default postReducer;
