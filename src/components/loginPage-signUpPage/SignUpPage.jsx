import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login-SignUp.css";

const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    // Logic for signup
    navigate("/home");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSignUp}
        className="bg-white p-10 rounded-lg shadow-lg w-96"
      >
        <h2 className="text-3xl font-semibold text-center text-blue-500 mb-6">
          Instagram
        </h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600"
        >
          Sign Up
        </button>

        <div className="text-center mt-4 text-sm text-gray-500">
          <p>Already have an account? <a href="/login" className="text-blue-500 font-semibold">Log in</a></p>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
