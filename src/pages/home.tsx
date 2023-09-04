import BaseLayout from "../ layouts/baseLayout";
import HomeContent from "../components/home-content";
import { getPageTitle } from "../utils/getPageTitle";

import HelmetPageTitle from "../components/helmetPageTitle";

const PAGE_TITLE_EN = getPageTitle("About");
const PAGE_TITLE_RU = getPageTitle("Обо мне");

const Home = () => {
  return (
    <BaseLayout>
      <HelmetPageTitle titleEN={PAGE_TITLE_EN} tileRU={PAGE_TITLE_RU} />

      <HomeContent />
    </BaseLayout>
  );
};

export default Home;
