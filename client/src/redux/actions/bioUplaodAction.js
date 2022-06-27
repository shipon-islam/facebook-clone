import axios from "axios";
const bioUpload = (bio) => async (dispatch, getState) => {
  try {
    dispatch({ type: "POST_FAILED" });
    const res = await axios.put("api/profile", {
      bio: bio,
    });
    dispatch({ type: "POST_SUCCESS", payload: res.data });
  } catch (error) {
    console.log(error);
  }
};
export { bioUpload };
