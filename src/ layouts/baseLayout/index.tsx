import {FC} from "react";
import Header from "../../components/header";
import {IBaseLayout} from "./types";
import classNames from "classnames";
import styles from "./styles.module.scss";
import {Context} from "../../context/context";
import useLanguage from "../../hooks/useLanguage";
import {LangEnum} from "../../constants/enums";

const BaseLayout: FC<IBaseLayout> = ({children}) => {
  const {actualLanguage, setActualLanguage} = useLanguage()

  const setLang = (value: LangEnum) => setActualLanguage(value)

  return (
      <Context.Provider value={{lang: actualLanguage as LangEnum, setLang}}>
        <Header/>
        <div className={classNames(styles.contentLayout, "container", "font__normal")}>
          {children}
        </div>
      </Context.Provider>
  )
}

export default BaseLayout