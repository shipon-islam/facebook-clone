import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { RWebShare } from "react-web-share";
import { likeAction } from "../redux/actions/likeAction";
import { icons } from "../svg-icons/icons";

export default function ProfileLikeSystem({ id, likes }) {
  const dispatch = useDispatch();
  const [user] = useState(JSON.parse(window.localStorage.getItem("user")));

  const handleClick = (id) => {
    let ref = document.querySelectorAll(".commentModal");

    ref.forEach((element) => {
      if (id === element.id) {
        if (element.classList.contains("hidden")) {
          element.classList.remove("hidden");
        } else {
          element.classList.add("hidden");
        }
      } else {
        element.classList.add("hidden");
      }
    });
  };

  return (
    <div className="flex justify-between  py-3">
      <button
        className={
          likes.includes(user.id)
            ? "text-lg capitalize font-bold font-lato text-blue-500"
            : "text-lg capitalize text-gray-700 font-bold font-lato"
        }
        onClick={() => dispatch(likeAction(id))}
      >
        <span className="inline-flex relative top-1">{icons.likeIcon}</span>
        <span>Like</span>
      </button>
      <button
        className="text-lg capitalize text-gray-700 font-bold font-lato"
        onClick={() => handleClick(id)}
      >
        <span className="inline-flex relative top-1 ">{icons.commentIcon}</span>
        <span>comment</span>
      </button>

      <RWebShare
        data={{
          text: "Like humans, flamingos make friends for life",
          url: "",
          title: "Flamingos",
        }}
        onClick={() => console.log("shared successfully!")}
      >
        <button className="text-lg capitalize text-gray-700 font-bold font-lato">
          <span className="inline-flex relative top-1">{icons.shareIcon}</span>
          <span>share</span>
        </button>
      </RWebShare>
    </div>
  );
}
