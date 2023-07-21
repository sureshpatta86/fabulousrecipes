"use client";
import React, { useState, useEffect, use } from "react";
import Image from "next/image";
import {
  Banner1,
  Banner2,
  Banner3,
  Banner4,
  Banner5,
  Banner6,
} from "../images/images";

const images = [Banner1, Banner2, Banner3, Banner4, Banner5, Banner6];

type homeTypes = {
  title: any;
  type: string;
};

const Home = ({ title, type }: homeTypes) => {
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage) =>
        currentImage === images.length - 1 ? 0 : currentImage + 1
      );
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[100vh]">
      <div className="relative w-full h-full">
        <Image
          src={images[currentImage]}
          alt="Hero Image"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute w-full h-full bg-gradient-to-t from-black to-transparent top-0 z-8 flex flex-col items-center justify-center pt-40 2xl:pt-20 px-4 ">
        <h1 className="text-white text-4xl md:text-5xl font-bold text-center">
          {title}
        </h1>
        {type && (
          <p className="text-sm md:text-lg mt-4 text-center text-cyan-500 bg-[#00000090] px-6 py-4 rounded-3xl">
            Welcome to FabulousRecipes, <br className="md:hidden" />
            Your Culinary Adventure Begins Here!
            <br className="md:block" /> Fabulous Recipes is your one-stop
            destination for all things culinary! Whether you are a seasoned chef
            or a passionate home cook, we have something extraordinary in store
            for you.
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;
