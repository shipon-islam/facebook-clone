import React from "react";
import { Link } from "react-router-dom";

export default function FormButton({ ButtonName, navigate, NavigateTitle }) {
  return (
    <div className="form-control">
      <button
        className="border-2 text-blue-500 py-1 rounded-md text-lg border-blue-500 w-[283px] font-raleway uppercase font-bold hover:bg-blue-500 hover:text-gray-200"
        type="submit"
      >
        {ButtonName}
      </button>
      <p className="text-center capitalize font-fenix text-gray-600 mt-2 ">
        {NavigateTitle}
        <Link className="text-red-500 capitalize font-bold" to={`/${navigate}`}>
          {navigate}
        </Link>
      </p>
    </div>
  );
}
