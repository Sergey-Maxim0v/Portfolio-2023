import { useRouteError } from "react-router-dom";
import BaseLayout from "../ layouts/baseLayout";

const ErrorPage = () => {
  const error = useRouteError();

  console.error(error);

  return <BaseLayout>Error page under construction</BaseLayout>;
};

export default ErrorPage;
