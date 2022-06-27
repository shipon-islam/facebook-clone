import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bioUpload } from "../redux/actions/bioUplaodAction";
import { profilePicUpload } from "../redux/actions/profilePicAction";
import { icons } from "../svg-icons/icons";
export default function ProfileInf() {
  const profileRef = useRef(null);
  const coverRef = useRef(null);
  const [bio, setBio] = useState("");
  const [toggleBio, setToggleBio] = useState(false);
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const response = useSelector((state) => state.postReducer);

  const navigate = useNavigate();
  useEffect(() => {
    const fetchdata = async () => {
      const res = await axios.get("api/profile");

      setData(...res.data);
    };
    fetchdata();
  }, [response]);

  const profileHandleChange = (e) => {
    dispatch(
      profilePicUpload(
        "api/profile",
        "upload_profile",
        "profilepic",
        e.target.files[0]
      )
    );
  };
  const coverHandleChange = (e) => {
    dispatch(
      profilePicUpload(
        "api/profile",
        "upload_image",
        "coverpic",
        e.target.files[0]
      )
    );
  };

  const handleBio = () => {
    setToggleBio(!toggleBio);
    dispatch(bioUpload(bio));
  };

  const inputFileClick = (selectRef) => {
    selectRef.current.click();
  };
  const handleLogout = async () => {
    const isLogout = window.confirm("Do you want delete this post");
    if (isLogout) {
      const res = await axios.delete("api/user/logout");
      if (res) {
        window.localStorage.removeItem("user");
        navigate("/login");
      }
    }
  };

  return (
    <div>
      {response.loading && (
        <div className="bg-white my-1 rounded-3xl">
          <div className="animate-waving-hand  sm:h-4 h-3 rounded-3xl  bg-blue-500"></div>
        </div>
      )}
      <div className="relative">
        <img className="h-[200px] w-[851px]" src={data.coverPic} alt="fds" />
        <button
          className="shadow-black text-white shadow-sm bg-gray-400 absolute rounded-full p-1 top-0 right-0  text-[200px]"
          onClick={() => inputFileClick(coverRef)}
        >
          {icons.camera}
        </button>
        <input
          className="hidden"
          ref={coverRef}
          type="file"
          onChange={coverHandleChange}
        />
        <div className="relative">
          <img
            className="sm:w-[170px] sm:h-[170px] w-[180px] h-[180px] rounded-full mt-[-70px] mx-auto border-4 border-white"
            src={data.profilePic}
            alt=""
          />
          <input
            ref={profileRef}
            className="hidden"
            type="file"
            onChange={profileHandleChange}
          />
          <button
            className="absolute  top-10 right-[70px] sm:right-[116px] rounded-full p-1 shadow-sm shadow-black text-white bg-gray-400  text-[200px]"
            onClick={() => inputFileClick(profileRef)}
          >
            {icons.camera}
          </button>
        </div>
      </div>
      <div>
        <h1 className="font-bold font-montserrat text-2xl capitalize text-center py-2">
          {data.user && data.user.username}
        </h1>
      </div>
      <div className="relative">
        <h3 className="text-center font-black capitalize text-xl py-1 ">bio</h3>
        <div className="">
          <p
            onDoubleClick={() => {
              setToggleBio(!toggleBio);
              setBio(data.bio);
            }}
            className="cursor-pointer capitalize text-center sm:w-[80%] mx-auto font-bold text-gray-700 font-lato text-lg w-[90%] hover:border-2 border-slate-500 py-1 rounded-md"
          >
            {data.bio ? data.bio : "write your personal information"}
          </p>
        </div>
        {toggleBio && (
          <div className="w-[290px] inset-0 mx-auto absolute  ">
            <input
              className="border-2 border-blue-500 text-lg w-full rounded-md pl-2 pb-16 focus:outline-none"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="write your bio data..."
            />
            <button
              className="bg-blue-500 uppercase font-bold text-white font-montserrat py-1 w-full my-2 rounded-md"
              onClick={handleBio}
            >
              save
            </button>
          </div>
        )}
      </div>
      <div className="flex flex-col items-center my-3">
        <div className="flex ">
          <span className="font-bold">{icons.emailIcon}</span>
          <span className="text-xl capitalize sm:mt-[-2px] font-bold">
            email
          </span>
        </div>
        <p className="font-bold  text-gray-700 font-lato text-lg">
          {data.user && data.user.email}
        </p>
      </div>
      <div className="flex flex-col items-center mx-4">
        <div className="flex ">
          <span className="font-bold">{icons.phoneIcon}</span>
          <span className="text-xl capitalize sm:mt-[-2px] font-bold">
            phone
          </span>
        </div>
        <p className="font-bold text-gray-700 font-lato">
          +88{data.user && data.user.phone}
        </p>
      </div>
      <div className="pb-8 pt-5 ">
        <button
          className="hover:bg-blue-400  bg-blue-600 text-gray-200  font-bold py-2 text-lg rounded-md uppercase font-montserrat  w-[80%]  mx-auto block"
          onClick={handleLogout}
        >
          logout
        </button>
      </div>
      <div className="text-gray-500 text-lg sm:text-xl capitalize   font-bold font-montserrat sm:mt-10 text-center">
        developed by shipon islam
      </div>
    </div>
  );
}
