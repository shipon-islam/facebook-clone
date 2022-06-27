import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { commentAction } from "../redux/actions/commentAction";
import { replayAction } from "../redux/actions/replayAction";
import ReplayLayout from "./ReplayLayout";

const CommentLayout = ({ commentData, id }) => {
  const [comment, setcomment] = useState("");
  const [replayValue, setReplayValue] = useState("");
  const dispatch = useDispatch();

  const handleComment = (id) => {
    dispatch(commentAction(id, comment));
    setcomment("");
  };
  const handleReplay_Post = (id) => {
    dispatch(replayAction(id, replayValue));
    setReplayValue("");
  };

  const handleReplay = (id) => {
    let ref = document.querySelectorAll(".replaymodal");

    ref.forEach((ele) => {
      if (id === ele.id) {
        console.log(ele.id);
        if (ele.classList.contains("hidden")) {
          ele.classList.remove("hidden");
        } else {
          ele.classList.add("hidden");
        }
      } else {
        ele.classList.add("hidden");
      }
    });
  };
  return (
    <div className="commentModal hidden" id={id}>
      <div className="pt-1 w-[95%] mx-auto pb-5 ">
        <div className="">
          <input
            className="bg-gray-300 focus:outline-none rounded-md text-lg py-2 pl-2 w-[80%]"
            type="text"
            placeholder="Write Comment.."
            onChange={(e) => setcomment(e.target.value)}
            value={comment}
          />
          <button
            className="bg-blue-500 text-gray-100 text-md py-[0.7rem] px-3 rounded-md ml-1 font-bold font-montserat uppercase"
            onClick={() => handleComment(id)}
          >
            ok
          </button>
        </div>
        {commentData.map((comment, index) => (
          <div key={comment._id} className="relative mt-4 py-2">
            <div className="flex ">
              <img
                className="w-12 h-12 rounded-full"
                src={comment.user.avatar}
                alt=""
              />
              <div className="w-[95%] bg-gray-500/20 mt-2 text-lg pl-2 py-1 rounded-md">
                <h1 className="font-bold text-md capitalize font-montserrat">
                  {comment.user.username}
                </h1>
                <p className="font-lato relative bottom-1">{comment.body}</p>
              </div>
            </div>
            <div className="flex justify-between">
              <p className="text-blue-500 font-sans font-semibold text-sm ml-11">
                {comment.replies.length}
                <span className="text-gray-700 "> replies in this comment</span>
              </p>
              <button
                className=" font-montserrat font-bold text-gray-800 cursor-pointer z-10"
                onClick={() => handleReplay(comment._id)}
              >
                replay
              </button>
            </div>

            <div id={comment._id} className="replaymodal hidden">
              {comment.replies.map((replay) => (
                <div key={replay._id}>
                  <ReplayLayout replies={replay} />
                </div>
              ))}
              <div className="mt-2">
                <input
                  className="bg-gray-300 focus:outline-none rounded-md text-md py-2 pl-2 w-[82%]"
                  type="text"
                  placeholder="Write replay.."
                  onChange={(e) => setReplayValue(e.target.value)}
                  value={replayValue}
                />
                <button
                  className="bg-blue-500 text-gray-100 text-md py-[0.5rem] px-3 rounded-md ml-1 font-bold font-montserat uppercase"
                  onClick={() => handleReplay_Post(comment._id)}
                >
                  ok
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CommentLayout;
