import { Outlet } from "react-router";
import { Navigation } from "./components/Navigation/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}

export default App;
