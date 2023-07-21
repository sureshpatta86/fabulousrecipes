"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/navigation";

import Logo from "../images/logo.jpg";

const Navbar = () => {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  return (
    <div className="w-full fixed z-10 bg-black opacity-90">
      <nav className="flex w-full py-2 md:py-3 px-4 md:px-20 items-center justify-between">
        <Link
          href="/"
          className="flex items-center justify-center text-white cursor-pointer"
        >
          <Image
            src={Logo}
            alt="Logo"
            className="hidden md:block w-6 h-6 md:w-12 md:h-12 mr-2"
          />
          <span
            className="text-normal font-semibold
            md:text-2xl md:font-bold"
          >
            Fabulous Recipes
          </span>
        </Link>
        <div
          className="flex space-x-4 text-xl font-semibold shadow-xl justify-end 
        md:text-2xl text-slate-300"
        >
          <Link href="/" className="  hidden md:block">
            Home
          </Link>
          <Link href="/recipes" className="  hidden md:block">
            Recipes
          </Link>
          <Link href="/favorites" className="  hidden md:block">
            Favorites
          </Link>
        </div>
        <button
          className=" hidden md:block
          text-slate-700 bg-slate-50 w-20 h-10 rounded-full text-xl font-bold
         hover:bg-slate-400 hover:text-slate-900"
          onClick={() => {
            router.push("/login");
          }}
        >
          Login
        </button>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? (
            <AiOutlineClose className="text-2xl text-white" />
          ) : (
            <HiMenuAlt3 className="text-2xl text-white" />
          )}
        </button>
      </nav>
      {open && (
        <div
          className="flex flex-col items-center justify-center
        bg-slate-800 text-slate-50 text-xl font-semibold"
        >
          <Link href="/" className="py-2">
            Home
          </Link>
          <Link href="/recipes" className="py-2">
            Recipes
          </Link>
          <Link href="/favorites" className="py-2">
            Favorites
          </Link>
          <button
            className="py-2"
            onClick={() => {
              router.push("/login");
            }}
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
