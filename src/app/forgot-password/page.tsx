"use client";

// Forgot Password Page using tailwindcss

import React, { useState } from "react";
import Link from "next/link";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-t from-black to-transparent">
      <div className="flex flex-col items-center justify-center w-11/12 md:w-full max-w-md px-4 py-8 bg-white shadow-lg rounded-lg">
        <div className="flex flex-col w-full mb-8">
          <h2 className="text-3xl font-bold text-center text-gray-700">
            Forgot Password
          </h2>
        </div>
        <div className="flex flex-col w-full">
          <div className="flex flex-col mb-5">
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
                type="text"
                id="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                className="text-sm sm:text-base relative w-full border rounded placeholder-gray-400 focus:border-orange-400 focus:outline-none py-2 pl-10"
              />
            </div>
          </div>
          <div className="flex flex-col mb-6">
            <button
              type="submit"
              className="bg-indigo-500 hover:bg-orange-500 text-white text-sm sm:text-base font-semibold py-2 rounded shadow hover:shadow-lg transition duration-300"
            >
              Send Email
            </button>
          </div>
          <div className="flex items-center justify-center mb-2">
            <Link
              href="/login"
              className="text-orange-500 hover:text-indigo-500 text-lg"
            >
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ForgotPasswordPage;
