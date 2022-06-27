import { combineReducers } from "redux";
import commentReducer from "./reducers/commentReducer";
import deleteReducer from "./reducers/deleteReducer";
import getAllPost from "./reducers/getAllPostReducer";
import getAuthenticateReducer from "./reducers/getAuthenticatePostReducer";
import likeReducer from "./reducers/likeReducer";
import postReducer from "./reducers/postReducer";

const RootReducer = combineReducers({
  getAllPost,
  postReducer,
  deleteReducer,
  commentReducer,
  likeReducer,
  getAuthenticateReducer,
});
export default RootReducer;
