"use client";

import { signup } from "@/app/actions/user";
//import axios from "axios";
import React, { useState } from "react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleSignup = async () => {
  //   try {
  //     const res = await axios.post("http://localhost:3000/api/user", {
  //       email,
  //       password,
  //     });

  //     console.log("Signup successful:", res.data);
  //     alert("Signup successful!");
  //     setEmail("");
  //     setPassword("");
  //   } catch (err) {
  //     console.error("Signup error:", err.response?.data || err.message);
  //     alert("Signup failed: " + (err.response?.data?.message || "Server error"));
  //   }
  // };

  return (
    <div className="max-w-sm mx-auto mt-20 p-6 rounded-2xl shadow-lg bg-white">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Create Account</h2>

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
        className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
        className="w-full mb-6 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        onClick={
          async ()=>{
            const res = await signup(email,password);
            console.log(res)
          }
        }
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Sign Up
      </button>
    </div>
  );
}
