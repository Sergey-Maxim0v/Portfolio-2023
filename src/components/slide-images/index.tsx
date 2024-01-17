import { FC } from "react";
import { ISlideImages } from "./types";
import styles from "./styles.module.scss";
import classNames from "classnames";

const SlideImages: FC<ISlideImages> = ({ project, className }) => {
  console.log(project.photos);

  return (
    <div className={classNames(styles.element, className)}>
      {project.photos.map((el) => (
        <img src={`./images/pets/${el}`} alt={el} className={styles.picture} />
      ))}
    </div>
  );
};

export default SlideImages;
