import {NavLink, useLocation} from "react-router-dom";
import styles from './styles.module.scss'
import classNames from "classnames";
import {ROUTES} from "../../api/routes";
import LanguageChanger from "../language-changer";


const Header = () => {
  const location = useLocation();

  return (
      <header className={classNames(styles.header, "container", "font__semibold")}>
        <nav className={styles.header__list}>
          {Object.keys(ROUTES).map(key => (
              <NavLink
                  key={key}
                  to={ROUTES[key].path}
                  className={classNames(
                      styles.header__link,
                      {[styles.headerLink__active]: location.pathname === ROUTES[key].path}
                  )}
              >
                {ROUTES[key].titleRu}
              </NavLink>
          ))}
        </nav>

        <div className={styles.header__activities}>
          <LanguageChanger className={styles.header__language}/>
          <div>Theme-changer</div>
        </div>
      </header>
  )
}

export default Header