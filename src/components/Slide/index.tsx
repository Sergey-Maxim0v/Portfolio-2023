import { FC, useContext, lazy, Suspense, useRef } from "react";
import { ISlide } from "./types";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { LangEnum } from "../../constants/enums";
import { Context } from "../../context/context";
import { useIsVisibleComponent } from "../../hooks/useIsVisibleComponent";

const SlideImages = lazy(() => import("../slide-images"));

const Slide: FC<ISlide> = ({ project, className }) => {
  const { lang } = useContext(Context);

  const containerRef = useRef<HTMLDivElement>(null);

  const isVisibleContainer = useIsVisibleComponent(containerRef);

  return (
    <div ref={containerRef} className={classNames(className, styles.slideRow)}>
      <div className={styles.slide}>
        <div className={styles.content}>
          <h4 className={styles.title}>
            {project.title} <span className={styles.date}>{project.date}</span>
          </h4>

          <p className={styles.links}>
            <a className={styles.link} href={project.gitLink} target="_blank">
              Github
            </a>

            <a className={styles.link} href={project.pageLink} target="_blank">
              Git-pages
            </a>
          </p>

          <ul className={styles.list}>
            <li className={styles.element}>
              <span className={styles.subtitle}>
                {lang === LangEnum.RU && `Стек технологий:`}
                {lang === LangEnum.EN && `Technology stack:`}
              </span>

              {project.technologies}
            </li>

            {project.descriptionRu && project.descriptionEn ? (
              <li className={styles.element}>
                <span className={styles.subtitle}>
                  {lang === LangEnum.RU && `Описание:`}
                  {lang === LangEnum.EN && `Description:`}
                </span>

                {lang === LangEnum.RU && project.descriptionRu}
                {lang === LangEnum.EN && project.descriptionEn}
              </li>
            ) : null}

            {project.purposeRu && project.purposeEn ? (
              <li className={styles.element}>
                <span className={styles.subtitle}>
                  {lang === LangEnum.RU && `Цель проекта:`}
                  {lang === LangEnum.EN && `Objective of the project:`}
                </span>

                {lang === LangEnum.RU && project.purposeRu}
                {lang === LangEnum.EN && project.purposeEn}
              </li>
            ) : null}
          </ul>
        </div>

        {isVisibleContainer && (
          <Suspense>
            <SlideImages project={project} className={styles.images} />
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default Slide;
