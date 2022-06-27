import React from "react";
import { Link } from "react-router-dom";

export default function NavBand() {
  return (
    <div>
      <div>
        <Link
          className="text-2xl uppercase  text-gray-300 font-black font-raleway"
          to="/"
        >
          <span className="nav-band-btn">s</span>ocial{" "}
          <span className="nav-band-btn">c</span>lub
        </Link>
      </div>
    </div>
  );
}
