import axios from "axios";
const likeAction = (id) => async (dispatch, getState) => {
  dispatch({ type: "POST_LIKE_FAILED" });
  const ress = await axios.put(`api/post/likes/${id}`);

  dispatch({ type: "POST_LIKE_SUCCESS", payload: ress.data });
};
export { likeAction };
