import { FC, useContext } from "react";
import { IHelmetPageTitle } from "./types";
import { Context } from "../../context/context";
import { LangEnum } from "../../constants/enums";
import { Helmet } from "react-helmet";

const HelmetPageTitle: FC<IHelmetPageTitle> = ({ tileRU, titleEN }) => {
  const { lang } = useContext(Context);

  const getCurrentPageTitle = () => {
    switch (lang) {
      case LangEnum.EN:
        return titleEN;
      case LangEnum.RU:
        return tileRU;
      default:
        return "";
    }
  };
  return (
    <Helmet>
      <title>{getCurrentPageTitle()}</title>
    </Helmet>
  );
};

export default HelmetPageTitle;
