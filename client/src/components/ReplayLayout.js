import React from "react";

export default function ReplayLayout({ replies }) {
  const { body, user } = replies;
  return (
    <div className=" w-[70%] left-28 pb-4 mt-4 relative">
      <div className="flex ">
        <img className="w-10 h-10 rounded-full" src={user.avatar} alt="" />
        <div className="w-[95%] bg-gray-500/20 mt-2 text-lg pl-2 py-[0.1rem] rounded-md">
          <h1 className="font-bold text-[1rem] capitalize font-montserrat ">
            {user.username}
          </h1>
          <p className="font-lato relative bottom-1 text-[1rem]">{body}</p>
        </div>
      </div>
    </div>
  );
}
