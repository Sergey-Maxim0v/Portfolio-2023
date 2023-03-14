import styles from './styles.module.scss'
import {FC} from "react";
import classNames from "classnames";
import {IBurgerButton} from "./types";

const BurgerButton: FC<IBurgerButton> = ({className}) => {
  return (
      <div className={classNames(styles.burger, className)}>
        // TODO
      </div>
  )
}

export default BurgerButton