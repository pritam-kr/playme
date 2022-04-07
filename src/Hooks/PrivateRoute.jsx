import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../Context/Index";

const PrivateRoute = ({ children }) => {
  const { isAuth } = useAuthContext();
  return isAuth ? children : <Navigate to="/login" replace />;
};

export { PrivateRoute };
