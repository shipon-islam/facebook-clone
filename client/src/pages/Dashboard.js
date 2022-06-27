import axios from "axios";
import React, { useState } from "react";

export default function Dashboard() {
  const [video, setvideo] = useState("");
  const [post, setPost] = useState("");

  const handleClick = async () => {
    const res = await axios.post("api/post/status", {
      post,
      avatar: video,
      category: "video",
    });
    if (res) {
      setvideo("");
      setPost("");
      alert("uploaded");
    }
  };
  return (
    <div>
      <input
        type="text"
        value={post}
        onChange={(e) => setPost(e.target.value)}
        className="border-2 border-black w-3/5 h-20"
        placeholder="post"
      />
      <input
        type="text"
        value={video}
        className="border-2 border-black w-3/5 h-20"
        onChange={(e) => setvideo(e.target.value)}
        placeholder="youtube video"
      />
      <button className="bg-blue-500 py-1 px-4" onClick={handleClick}>
        send
      </button>
    </div>
  );
}
