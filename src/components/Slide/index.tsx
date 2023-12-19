import { FC } from "react";
import { ISlide } from "./types";
import styles from "./styles.module.scss";
import classNames from "classnames";

const Slide: FC<ISlide> = ({ project, className }) => {
  return (
    <div className={classNames(className, styles.slide)}>
      {project.id + " " + project.title}
    </div>
  );
};

export default Slide;
