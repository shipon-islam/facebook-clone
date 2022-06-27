import React from "react";
import CommentLayout from "./CommentLayout";
import ProfileHeader from "./ProfileHeader";
import ProfileLikeSystem from "./ProfileLikeSystem";

export default function ProfileCard({ posts }) {
  const { _id, avatar, likes, comments, user, post, category, createdAt } =
    posts;

  return (
    <div>
      <div className="bg-white w-[360px] px-3 my-2 sm:w-[365px] md:w-[450px] mx-auto rounded-md">
        <ProfileHeader user={user} date={createdAt} _id={_id} />
        <div className="w-full">
          <div
            className={
              avatar
                ? `text-xl font-montserrat`
                : `text-2xl w-[80%] pb-10 font-lato`
            }
          >
            {post && post}
          </div>

          {category === "text" && (
            <img
              className="md:max-h-[350px] sm:max-h-[300px] max-h-[350px] object-cover mx-auto"
              src={avatar}
              alt=""
            />
          )}
          {category === "video" && (
            <video width="750" height="800" controls>
              <source src={avatar} type="video/mp4" />
            </video>
          )}
        </div>

        <div className="flex justify-between">
          {<p>Likes({likes.length})</p>}
          {<p>Comments({comments.length})</p>}
        </div>
        <hr />

        <ProfileLikeSystem likes={likes} id={_id} />

        <CommentLayout id={_id} commentData={comments} />
      </div>
    </div>
  );
}
