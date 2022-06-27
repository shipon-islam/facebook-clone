import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoutes({ children }) {
  const [auth] = useState(window.localStorage.getItem("user"));

  return auth ? <Outlet>{children}</Outlet> : <Navigate to="/login" />;
}
