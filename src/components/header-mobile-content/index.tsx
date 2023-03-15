import BurgerButton from "../burger-button";
import styles from './styles.module.scss'
import {useContext} from "react";
import {Context} from "../../context/context";

const HeaderMobileContent = () => {
  const {isOpenModal, setIsOpenModal} = useContext(Context)
  const onClickBurger = () => {
    setIsOpenModal(!isOpenModal)
  }

  return (
      <div className={styles.headerMobile}>
        <BurgerButton callBack={onClickBurger}/>
      </div>
  )
}

export default HeaderMobileContent