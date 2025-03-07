import { getCategories } from "../../api/recipes";
import { useMealQuery } from "../../hooks/useMealQuery";
import { statatusMessage } from "../../utils/statusMessage";

type Props = {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
};

export const Categories: React.FC<Props> = ({ category, setCategory }) => {
  const { data, error, isPending } = useMealQuery(
    ["categories"],
    getCategories
  );
  statatusMessage(isPending, error);

  return (
    <label>
      Select category
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">
          All
        </option>
        {data?.meals.map((category: { strCategory: string }) => (
          <option key={category.strCategory} value={category?.strCategory}>
            {category?.strCategory}
          </option>
        ))}
      </select>
    </label>
  );
};
