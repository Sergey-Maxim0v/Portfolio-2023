import {createBrowserRouter} from "react-router-dom";
import Main from "../pages/main";
import Contacts from "../pages/contacts";
import Projects from "../pages/projects";
import ErrorPage from "../pages/errorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/projects",
    element: <Projects/>
  },
  {
    path: "/contacts",
    element: <Contacts/>
  }
]);

export default router