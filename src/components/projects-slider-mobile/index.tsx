import classNames from "classnames";
import styles from "./styles.module.scss";
import { PET_LIST } from "../../constants/pet-list";
import Slide from "../Slide";

const ProjectsSliderMobile = () => {
  return (
    <div className={classNames(styles.slider)}>
      {PET_LIST.sort((el1, el2) => el2.number - el1.number).map((project) => (
        <Slide key={project.id} className={styles.slide} project={project} />
      ))}
    </div>
  );
};

export default ProjectsSliderMobile;
