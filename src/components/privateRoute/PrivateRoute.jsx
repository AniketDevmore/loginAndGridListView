import React from "react";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const email = localStorage.getItem("email");
  return email ? children : <Navigate to={"/"} />;
};
