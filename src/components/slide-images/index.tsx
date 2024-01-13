import { FC } from "react";
import { ISlideImages } from "./types";
import styles from "./styles.module.scss";
import classNames from "classnames";

const SlideImages: FC<ISlideImages> = ({ project, className }) => {
  return (
    <div className={classNames(styles.element, className)}>
      {/* TODO */}
      SlideImages
    </div>
  );
};

export default SlideImages;
