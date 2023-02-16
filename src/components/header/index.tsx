import {NavLink, useLocation} from "react-router-dom";
import styles from './styles.module.scss'
import classNames from "classnames";
import {ROUTES} from "../../api/routes";


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
          <div className={classNames(styles.header__popup, styles.headerPopup__container)}>
            <div className={styles.headerPopup__button}>
              <span>RU</span>
            </div>
            <div className={styles.headerPopup__content}>
              <button>Русский</button>
              <button>English</button>
            </div>
          </div>

          <div className={classNames(styles.header__popup, styles.headerPopup__container)}>
            <div className={styles.headerPopup__button}>
              <span>Light</span>
            </div>
            <div className={styles.headerPopup__content}>
              <button>Light</button>
              <button>Dark</button>
            </div>
          </div>
        </div>
      </header>
  )
}

export default Header