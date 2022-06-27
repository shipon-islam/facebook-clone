import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NavBand from "./NavBand";
import Navigation from "./Navigation";

export default function Navbar() {
  const [data, setData] = useState({});
  const response = useSelector((state) => state.postReducer);
  useEffect(() => {
    const ac = new AbortController();
    const fetchdata = async () => {
      const res = await axios.get("api/profile");

      setData(...res.data);
    };
    fetchdata();
    return () => ac.abort();
  }, [response]);

  return (
    <>
      <div className="bg-blue-500 w-full fixed z-50">
        <nav className=" h-14 mx-auto flex justify-between items-center w-[90%] lg:w-[900px]">
          <NavBand />
          <Navigation avatar={data && data.profilePic} />
        </nav>
      </div>
      <div className="h-14 w-100vh"></div>
    </>
  );
}
