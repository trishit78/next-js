"use client"

import axios from 'axios';
import React, { useState } from 'react';




export default function Signup() {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

  return (
    <div className="max-w-sm mx-auto mt-20 p-6 rounded-2xl shadow-lg bg-white">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Create Account</h2>
      
      <input  onChange={(e)=>{setUsername(e.target.value)}}
        type="text"
        placeholder="Username"
        className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      
      <input    onChange={(e)=>{setPassword(e.target.value)}}
        type="password"
        placeholder="Password"
        className="w-full mb-6 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      
      <button  
            onClick={()=>{
                axios.post("http://localhost:3000/api/user",{username,password})
            }}
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Sign Up
      </button>
    </div>
  );
}
