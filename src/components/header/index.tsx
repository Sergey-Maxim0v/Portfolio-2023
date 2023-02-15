import {NavLink, useLocation} from "react-router-dom";
import styles from './styles.module.scss'
import classNames from "classnames";
import {ROUTES} from "../../api/routes";


const Header = () => {
  const location = useLocation()

  return (
      <header className={styles.header}>
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
      </header>
  )
}

export default Header