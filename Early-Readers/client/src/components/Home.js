// src/components/Home.js
import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center">
      <h1 className="text-5xl font-bold mb-4">Learn to Read</h1>
      <p className="text-xl mb-6">
        Unlock the world of reading with fun and engaging methods!
      </p>
      <div className="flex space-x-4">
        <a
          href="/login"
          className="bg-white text-blue-500 px-4 py-2 rounded shadow hover:bg-gray-200"
        >
          Login
        </a>
        <a
          href="/register"
          className="bg-white text-blue-500 px-4 py-2 rounded shadow hover:bg-gray-200"
        >
          Register
        </a>
      </div>
    </div>
  );
};

export default Home;
