import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <div className="w-full max-w-3xl mt-10 bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-semibold text-center mb-4">Dashboard</h1>
        <p className="text-lg text-center mb-6">
          Welcome to your personalized dashboard!
        </p>

        {/* You can display user-specific data here */}
        <div className="text-center mb-4">
          <p className="text-lg font-medium">Your Token:</p>
          <p className="text-sm text-gray-500 break-all">{token}</p>
        </div>

        <button
          onClick={handleLogout}
          className="w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition mt-6"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
