import { LangEnum } from "../../constants/enums";
import { useContext } from "react";
import { Context } from "../../context/context";
import ProjectsList from "../projects-list";
import ProjectsSlider from "../projects-slider";
import styles from "./styles.module.scss";
import useMedia from "../../hooks/useMedia";
import ProjectsSliderMobile from "../projects-slider-mobile";

const ProjectsContent = () => {
  const { lang } = useContext(Context);
  const { isMobile } = useMedia();

  return (
    <>
      <section className={styles.projectsContent__section}>
        <h2 className={styles.projectsContent__title}>
          {lang === LangEnum.EN && "Commercial projects"}
          {lang === LangEnum.RU && "Коммерческие проекты"}
        </h2>
        {/*  TODO */}
        {/*<ProjectsList />*/}
      </section>

      <section className={styles.projectsContent__section}>
        <h2 className={styles.projectsContent__title}>
          {lang === LangEnum.EN && "Experiments, training projects"}
          {lang === LangEnum.RU && "Эксперименты, тренировочные проекты"}
        </h2>

        {isMobile ? (
          <ProjectsSliderMobile />
        ) : (
          <ProjectsSlider autoPlay autoPlayTime={7000} />
        )}
      </section>
    </>
  );
};

export default ProjectsContent;
