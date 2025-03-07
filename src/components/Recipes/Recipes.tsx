import { getAll } from "../../api/recipes";
import { Meal } from "../../types/Meal.type";
import { Link } from "react-router";
import { useMealQuery } from "../../hooks/useMealQuery";
import { statatusMessage } from "../../utils/statusMessage";
import { Categories } from "../Categories/Categories";
import style from "./Recipes.module.scss";
import { useState } from "react";

export const Recipes = () => {
  const [category, setCategory] = useState("");

  const { data, error, isPending } = useMealQuery(["meals"], getAll);
  statatusMessage(isPending, error);

  const meals: Meal[] =  data?.meals ;

  const filteredMeals =
    category === ""
      ? meals
      : meals?.filter((meal) => meal.strCategory === category);

  return (
    <main>
      <Categories category={category} setCategory={setCategory} />
      <ul className={style.meals}>
        {filteredMeals?.map((meal: Meal) => (
          <li className={style.meal} key={meal.idMeal}>
            <Link to={meal.strSource} target="_blank">
              <img className={style.image} src={meal.strMealThumb} alt="meal" />
            </Link>
            <Link to={`/${meal.idMeal}`}>{meal.strMeal}</Link>
            {meal.strCategory}
          </li>
        ))}
      </ul>
    </main>
  );
};
