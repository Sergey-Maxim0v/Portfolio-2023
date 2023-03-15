import {FC, RefObject, useEffect, useRef, useState} from "react";
import Header from "../../components/header";
import {IBaseLayout} from "./types";
import classNames from "classnames";
import styles from "./styles.module.scss";
import {Context, IContext} from "../../context/context";
import useLanguage from "../../hooks/useLanguage";
import useTheme from "../../hooks/useTheme";
import Background from "../../components/background";
import Modal from "../../components/modal";

const BaseLayout: FC<IBaseLayout> = ({children}) => {
  const {lang, setLang} = useLanguage()
  const {theme, setTheme} = useTheme()

  const [isLoadedPage, setIsLoadedPage] = useState(false)
  const [isOpenModal, setIsOpenModal] = useState(false)

  const scrollRef: RefObject<HTMLDivElement> = useRef(null)

  const contextValue: IContext = {
    lang, setLang, theme, setTheme, isLoadedPage, scrollRef, isOpenModal, setIsOpenModal
  }

  useEffect(() => {
    window.addEventListener('load', () => setIsLoadedPage(true))
    return window.removeEventListener('load', () => setIsLoadedPage(true))
  }, [])

  return (
      <Context.Provider value={contextValue}>
        <Header/>

        <div
            ref={scrollRef}
            className={classNames(
                styles.contentLayout,
                {[styles.transition]: isLoadedPage},
                "container",
                "font__normal",
                "scroll"
            )}
        >
          {children}
        </div>

        <Background/>
        <Modal/>
      </Context.Provider>
  )
}

export default BaseLayout