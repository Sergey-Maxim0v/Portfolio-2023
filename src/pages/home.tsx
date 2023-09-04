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

  const getCurrentPageTitle = () => {
    switch (lang) {
      case LangEnum.EN:
        return PAGE_TITLE_EN;
      case LangEnum.RU:
        return PAGE_TITLE_RU;
      default:
        return "";
    }
  };

  return (
    <BaseLayout>
      <Helmet>
        <title>{getCurrentPageTitle()}</title>
      </Helmet>

      <HomeContent />
    </BaseLayout>
  );
};

export default Home;
