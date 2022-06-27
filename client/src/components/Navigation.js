import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { icons } from "../svg-icons/icons";

export default function Navigation({ avatar }) {
  const [user, setUser] = useState({});
  useEffect(() => {
    setUser(localStorage.getItem("user"));
  }, [user]);

  return (
    <div>
      {/* <NavLink className="text-gray-400 sm:hidden hover:text-gray-300 " to="/">
        {icons.menu}
      </NavLink> */}
      <div className="flex">
        {user ? (
          <>
            <NavLink
              className="text-gray-400 hover:text-gray-300 "
              style={({ isActive }) => (isActive ? { color: "white" } : {})}
              to="/"
            >
              <span className="sm:hidden">{icons.home}</span>
              <span className="navigate-btn">home</span>
            </NavLink>
            <NavLink
              className="text-gray-400  hover:text-gray-300 sm:mx-8 mx-4 "
              to="/videos"
              style={({ isActive }) => (isActive ? { color: "white" } : {})}
            >
              <span className="sm:hidden">{icons.video}</span>
              <span className="navigate-btn">videos</span>
            </NavLink>
            <NavLink
              className="text-gray-400  hover:text-gray-300 "
              to="/profile"
              style={({ isActive }) => (isActive ? { color: "white" } : {})}
            >
              {user ? (
                <span className="sm:hidden">
                  <img
                    className="w-8 h-8 rounded-full border-2 border-white"
                    src={avatar}
                    alt="me"
                  />
                </span>
              ) : (
                <span className="sm:hidden">{icons.menu}</span>
              )}
              <span className="navigate-btn">profile</span>
            </NavLink>
          </>
        ) : (
          <>
            <NavLink
              className="text-gray-400 hover:text-gray-300 "
              style={({ isActive }) => (isActive ? { color: "white" } : {})}
              to="/login"
            >
              <span className="navigate-btn">login</span>
            </NavLink>
            <NavLink
              className="text-gray-400  hover:text-gray-300 sm:mx-8 mx-4 "
              to="/signup"
              style={({ isActive }) => (isActive ? { color: "white" } : {})}
            >
              <span className="navigate-btn">signup</span>
            </NavLink>
            <NavLink
              className="text-gray-400  hover:text-gray-300 "
              to="/profile"
              style={({ isActive }) => (isActive ? { color: "white" } : {})}
            >
              <span className="sm:hidden">{icons.menu}</span>
              <span className="navigate-btn hidden">profile</span>
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
}
