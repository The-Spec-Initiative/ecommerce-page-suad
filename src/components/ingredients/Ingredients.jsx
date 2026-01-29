import React from "react";
import Label from "../Common/Label";
import { ingredients } from "../../data/ingredientsData";

const Ingredients = () => {
  return (
    <div className="mt-14 flex flex-col items-center text-center gap-5">
      <Label>Ingredients</Label>

      <p className="text-3xl  lg:text-5xl">
        <span className="text-purple-300">Discover Our </span>Core Ingredients
      </p>

      <ul className="mt-10 w-full grid grid-cols-3 sm:grid-cols-5 gap-8 md:px-5 ">
        {ingredients.map((obj) => (
          <IngredientList obj={obj} key={obj.name} />
        ))}
      </ul>
    </div>
  );
};

function IngredientList({ obj }) {
  return (
    <li className="flex flex-col items-center">
      <div className="text-5xl bg-gray-100/60 border-0 rounded-full p-5 w-30 h-30 flex items-center justify-center">
        {obj.emoji}{" "}
      </div>
      <p className="text-xl">{obj.name} </p>
    </li>
  );
}

export default Ingredients;
