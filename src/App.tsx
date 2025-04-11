import { Outlet } from "react-router-dom";
import NavBar from "./component/NavBar"

const App = () => {
  return (
    <div>
      <NavBar/>
      {/* pages're displayed here */}
      <Outlet />
    </div>
  );
};

export default App