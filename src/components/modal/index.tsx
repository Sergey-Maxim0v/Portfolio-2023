import {useContext, useEffect, useState} from "react";
import {Context} from "../../context/context";
import classNames from "classnames";
import styles from './styles.module.scss'

const Modal = () => {
  const {isOpenModal} = useContext(Context)

  const [isModal, setIsModal] = useState(false)

  useEffect(() => {
    if (isOpenModal) {
      setIsModal(true)
      return
    }

    if (!isOpenModal && isModal) {
      const timeout = setTimeout(() => {
        setIsModal(false)
      }, 400)

      return () => clearTimeout(timeout);
    }
  }, [isOpenModal])

  return (
      <>
        {isModal &&
            <div
                className={
                  classNames(
                      {[styles.open]: isOpenModal},
                      {[styles.close]: !isOpenModal},
                      styles.modal,
                      'container'
                  )
                }
            >

            </div>
        }
      </>
  )
}

export default Modal