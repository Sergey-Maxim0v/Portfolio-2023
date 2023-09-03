import { ROUTES } from "../../api/routes";
import { NavLink, useLocation } from "react-router-dom";
import classNames from "classnames";
import { LangEnum } from "../../constants/enums";
import LanguageChanger from "../language-changer";
import ThemeSwitcher from "../theme-switcher";
import { useContext } from "react";
import { Context } from "../../context/context";
import styles from "./styles.module.scss";

const HeaderDesktopContent = () => {
  const location = useLocation();
  const { lang } = useContext(Context);

  return (
    <div className={styles.headerDesktop}>
      <nav className={styles.headerDesktop__list}>
        {Object.keys(ROUTES).map((key) => (
          <NavLink
            key={key}
            to={ROUTES[key].path}
            className={classNames(
              styles.headerDesktop__link,
              styles.headerLink,
              {
                [styles.headerLink__active]:
                  location.pathname === ROUTES[key].path ||
                  location.pathname === ROUTES[key].path + "/",
              },
            )}
          >
            {lang === LangEnum.RU && ROUTES[key].titleRu}
            {lang === LangEnum.EN && ROUTES[key].titleEn}
          </NavLink>
        ))}
      </nav>

      <div className={styles.headerDesktop__activities}>
        <LanguageChanger className={styles.headerDesktop__language} />
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default HeaderDesktopContent;
