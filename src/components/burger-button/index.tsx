import styles from './styles.module.scss'
import {FC, useState, MouseEvent} from "react";
import classNames from "classnames";
import {IBurgerButton} from "./types";

const BurgerButton: FC<IBurgerButton> = ({className, callBack}) => {
  const [isActive, setIsActive] = useState(false)

  const onClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setIsActive(prev => !prev)
    // callBack()
  }

  // TODO: https://codepen.io/brenden/pen/VLjKMQ

  return (
      <button
          className={classNames(styles.burger, className, {[styles.active]: isActive})}
          onClick={(event) => onClick(event)}
      >
        <div className={classNames(styles.line1, styles.line)}></div>
        <div className={classNames(styles.line2, styles.line)}></div>
        <div className={classNames(styles.line3, styles.line)}></div>
      </button>
  )
}

export default BurgerButton