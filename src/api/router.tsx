import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/home";
import Contacts from "../pages/contacts";
import Projects from "../pages/projects";
import ErrorPage from "../pages/errorPage";
import {BASE_URL} from "./baseURL";

const router = createBrowserRouter([
  {
    path: BASE_URL,
    element: <Home/>,
    errorElement: <ErrorPage/>
  },
  {
    path: BASE_URL + "/projects",
    element: <Projects/>
  },
  {
    path: BASE_URL + "/contacts",
    element: <Contacts/>
  }
]);

export default router