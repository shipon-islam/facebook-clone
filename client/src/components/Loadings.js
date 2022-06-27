import React from "react";
import loadingImage from "../assets/png/loading.png";

export default function Loadings() {
  return (
    <div className="bg-slate-200/100 min-h-screen fixed z-20 w-screen grid place-items-center">
      <div>
        <img className="w-40 h-40 animate-spin" src={loadingImage} alt="" />
      </div>
    </div>
  );
}
