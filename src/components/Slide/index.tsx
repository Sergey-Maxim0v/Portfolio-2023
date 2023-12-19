import { FC, useContext } from "react";
import { ISlide } from "./types";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { LangEnum } from "../../constants/enums";
import { Context } from "../../context/context";

const Slide: FC<ISlide> = ({ project, className }) => {
  const { lang } = useContext(Context);

  return (
    <div className={classNames(className, styles.slide)}>
      <h4 className={styles.title}>
        {project.title} <span className={styles.date}>{project.date}</span>
      </h4>

      <p className="">
        <span className={styles.subtitle}>
          {lang === LangEnum.RU && `Стек технологий:`}
          {lang === LangEnum.EN && `Technology stack:`}
        </span>

        {project.technologies}
      </p>

      <p className="">
        <span className={styles.subtitle}>Github:</span>

        {project.gitLink}
      </p>

      {project.pageLink ? (
        <p className="">
          <span className={styles.subtitle}>Git-pages:</span>

          {project.pageLink}
        </p>
      ) : null}

      <p className="">
        <span className={styles.subtitle}>
          {lang === LangEnum.RU && `Описание:`}
          {lang === LangEnum.EN && `Description:`}
        </span>

        {lang === LangEnum.RU && project.descriptionRu}
        {lang === LangEnum.EN && project.descriptionEn}
      </p>

      {project.purposeRu && project.purposeEn ? (
        <p className="">
          <span className={styles.subtitle}>
            {lang === LangEnum.RU && `Цель проекта:`}
            {lang === LangEnum.EN && `Objective of the project:`}
          </span>

          {lang === LangEnum.RU && project.purposeRu}
          {lang === LangEnum.EN && project.purposeEn}
        </p>
      ) : null}
    </div>
  );
};

export default Slide;
