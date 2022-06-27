import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfileCard from "../components/ProfileCard";
import UserList from "../components/UserList";
import { getAllPostAction } from "../redux/actions/getALLPostAction";

export default function Videos() {
  const dispatch = useDispatch();
  const [textApi, setTextApi] = useState([]);
  const postApi = useSelector((state) => state.getAllPost);
  const loading = useSelector((state) => state.postReducer.loading);
  const Likeloading = useSelector((state) => state.likeReducer.loading);
  const commentloading = useSelector((state) => state.commentReducer.loading);
  const postDelete = useSelector((state) => state.deleteReducer.value);
  useEffect(() => {
    const ac = new AbortController();
    const newdata = postApi.values.filter((ele) => ele.category === "video");
    setTextApi(newdata);
    return () => ac.abort();
  }, [postApi]);

  useEffect(() => {
    const ac = new AbortController();
    dispatch(getAllPostAction());
    return () => ac.abort();
  }, [dispatch, loading, Likeloading, commentloading, postDelete]);

  return (
    <div className="bg-gray-400/50 min-h-screen">
      <div className="container-width ">
        <div className="flex justify-between">
          <div className="fixed">
            <div>
              <UserList />
            </div>
          </div>
          <div className="w-full"></div>
          <div>
            {textApi.map((singlePosts) => (
              <ProfileCard key={singlePosts._id} posts={singlePosts} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
