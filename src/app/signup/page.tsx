"use client";

import React, { useState } from "react";
import Link from "next/link";

const SignupPage = () => {
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
  });
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-t from-black to-transparent">
      <div className="flex flex-col items-center justify-center w-11/12 md:w-full max-w-md px-4 py-8 bg-white shadow-lg rounded-lg">
        <div className="flex flex-col w-full mb-8">
          <h2 className="text-3xl font-bold text-center text-gray-700">
            Sign Up
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
                onChange={(e) =>
                  setUserDetails({ ...userDetails, username: e.target.value })
                }
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
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </span>
              </div>
              <input
                type="email"
                id="email"
                placeholder="Email"
                onChange={(e) =>
                  setUserDetails({ ...userDetails, email: e.target.value })
                }
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
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </span>
              </div>
              <input
                type="password"
                id="password"
                placeholder="Password"
                onChange={(e) =>
                  setUserDetails({ ...userDetails, password: e.target.value })
                }
                className="text-sm sm:text-base relative w-full border rounded placeholder-gray-400 focus:border-orange-400 focus:outline-none py-2 pl-10"
              />
            </div>
          </div>
          <div className="flex flex-col mb-6">
            <button
              type="submit"
              className="flex items-center justify-center focus:outline-none bg-indigo-500 text-white text-sm sm:text-base rounded py-2 w-full hover:bg-orange-500"
            >
              Sign Up
            </button>
          </div>
          <div className="flex justify-center items-center mt-6">
            <h1 className="inline-flex items-center font-bold text-indigo-500  text-xs text-center">
              <span className="md:text-base text-sm">
                Already having an account?
              </span>
            </h1>
            <Link href="/login">
              <span className="ml-2 text-orange-500 text-lg md:text-xl underline hover:text-indigo-500">
                Login
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
