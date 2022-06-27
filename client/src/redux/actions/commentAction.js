import axios from "axios";
const commentAction = (id, data) => async (dispatch, getState) => {
  console.log(id);
  dispatch({ type: "GET_USER_FAILED" });
  const ress = await axios.post(`api/post/comment/${id}`, { coment: data });

  dispatch({ type: "GET_USER_SUCCESS", payload: ress.data });
};
export { commentAction };
