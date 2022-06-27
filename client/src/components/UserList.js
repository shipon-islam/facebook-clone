import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import ProfileModal from "./ProfileModal";

export default function UserList({ ele }) {
  let modalRef = useRef([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const ac = new AbortController();
    const fetchData = async () => {
      const ress = await axios.get("api/profile/all");
      setUser(ress.data);
    };

    fetchData();
    return () => ac.abort();
  }, []);

  const handleModal = (id) => {
    modalRef.current.forEach((curEle) => {
      curEle.classList.add("hidden");
      if (id === curEle.id) {
        curEle.classList.remove("hidden");
      }
    });
  };

  return (
    <div className="">
      {user &&
        user.map((element, index) => (
          <div
            onClick={() => handleModal(element.user._id)}
            key={element._id}
            className=" relative hidden sm:flex "
          >
            <div className="bg-white cursor-pointer  rounded-md py-1 sm:px-1 md:px-2 mt-2  md:w-[200px] sm:w-[180px]  sm:flex items-center">
              <img
                className="md:w-10 md:h-10 sm:w-8 sm:h-8 rounded-full "
                src={element.profilePic}
                alt=""
              />
              <h1 className="capitalize font-montserrat font-bold ml-1 sm:text-md md:text-xl">
                {element.user.username}
              </h1>
            </div>

            <div>
              <div
                id={element.user._id}
                ref={(elel) => (modalRef.current[index] = elel)}
                className="hidden z-10 top-0 absolute mod"
              >
                <ProfileModal modalEle={element} />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
