"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

interface RecipeCardProps {
  recipe: any;  
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  console.log(recipe);
  const { image, label, cuisineType, dietLabel, mealType, uri } =
    recipe?.recipe;

  const id = uri?.split("#")[1];

  return (
    <Link
      href={`/recipes/${id}`}
      className="flex w-full md:w-1/5 md:ml-16 text-center"
    >
      <div className="bg-slate-500 shadow w-full rounded-lg">
        <Image
          src={image}
          alt={label}
          width={400}
          height={400}
          className="rounded-lg h-[200px]  p-2 lg:items-center lg:w-full "
        />

        <div className="p-3">
          <p className="text-black font-semibold">{label}</p>

          <div className="mt-2 ">
            <span
              className="px-2 py-1 text-semibold capitalize bg-slate-100 shadow-xl rounded-full mr-3 text-indigo-700
            "
            >
              {cuisineType}
            </span>
            <span className="px-2 py-1 text-semibold capitalize bg-slate-100 shadow-xl rounded-full text-indigo-700">
              {mealType}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
