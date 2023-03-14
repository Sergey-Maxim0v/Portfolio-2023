import ThemeSwitcher from "../theme-switcher";
import BurgerButton from "../burger-button";
import styles from './styles.module.scss'

const HeaderMobileContent = () => {
  return (
      <div className={styles.headerMobile}>
        <ThemeSwitcher className={styles.headerMobile__element}/>
        <BurgerButton className={styles.headerMobile__element}/>
      </div>
  )
}

export default HeaderMobileContent