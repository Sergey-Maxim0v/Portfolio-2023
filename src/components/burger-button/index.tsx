import styles from "./styles.module.scss";
import { FC, MouseEvent } from "react";
import classNames from "classnames";
import { IBurgerButton } from "./types";

const BurgerButton: FC<IBurgerButton> = ({ className, callBack, active }) => {
  const onClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    callBack();
  };

  return (
    <button
      className={classNames(styles.burger, className, {
        [styles.active]: active,
      })}
      onClick={(event) => onClick(event)}
    >
      <div className={styles.burger__element}></div>
    </button>
  );
};

export default BurgerButton;
