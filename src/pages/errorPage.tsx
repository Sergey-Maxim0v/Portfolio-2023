import { useRouteError } from "react-router-dom";
import BaseLayout from "../ layouts/baseLayout";
import HelmetPageTitle from "../components/helmetPageTitle";
import { getPageTitle } from "../utils/getPageTitle";

const PAGE_TITLE_EN = getPageTitle("Error");
const PAGE_TITLE_RU = getPageTitle("Ошибка");

const ErrorPage = () => {
  const error = useRouteError() as Error;

  return (
    <BaseLayout>
      <HelmetPageTitle titleEN={PAGE_TITLE_EN} tileRU={PAGE_TITLE_RU} />

      {/* TODO: Error page */}
      <p> Error page under construction</p>
      <br />
      <p>{error.name as string}</p>
      <p>{error.message as string}</p>
    </BaseLayout>
  );
};

export default ErrorPage;
