import BurgerButton from "../burger-button";
import styles from './styles.module.scss'

const HeaderMobileContent = () => {
  const onClickBurger = () => {
  }

  return (
      <div className={styles.headerMobile}>
        <BurgerButton callBack={onClickBurger}/>
      </div>
  )
}

export default HeaderMobileContent