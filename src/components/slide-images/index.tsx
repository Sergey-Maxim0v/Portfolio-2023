import { FC, useEffect, useState } from "react";
import { ISlideImages } from "./types";
import styles from "./styles.module.scss";
import classNames from "classnames";

const SlideImages: FC<ISlideImages> = ({ project, className }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (project.photos.length === 1) return;

    const intervalFunction = () => {
      setActiveIndex((pref) =>
        pref < project.photos.length - 1 ? pref + 1 : 0,
      );
    };

    const interval = setInterval(intervalFunction, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classNames(styles.element, className)}>
      {project.photos.map((el, index) => (
        <img
          key={`${el} ${index}`}
          src={`./images/pets/${el}`}
          alt={`Image #-${index}`}
          className={classNames(styles.picture, {
            [styles.animated]:
              project.photos.length > 1 && index === activeIndex,
          })}
        />
      ))}
    </div>
  );
};

export default SlideImages;
