import "./App.css";
import "antd/dist/reset.css";
import { RouterProvider } from "react-router-dom";
import routerConfig from "./router";

function App() {
  return <RouterProvider router={routerConfig} />;
}

export default App;
