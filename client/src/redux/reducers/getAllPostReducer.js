const initialState = {
  loading: false,
  error: false,
  values: [],
};
const getAllPost = (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_ALL_POST_START":
      return { ...state, loading: true };
    case "GET_ALL_POST_SUCCESS":
      return { ...state, values: payload, loading: false };

    default:
      return state;
  }
};

export default getAllPost;
