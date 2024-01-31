import { RouterProvider } from "react-router-dom";
import router from "./routes";

const App = () => {
  return (
    <div className="global-font">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
