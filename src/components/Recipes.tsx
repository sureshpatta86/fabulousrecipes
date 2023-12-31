"use client";
import React, { useEffect, useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import Loading from "./UI/Loading";
import Searchbar from "./UI/SearchBar";
import RecipeCard from "./UI/RecipeCard";
import { fetchRecipes } from "../utils/FetchRecipes";
import Button from "./UI/Button";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const [limit, setLimit] = useState(30);
  const [loading, setLaoding] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const fetchRecipe = async () => {
    try {
      setLaoding(true);
      const data = await fetchRecipes({ query, limit });
      if (data.length > 0) {
        setRecipes(data);
      }
      setLaoding(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLaoding(false);
    }
  };

  const handleSearchedRecipe = async (e: any) => {
    e.preventDefault();
    fetchRecipe();
  };

  const showMore = () => {
    setLimit((prev) => prev + 10);
    fetchRecipe();
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-center pt-10 pb-5 px-0 md:px-10">
        <form className="w-full lg:w-2/4" onSubmit={handleSearchedRecipe}>
          <Searchbar
            placeholder="eg. Chicken, Cake, Pizza"
            handleInputChange={handleChange}
            rightIcon={
              <BiSearchAlt2
                className="text-gray-600"
                onClick={handleSearchedRecipe}
              />
            }
            value={query}
            name="query"
          />
        </form>
      </div>

      {recipes?.length > 0 ? (
        <>
          <div className="w-full  flex flex-wrap gap-10">
            {recipes?.map((item, index) => (
              <RecipeCard recipe={item} key={index} />
            ))}
          </div>

          <div className="flex w-full items-center justify-center py-10">
            <Button
              title="Show More"
              containerStyle="bg-indigo-800 text-white px-3 py-1 rounded-full text-sm"
              handleClick={showMore}
            />
          </div>
        </>
      ) : (
        <div className="text-slate-500 w-full items-center justify-center py-10">
          <p className="text-center">No Recipe Found</p>
        </div>
      )}
    </div>
  );
};

export default Recipes;
