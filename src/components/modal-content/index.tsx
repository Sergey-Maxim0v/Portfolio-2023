import styles from './styles.module.scss'
import {FC, useContext} from "react";
import {IModalContent} from "./types";
import classNames from "classnames";
import {ROUTES} from "../../api/routes";
import {NavLink, useLocation} from "react-router-dom";
import {LangEnum} from "../../constants/enums";
import {Context} from "../../context/context";
import LanguageChanger from "../language-changer";
import ThemeSwitcher from "../theme-switcher";

const ModalContent: FC<IModalContent> = ({className}) => {
  const location = useLocation()
  const {lang} = useContext(Context)

  return (
      <div className={classNames(styles.modalContent, className, 'font__bold')}>
        <nav className={styles.modalContent__list}>
          {Object.keys(ROUTES).map(key => (
              <NavLink
                  key={key}
                  to={ROUTES[key].path}
                  className={classNames(
                      styles.modalContent__link, styles.modalLink,
                      {
                        [styles.modalLink__active]:
                        location.pathname === ROUTES[key].path || location.pathname === ROUTES[key].path + '/'
                      }
                  )}
              >
                {lang === LangEnum.RU && ROUTES[key].titleRu}
                {lang === LangEnum.EN && ROUTES[key].titleEn}
              </NavLink>
          ))}
        </nav>

        <div className={styles.modalContent__activities}>
          <LanguageChanger className={styles.modalContent__language}/>
          <ThemeSwitcher/>
        </div>
      </div>
  )
}

export default ModalContent