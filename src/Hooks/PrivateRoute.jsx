import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../Context/Index";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { isAuth } = useAuthContext();

  return isAuth ? (
    children
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export { PrivateRoute };
