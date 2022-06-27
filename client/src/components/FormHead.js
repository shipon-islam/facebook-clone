import React from "react";

export default function FormHead({ head, title }) {
  return (
    <div className="text-center">
      <h1 className="text-blue-500 uppercase text-xl font-bold  mt-12 mb-2 font-montserrat">
        {head}
      </h1>
      <p className="w-[70%] mx-auto capitalize font-lato text-gray-600">
        {title}
      </p>
    </div>
  );
}
