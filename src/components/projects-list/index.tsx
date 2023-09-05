import styles from "./styles.module.scss";
import { PROJECTS_LIST } from "../../constants/projects-list";
import ProjectElement from "../project-element";

const SORTED_PROJECTS_LIST = PROJECTS_LIST.sort(
  (el1, el2) => el2.number - el1.number,
);

const ProjectsList = () => {
  return (
    <div className={styles.projectsList}>
      {SORTED_PROJECTS_LIST.map((project) => (
        <ProjectElement
          key={project.id}
          project={project}
          className={styles.projectsList__element}
        />
      ))}
    </div>
  );
};

export default ProjectsList;
