import { IProjectElement } from "./types";
import { FC, useContext } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { LangEnum } from "../../constants/enums";
import { Context } from "../../context/context";
import getWordDependingNumber from "../../utils/getWordDependingNumber";
import PageCard from "../page-card";

const ProjectElement: FC<IProjectElement> = ({ className, project }) => {
  const { lang } = useContext(Context);

  const getMonthWord = (num: number): string => {
    if (lang === LangEnum.RU) {
      return getWordDependingNumber({
        num,
        word_0: "месяцев",
        word_1: "месяц",
        word_2: "месяца",
        word_5: "месяцев",
      });
    }

    if (lang === LangEnum.EN) {
      return getWordDependingNumber({
        num,
        word_0: "month",
        word_1: "month",
        word_2: "months",
        word_5: "months",
      });
    }

    return "";
  };

  const getTeamWord = (num: number | string): string => {
    if (typeof num !== "number") {
      if (lang === LangEnum.RU) {
        return "разработчиков";
      }
      if (lang === LangEnum.EN) {
        return "developers";
      }
    }

    if (lang === LangEnum.RU) {
      return getWordDependingNumber({
        num,
        word_0: "разработчиков",
        word_1: "разработчик",
        word_2: "разработчика",
        word_5: "разработчиков",
      });
    }

    if (lang === LangEnum.EN) {
      return getWordDependingNumber({
        num,
        word_0: "developers",
        word_1: "developer",
        word_2: "developers",
        word_5: "developers",
      });
    }

    return "";
  };

  return (
    <PageCard className={classNames(styles.projectElement, className)}>
      <h4 className={styles.title}>
        {project.title}
        <span className="">{` ( ${project.date} )`}</span>
      </h4>

      <p className="">
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

        <span>{getTeamWord(project.developers)}</span>

        <span>.</span>
      </p>

      <p className="">
        <span className={styles.subtitle}>
          {lang === LangEnum.RU && `Работал  над проектом:`}
          {lang === LangEnum.EN && `Worked on the project for`}
        </span>

        <span>{project.time}</span>

        <span> </span>

        <span>{getMonthWord(project.time)}</span>
      </p>

      <p className="">
        <span className={styles.subtitle}>
          {lang === LangEnum.RU && `Выполненные работы:`}
          {lang === LangEnum.EN && `Completed works:`}
        </span>

        <span>{project.myWorkRu}</span>
      </p>
    </PageCard>
  );
};

export default ProjectElement;
