"use client";

//Login Page using tailwindcss

import React, { useState } from "react";
import Link from "next/link";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-t from-black to-transparent">
      <div className="flex flex-col items-center justify-center w-11/12 md:w-full max-w-md px-4 py-8 bg-white shadow-lg rounded-lg">
        <div className="flex flex-col w-full mb-8">
          <h2 className="text-3xl font-bold text-center text-gray-700">
            Login
          </h2>
        </div>
        <div className="flex flex-col w-full">
          <div className="flex flex-col mb-5">            
            <div className="relative">
              <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="username"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                className="text-sm sm:text-base relative w-full border rounded placeholder-gray-400 focus:border-orange-400 focus:outline-none py-2 pl-10"
              />
            </div>
          </div>
          <div className="flex flex-col mb-6">            
            <div className="relative">
              <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                <span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14.5v.5M12 9v2"
                    ></path>
                  </svg>
                </span>
              </div>
              <input
                type="password"
                id="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                className="text-sm sm:text-base relative w-full border rounded placeholder-gray-400 focus:border-orange-400 focus:outline-none py-2 pl-10"
              />
            </div>
          </div>
          <div className="flex items-center mb-6 -mt-4">
            <div className="flex ml-auto">
              <Link
                href="/forgot-password"
                className="inline-flex md:text-lg text-base text-orange-500 hover:text-indigo-500"
              >
                Forgot Your Password?
              </Link>
            </div>
          </div>
          <div className="flex w-full">
            <button
              type="submit"
              className="flex items-center justify-center focus:outline-none bg-indigo-500 text-white text-sm sm:text-base rounded py-2 w-full hover:bg-orange-500"
            >
              <span className="mr-2 uppercase">Login</span>
              <span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </span>
            </button>
          </div>          
          <div className="flex justify-center items-center mt-6">
            <h1 className="inline-flex items-center font-bold text-indigo-500 text-xs text-center">
              <span className="md:text-base text-sm">
              Don&apos;t have an account?
              </span>
            </h1>
            <Link href="/signup">
              <span className="ml-2 text-orange-500 text-lg md:text-xl underline hover:text-indigo-500">
                SignUp
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
