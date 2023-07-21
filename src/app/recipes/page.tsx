"use client";
import Recipes from "@/components/Recipes";
const RecipesPage = () => {
  return (
    <div
      className="flex flex-col items-center pt-16 md:pt-24 min-h-screen w-full
    bg-gradient-to-t from-black to-transparent"
    >
      <div
        className="flex flex-col items-center justify-center w-11/12
      p-4 bg-slate-100 shadow-lg rounded-lg"
      >
        <div className="flex flex-col w-full mb-8">         
          <Recipes />
        </div>
      </div>
    </div>
  );
};
export default RecipesPage;
