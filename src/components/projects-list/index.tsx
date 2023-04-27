import styles from './styles.module.scss'
import {PROJECTS_LIST} from "../../constants/projects-list";
import ProjectElement from "../project-element";

const ProjectsList = () => {
    return (
        <div
            className={styles.projectsList}
        >
            {PROJECTS_LIST.map(project =>
                <ProjectElement
                    key={project.id}
                    project={project}
                    className={styles.projectsList__element}
                />
            )}
        </div>
    )
}

export default ProjectsList