import axios from "axios";
const getAllPostAction = () => async (dispatch, getState) => {
  dispatch({ type: "GET_ALL_POST_START" });
  const res = await axios.get("api/post//allstatus");
  dispatch({ type: "GET_ALL_POST_SUCCESS", payload: res.data });
};
export { getAllPostAction };
