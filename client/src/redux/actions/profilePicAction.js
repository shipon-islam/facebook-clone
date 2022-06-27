import axios from "axios";
const profilePicUpload =
  (path, preset, bodyname, avatars) => async (dispatch, getState) => {
    try {
      const formData = new FormData();
      formData.append("upload_preset", preset);
      formData.append("cloud_name", "shiponislam");
      formData.append("file", avatars);

      if (avatars) {
        dispatch({ type: "POST_FAILED" });
        const data = await axios.post(
          "https://api.cloudinary.com/v1_1/shiponislam/image/upload",
          formData
        );

        const res = await axios.put(path, {
          [bodyname]: data.data.url,
        });

        dispatch({ type: "POST_SUCCESS", payload: res.data });
      }
    } catch (error) {
      console.log(error);
    }
  };
export { profilePicUpload };
