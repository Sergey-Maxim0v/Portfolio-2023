import styles from './styles.module.scss'
import classNames from "classnames";
import {useContext} from "react";
import {Context} from "../../context/context";
import useMedia from "../../hooks/useMedia";
import HeaderDesktopContent from "../header-desktop-content";

const Header = () => {
  const {isLoadedPage} = useContext(Context);
  const {isMobile, isDesktop, isTablet} = useMedia();

  return (
      <header className={
        classNames(styles.header, {[styles.transition]: isLoadedPage}, "container", "font__semibold")
      }>
        {isDesktop && <HeaderDesktopContent/>}
        {isTablet && <HeaderDesktopContent/>}
        {isMobile && <HeaderDesktopContent/>}
      </header>
  )
}

export default Header