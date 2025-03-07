import { useParams } from "react-router";
import { getOne } from "../../api/recipes";
import { statatusMessage } from "../../utils/statusMessage";
import { useMealQuery } from "../../hooks/useMealQuery";
import { Meal } from "../../types/Meal.type";

export const Recipe = () => {
  const { id } = useParams();

  const { data, error, isPending } = useMealQuery(["meal"], () => getOne(id));
  statatusMessage(isPending, error);

  const meal: Meal = data?.meals[0];
  const fields = meal ? Object.entries(meal) : [];

  const filteredFields = fields.filter(
    (item) => item[0] !== "idMeal" && item[1] !== null && item[1] !== ""
  );

  const ingridients = filteredFields.filter((item) =>
    item[0].includes("Ingredient")
  );

  const measure = filteredFields.filter((item) => item[0].includes("Measure"));



  return (
    <article>
      <h1>{meal?.strMeal}</h1>
      <img src={meal?.strMealThumb}></img>

      <p>Category: {meal?.strCategory}</p>
      <p>Area: {meal?.strArea}</p>
      <p>Instructions: {meal?.strInstructions}</p>
      <ul>
        Ingredients
        {ingridients.map((ing, i) => (
          <li key={ing[0]}>
            {ing[1]} --- {measure[i][1]}
          </li>
        ))}
      </ul>
      <video src={meal?.strYoutube} controls></video>
    </article>
  );
};
