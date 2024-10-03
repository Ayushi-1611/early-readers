import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/PrivateRoute"; // Make sure this uses Routes

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} /> {/* Use element prop */}
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard/*"
          element={<PrivateRoute component={Dashboard} />}
        />{" "}
        {/* Protect this route */}
        <Route path="profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
