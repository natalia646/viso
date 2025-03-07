import { BrowserRouter, Route, Routes } from "react-router";
import { PATH } from "./constants/path";
import { Recipes } from "./components/Recipes/Recipes";
import { Recipe } from "./components/Recipе/Recipe";
import { Favorites } from "./components/Favorites/Favorites";
import App from "./App";

export const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATH.Recipes} element={<App />}>
          <Route index element={<Recipes />} />
          <Route path=":id" element={<Recipe />} />
          <Route path={PATH.Favotites} element={<Favorites />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
