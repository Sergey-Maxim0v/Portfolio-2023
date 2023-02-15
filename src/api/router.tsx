import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/home";
import Contacts from "../pages/contacts";
import Projects from "../pages/projects";
import ErrorPage from "../pages/errorPage";
import {ROUTES} from "./routes";

const router = createBrowserRouter([
  {
    path: ROUTES.home.path,
    element: <Home/>,
    errorElement: <ErrorPage/>
  },
  {
    path: ROUTES.projects.path,
    element: <Projects/>
  },
  {
    path: ROUTES.contacts.path,
    element: <Contacts/>
  }
]);

export default router