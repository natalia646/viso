import { Link } from "react-router";
import { PATH } from "../../constants/path";
import { useLocation } from "react-router";

export const Navigation = () => {
  const { pathname } = useLocation();



  return (
    <>
      {pathname === PATH.Favotites ? (
        <Link to={PATH.Recipes}>All meals</Link>
      ) : (
        <Link to={PATH.Favotites}>Favorites meals</Link>
      )}
    </>
  );
};
