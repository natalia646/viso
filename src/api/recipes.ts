const baseUrl = "https://www.themealdb.com/api/json/v1/1";

export const getAll = () => {
  return fetch(`${baseUrl}/search.php?f=c`).then((data) => data.json());
};

export const getOne = (id?: string) => {
  return fetch(`${baseUrl}/lookup.php?i=${id}`).then((data) => data.json());
};

export const getCategories = () => {
  return fetch(`${baseUrl}/list.php?c=list`).then((data) => data.json());
};

export const getByCategories = (category: string) => {
  return fetch(`${baseUrl}/filter.php?c=${category}`).then((data) =>
    data.json()
  );
};
