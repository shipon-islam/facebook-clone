import React from "react";
export default function ProfileModal({ modalEle }) {
  return (
    <>
      <div className=" absolute sm:right-[-185px] md:right-[-190px] top-6 w-[180px] py-2 rounded-md grid place-items-center  bg-white ">
        <img
          className="w-16 rounded-full h-16"
          src={modalEle.profilePic}
          alt=""
        />
        <h1 className="font-bold font-monserrat capitalize text-lg">
          {modalEle.user.username}
        </h1>
        <p className="border-gray-500 font-bold font-lato capitalize">bio</p>
        <hr className="bg-gray-500  w-full" />

        <p className="text-center font-lato text-md ">
          {modalEle ? modalEle.bio : "He has no bio data"}
        </p>
        <p className="border-gray-500 font-bold font-lato capitalize">phone</p>
        <hr className="bg-gray-500  w-full" />
        <p className="font-oswald text-md  border-gray-300 text-gray-600">
          +88{modalEle.user.phone}
        </p>
      </div>
    </>
  );
}
