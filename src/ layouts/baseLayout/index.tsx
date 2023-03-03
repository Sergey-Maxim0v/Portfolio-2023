import {FC, useEffect, useState} from "react";
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

  const [isLoadedPage, setIsLoadedPage] = useState(false)

  useEffect(() => {
    window.addEventListener('load', () => setIsLoadedPage(true))
    return window.removeEventListener('load', () => setIsLoadedPage(true))
  }, [])

  return (
      <Context.Provider value={{lang, setLang, theme, setTheme, isLoadedPage}}>
        <Header/>

        <div
            className={classNames(
                styles.contentLayout,
                {[styles.transition]: isLoadedPage},
                "container",
                "font__normal",
                "scroll"
            )}
            data-content-layout={true}
        >
          {children}
        </div>

        <Background/>
      </Context.Provider>
  )
}

export default BaseLayout