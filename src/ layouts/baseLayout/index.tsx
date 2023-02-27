import {FC} from "react";
import Header from "../../components/header";
import {IBaseLayout} from "./types";
import classNames from "classnames";
import styles from "./styles.module.scss";
import {Context} from "../../context/context";
import useLanguage from "../../hooks/useLanguage";
import useTheme from "../../hooks/useTheme";
import Background from "../../components/background";

const BaseLayout: FC<IBaseLayout> = ({children}) => {
  const {lang, setLang} = useLanguage()
  const {theme, setTheme} = useTheme()

  return (
      <Context.Provider value={{lang, setLang, theme, setTheme}}>
        <Header/>

        <div className={classNames(styles.contentLayout, "container", "font__normal")}>
          {children}
        </div>

        <Background/>
      </Context.Provider>
  )
}

export default BaseLayout