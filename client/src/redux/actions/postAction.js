import axios from "axios";
const postAction = (avatars, post, category) => async (dispatch, getState) => {
  try {
    const formData = new FormData();
    formData.append("upload_preset", "upload_post");
    formData.append("cloud_name", "shiponislam");
    formData.append("file", avatars);

    if (avatars) {
      dispatch({ type: "POST_FAILED" });
      const data = await axios.post(
        "https://api.cloudinary.com/v1_1/shiponislam/image/upload",
        formData
      );

      const res = await axios.post("api/post/status", {
        avatar: data.data.url,
        post,
        category,
      });

      dispatch({ type: "POST_SUCCESS", payload: res.data });
    } else {
      dispatch({ type: "POST_FAILED" });

      const res = await axios.post("api/post/status", {
        post,

        category,
      });
      dispatch({ type: "POST_SUCCESS", payload: res.data });
    }
  } catch (error) {
    console.log(error);
  }
};
export { postAction };
