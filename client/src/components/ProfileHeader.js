import axios from "axios";
import moment from "moment";
import React from "react";
import { useDispatch } from "react-redux";

export default function ProfileHeader({ user, _id, date }) {
  const dispatch = useDispatch();
  const handleClick = async (id) => {
    // -method:delete url:"api/post/delete/:id"
    const isDelete = window.confirm("Do you want delete this post");

    if (isDelete) {
      try {
        console.log("first");
        dispatch({ type: "POST_DELETE_FAILED" });
        const res = await axios.delete(`api/post/delete/${id}`);
        console.log(res);
        dispatch({ type: "POST_DELETE_SUCCESS", payload: res.data });
      } catch (error) {
        console.log(error);
        alert("You can't delete other post");
      }
    }
  };

  return (
    <div>
      <div className="flex justify-between py-3">
        <div className="flex">
          <div>
            <img className="w-12 h-12 rounded-full" src={user.avatar} alt="" />
          </div>
          <div>
            <h3 className="sm:text-xl text-lg capitalize font-bold font-montserrat">
              {user.username}
            </h3>
            <p>
              {moment(
                moment(date).format("ddd MMM DD YYYY HH:mm:ss GMT Z"),
                "ddd MMM DD YYYY HH:mm:ss GMT Z"
              ).fromNow()}
            </p>
          </div>
        </div>
        <div
          className="text-2xl cursor-pointer"
          onClick={() => handleClick(_id)}
        >
          x
        </div>
      </div>
    </div>
  );
}
