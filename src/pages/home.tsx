import BaseLayout from "../ layouts/baseLayout";
import HomeContent from "../components/home-content";
import { Helmet } from "react-helmet";
import { getPageTitle } from "../utils/getPageTitle";
import { useContext } from "react";
import { Context } from "../context/context";
import { LangEnum } from "../constants/enums";

const PAGE_TITLE_EN = getPageTitle("About");
const PAGE_TITLE_RU = getPageTitle("Обо мне");

const Home = () => {
  const { lang } = useContext(Context);

  return (
    <BaseLayout>
      <Helmet>
        <title>
          {lang === LangEnum.EN && PAGE_TITLE_EN}
          {lang === LangEnum.RU && PAGE_TITLE_RU}
        </title>
      </Helmet>

      <HomeContent />
    </BaseLayout>
  );
};

export default Home;
