import {NavLink, useLocation} from "react-router-dom";
import styles from './styles.module.scss'
import classNames from "classnames";
import {ROUTES} from "../../api/routes";
import LanguageChanger from "../language-changer";
import {useContext} from "react";
import {Context} from "../../context/context";
import {LangEnum} from "../../constants/enums";
import ThemeSwitcher from "../theme-switcher";

const Header = () => {
  const location = useLocation();
  const {lang, isLoadedPage} = useContext(Context);

  return (
      <header className={
        classNames(styles.header, {[styles.transition]: isLoadedPage}, "container", "font__semibold")
      }>
        <nav className={styles.header__list}>
          {Object.keys(ROUTES).map(key => (
              <NavLink
                  key={key}
                  to={ROUTES[key].path}
                  className={classNames(
                      styles.header__link, styles.headerLink,
                      {
                        [styles.headerLink__active]:
                        location.pathname === ROUTES[key].path || location.pathname === ROUTES[key].path + '/'
                      }
                  )}
              >
                {lang === LangEnum.RU && ROUTES[key].titleRu}
                {lang === LangEnum.EN && ROUTES[key].titleEn}
              </NavLink>
          ))}
        </nav>

        <div className={styles.header__activities}>
          <LanguageChanger className={styles.header__language}/>
          <ThemeSwitcher/>
        </div>
      </header>
  )
}

export default Header