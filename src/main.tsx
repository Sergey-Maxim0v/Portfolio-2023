import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./api/router";
import "./assets/styles/index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />,
);
