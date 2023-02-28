import {useContext} from "react";
import {Context} from "../../context/context";
import {LangEnum} from "../../constants/enums";
import styles from "./styles.module.scss"
import classNames from "classnames";

const HomeContent = () => {
  const {lang} = useContext(Context)

  return (
      <div className={styles.home}>
        <h1 className={styles.home__title}>
              <span>
                {lang === LangEnum.EN && 'Frontend-developer'}
                {lang === LangEnum.RU && 'Фронтенд разработчик'}
              </span>
        </h1>

        <section className={classNames(styles.home__section, styles.about)}>
          <div className={styles.home__photo}>
            {/* TODO: photo --------------------------------------------------------------------- */}
          </div>

          <h2 className={classNames(styles.home__subtitle, styles.about__title)}>
            {lang === LangEnum.EN && 'Sergey Maximov'}
            {lang === LangEnum.RU && 'Сергей Максимов'}
          </h2>

          <p className={classNames(styles.home__text, styles.about__text)}>
            {lang === LangEnum.EN &&
                // TODO: EN  ---------------------------------------------------------------------
                'Занимаюсь разработкой приложений на TS/JS, React, Next. ' +
                'Имею опыт разработки CRM приложений. ' +
                'Опыт подготовки адаптивной верстки и анимаций.'
            }
            {lang === LangEnum.RU &&
                'Занимаюсь разработкой приложений на TS/JS, React, Next. ' +
                'Имею опыт разработки CRM приложений. ' +
                'Опыт подготовки адаптивной верстки и анимаций.'
            }
          </p>
        </section>

        <section className={classNames(styles.home__section, styles.skills)}>
          <h2 className={classNames(styles.home__subtitle, styles.skills__title)}>
            {lang === LangEnum.EN && 'Skills'}
            {lang === LangEnum.RU && 'Навыки'}
          </h2>

          <div className={styles.skills__content}>
            {/* TODO: skills ---------------------------------------------------------------------- */}
          </div>
        </section>
      </div>
  );
}

export default HomeContent
