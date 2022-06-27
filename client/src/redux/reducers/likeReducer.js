const initialState = {
  loading: false,
  error: false,
  value: [],
};
const likeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "POST_LIKE_FAILED":
      return { ...state, loading: true };
    case "POST_LIKE_SUCCESS":
      return { ...state, value: payload, loading: false };

    default:
      return state;
  }
};

export default likeReducer;
