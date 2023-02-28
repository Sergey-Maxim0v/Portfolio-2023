import {useContext} from "react";
import {Context} from "../../context/context";
import {LangEnum} from "../../constants/enums";
import styles from "./styles.module.scss"
import classNames from "classnames";

const HomeContent = () => {
  const {lang} = useContext(Context)

  const downloadResume = (lang: LangEnum) => {
    console.log(lang)
  }

  return (
      <div className={styles.home}>
        <h1 className={styles.home__title}>
              <span>
                {lang === LangEnum.EN && 'Frontend-developer'}
                {lang === LangEnum.RU && 'Frontend-разработчик'}
              </span>
        </h1>

        <section className={classNames(styles.home__section, styles.about)}>
          <p className={styles.about__text}>
            {lang === LangEnum.EN &&
                `Hello! I'm `
            }
            {lang === LangEnum.RU &&
                'Привет! Меня зовут '
            }

            <span className={styles.home__name}>
              {lang === LangEnum.EN && 'Sergey Maximov'}
              {lang === LangEnum.RU && 'Сергей Максимов'}
           </span>
          </p>

          <p className={classNames(styles.home__text, styles.about__text)}>
            {lang === LangEnum.EN &&
                'I like to resolve design problems, ' +
                'create smart user interface and imagine useful interaction, ' +
                'developing rich web experiences & web applications.'
            }
            {lang === LangEnum.RU &&
                'Мне нравится решать сложные дизайнерские задачи, ' +
                'разрабатывать интересный функционал для web-приложений.'
            }
          </p>
        </section>

        <section className={styles.home__resume}>
          <button
              className={styles.home__button}
              onClick={() => downloadResume(lang)}
          >
            {lang === LangEnum.EN && 'Download resume'}
            {lang === LangEnum.RU && 'Скачать резюме'}
          </button>
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
