import axios from "axios";
const replayAction = (id, data) => async (dispatch, getState) => {
  dispatch({ type: "GET_USER_FAILED" });
  const ress = await axios.post(`api/post/replay/${id}`, { rebody: data });

  dispatch({ type: "GET_USER_SUCCESS", payload: ress.data });
};
export { replayAction };
