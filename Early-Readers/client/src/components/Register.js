import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { registerUser } from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../redux/slices/authSlice";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     if (password !== confirmPassword) {
  //       setError("Passwords do not match");
  //       return;
  //     }

  //     dispatch(registerUser({ username, email, password }))
  //       .unwrap()
  //       .then(() => {
  //         navigate("/dashboard"); // Redirect to dashboard on successful registration
  //       })
  //       .catch((err) => setError(err.msg || "Registration failed"));
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { username, email, password };

    try {
      // Check what is being sent
      console.log("Sending user data:", userData);

      // Dispatch the register action
      await dispatch(registerUser(userData))
        .unwrap()
        .then(() => {
          navigate("/dashboard"); // Redirect to dashboard on successful registration
        });
      // Optionally redirect or show success message
    } catch (err) {
      console.error("Registration failed:", err);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold mb-6">Register</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
