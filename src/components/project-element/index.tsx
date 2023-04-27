import {IProjectElement} from "./types";
import {FC} from "react";
import classNames from "classnames";
import styles from './styles.module.scss'

const ProjectElement: FC<IProjectElement> = ({className, project}) => {
    return (
        <div
            className={classNames(styles.projectElement, className)}
        >
            // TODO: {project.title}
        </div>
    )
}

export default ProjectElement