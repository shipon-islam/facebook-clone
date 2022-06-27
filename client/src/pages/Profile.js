import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProfileCard from "../components/ProfileCard";
import ProfileInf from "../components/ProfileInf";
import StatusInput from "../components/StatusInput";

export default function Profile() {
  const [api, setapi] = useState([]);
  const loading = useSelector((state) => state.postReducer.loading);
  const Likeloading = useSelector((state) => state.likeReducer.loading);
  const commentloading = useSelector((state) => state.commentReducer.loading);
  const postDelete = useSelector((state) => state.deleteReducer.value);

  useEffect(() => {
    const ac = new AbortController();
    async function fetchData() {
      const res = await axios.get("api/post/getstatus");

      setapi(res.data);
    }
    fetchData();
    return () => ac.abort();
  }, [loading, Likeloading, commentloading, postDelete]);
  return (
    <div className="bg-gray-400/50 min-h-screen ">
      <div className="container-width ">
        <div className="flex justify-between flex-col md:flex-row">
          <div className="sm:mr-3 mt-1 sm:px-2 px-3 rounded-sm bg-white">
            <ProfileInf />
          </div>
          <div className="h-screen  w-full scroll-m-1 md:overflow-y-auto ">
            <StatusInput />
            {api &&
              api.map((posts) => <ProfileCard key={posts._id} posts={posts} />)}
          </div>
        </div>
      </div>
    </div>
  );
}
