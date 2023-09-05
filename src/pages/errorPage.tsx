import { useRouteError } from "react-router-dom";
import BaseLayout from "../ layouts/baseLayout";
import HelmetPageTitle from "../components/helmet-page-title";
import { getPageTitle } from "../utils/getPageTitle";

import ErrorPageContent from "../components/error-page-content";

const PAGE_TITLE_EN = getPageTitle("Error");
const PAGE_TITLE_RU = getPageTitle("Ошибка");

const ErrorPage = () => {
  const error = useRouteError() as Error;

  return (
    <BaseLayout>
      <HelmetPageTitle titleEN={PAGE_TITLE_EN} tileRU={PAGE_TITLE_RU} />

      <ErrorPageContent error={error} />
    </BaseLayout>
  );
};

export default ErrorPage;
