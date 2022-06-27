import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAction } from "../redux/actions/postAction";
import { icons } from "../svg-icons/icons";

export default function StatusInput() {
  const fileRef = useRef(null);
  const dispatch = useDispatch();
  const [avatar, setAvatar] = useState("");
  const [post, setPost] = useState("");
  const loading = useSelector((state) => state.postReducer.loading);
  const handleSubmit = async () => {
    await dispatch(postAction(avatar, post, "text"));
    setPost("");
  };

  const openFile = () => {
    console.dir(fileRef.current);
    fileRef.current.click();
  };

  return (
    <div className="mt-2">
      <div>
        <input
          className="w-full text-xl focus:outline-none py-4 pl-2 font-lato shadow-sm shadow-black placeholder:capitalize 
          rounded-md placeholder:font-montserrat"
          type="text"
          value={post}
          placeholder="write status..."
          onChange={(e) => setPost(e.target.value)}
        />
        <div className="flex justify-between items-center mt-1">
          <div className="flex">
            <input
              className="hidden"
              ref={fileRef}
              type="file"
              onChange={(e) => setAvatar(e.target.files[0])}
            />
            <button onClick={openFile}>{icons.camera}</button>
            <p className="font-bold font-montserrat uppercase mt-1 text-lg">
              photo
            </p>
            <p className="text-md mt-1 ml-1 font-lato font-bold">
              {avatar.name}
            </p>
          </div>
          <button
            className="bg-blue-500 px-4 text-lg sm:text-[1rem] hover:border-blue-500 border font-bold font-lato uppercase rounded-md text-gray-200 hover:bg-gray-200 hover:text-blue-500"
            onClick={handleSubmit}
          >
            post
          </button>
        </div>
        {loading && (
          <div className="bg-white my-1 rounded-3xl">
            <div className="animate-waving-hand  sm:h-4 h-3 rounded-3xl  bg-blue-500"></div>
          </div>
        )}
      </div>
    </div>
  );
}
