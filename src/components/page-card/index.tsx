import { FC } from "react";
import { IPageCard } from "./types";
import classNames from "classnames";
import styles from "./styles.module.scss";

const PageCard: FC<IPageCard> = ({ children, className }) => {
  return <div className={classNames(styles.card, className)}>{children}</div>;
};

export default PageCard;
