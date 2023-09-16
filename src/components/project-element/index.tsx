import { IProjectElement } from "./types";
import { FC, useContext } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { LangEnum } from "../../constants/enums";
import { Context } from "../../context/context";
import PageCard from "../page-card";
import getMonthWord from "../../utils/getMonthWord";
import getTeamWord from "../../utils/getTeamWord";

const ProjectElement: FC<IProjectElement> = ({ className, project }) => {
  const { lang } = useContext(Context);

  return (
    <PageCard className={classNames(styles.projectElement, className)}>
      <h4 className={styles.title}>
        {project.title}
        <span className="">{` ( ${project.date} )`}</span>
      </h4>

      <p className={styles.description}>
        {lang === LangEnum.RU && `${project.descriptionRu}`}
        {lang === LangEnum.EN && `${project.descriptionEn}`}
      </p>

      <p className="">
        <span className={styles.subtitle}>
          {lang === LangEnum.RU && `Стек технологий:`}
          {lang === LangEnum.EN && `Technology stack:`}
        </span>

        {project.technologies}

        <span>.</span>
      </p>

      <p className="">
        <span className={styles.subtitle}>
          {lang === LangEnum.RU && `Команда:`}
          {lang === LangEnum.EN && `Team of`}
        </span>

        <span>{project.developers}</span>

        <span> </span>

        <span>{getTeamWord(project.developers, lang)}</span>
      </p>

      <p className="">
        <span className={styles.subtitle}>
          {lang === LangEnum.RU && `Работал  над проектом:`}
          {lang === LangEnum.EN && `Worked on the project for`}
        </span>

        <span>{project.time}</span>

        <span> </span>

        <span>{getMonthWord(project.time, lang)}</span>
      </p>

      <p className="">
        <span className={styles.subtitle}>
          {lang === LangEnum.RU && `Выполненные работы:`}
          {lang === LangEnum.EN && `Completed works:`}
        </span>

        <span>
          {lang === LangEnum.RU && project.myWorkRu}
          {lang === LangEnum.EN && project.myWorkEn}
        </span>
      </p>
    </PageCard>
  );
};

export default ProjectElement;
