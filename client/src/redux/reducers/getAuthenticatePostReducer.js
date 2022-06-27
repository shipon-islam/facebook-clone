const initialState = {
  loading: false,
  error: false,
  values: [],
};
const getAuthenticateReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_PRIVATE_POST_FAILED":
      return { ...state, loading: true };
    case "GET_PRIVATE_POST_SUCCESS":
      return { ...state, values: payload, loading: false };

    default:
      return state;
  }
};

export default getAuthenticateReducer;
