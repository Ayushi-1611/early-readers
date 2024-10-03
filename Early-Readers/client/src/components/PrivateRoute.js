// src/components/PrivateRoute.js
import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ element: Component, ...rest }) => {
  const isAuthenticated = useSelector((state) => state.isAuthenticated); // Ensure state is correctly accessed
  console.log(isAuthenticated, "ISa");
  return (
    <Routes>
      <Route
        {...rest}
        element={
          isAuthenticated ? <Component /> : <Navigate to="/login" replace />
        }
      />
    </Routes>
  );
};

export default PrivateRoute;
