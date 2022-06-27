const initialState = {
  loading: false,

  value: [],
};
const deleteReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "POST_DELETE_FAILED":
      return { loading: true, error: true };
    case "POST_DELETE_SUCCESS":
      return { value: payload, loading: false };

    default:
      return state;
  }
};

export default deleteReducer;
