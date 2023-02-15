import styles from './styles.module.scss'
import {BASE_URL} from "../../api/baseURL";
import {NavLink} from "react-router-dom";

const Header = () => {
  return (
      <header className={styles.header}>
        <ul className={styles.header__list}>
          <li>
            <NavLink
                to={`${BASE_URL}/`}
                className={styles.header__link}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
                to={`${BASE_URL}/projects`}
                className={styles.header__link}
            >
              Projects
            </NavLink>
          </li>

          <li>
            <NavLink
                to={`${BASE_URL}/contacts`}
                className={styles.header__link}
            >
              Contacts
            </NavLink>
          </li>
        </ul>
      </header>
  )
}

export default Header