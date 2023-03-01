import {useContext} from "react";
import {Context} from "../../context/context";
import {LangEnum} from "../../constants/enums";
import styles from "./styles.module.scss"
import classNames from "classnames";

const HomeContent = () => {
  const {lang} = useContext(Context)

  const downloadResume = (lang: LangEnum) => {
    // TODO
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
                'developing rich web experiences & web applications. '
            }
            {lang === LangEnum.RU &&
                'Мне нравится решать сложные дизайнерские задачи ' +
                'и разрабатывать интересный функционал для web-приложений. '
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
            <div className={styles.skills__element}>
              <h4 className={styles.skills__subtitle}>
                TypeScrip, JavaScript
              </h4>
              <p className={styles.skills__description}>
                {lang === LangEnum.EN &&
                    'Knowledge of the capabilities and features of programming languages, ' +
                    'extensive experience with DOM and events,' +
                    'communication between the client and the server. ' +
                    'Knowledge and experience in applying basic programming patterns. ' +
                    'Knowledge of browser features ' +
                    'and the principles of creating modern large Web applications. '
                }
                {lang === LangEnum.RU &&
                    'Знание возможностей и особенностей языков, ' +
                    'в т.ч. большой опыт работы с DOM и событиями, ' +
                    'общением клиента с сервером. ' +
                    'Знание и опыт применения основных паттернов программирования. ' +
                    'Знание особенностей работы браузеров ' +
                    'и принципов создания современных крупных Web-приложений. '
                }
              </p>
            </div>

            <div className={styles.skills__element}>
              <h4 className={styles.skills__subtitle}>
                React, Next.js
              </h4>
              <p className={styles.skills__description}>
                {lang === LangEnum.EN &&
                    'Experience in creating React applications of varying degrees of complexity. ' +
                    'Experience in creating SSR applications using Next.js ' +
                    'Experience working with React libraries for building and interacting with tables and forms. ' +
                    'Experience working with React UI libraries (Material UI).'
                }
                {lang === LangEnum.RU &&
                    'Опыт создания приложений на React разной степени сложности. ' +
                    'Опыт создания SSR приложений с использованием Next.js. ' +
                    'Опыт работы с React библиотеками работы с таблицами, формами. ' +
                    'Опыт работы с  React библиотеками UI (Material UI). '
                }
              </p>
            </div>

            <div className={styles.skills__element}>
              <h4 className={styles.skills__subtitle}>
                HTML, CSS, SASS, Tailwind, Nunjucks
              </h4>
              <p className={styles.skills__description}>
                {lang === LangEnum.EN &&
                    'Experience of layout based on layouts of varying complexity. ' +
                    'Experience writing animations. ' +
                    'Knowledge of CSS frameworks.'
                }
                {lang === LangEnum.RU &&
                    'Опыт верстки на основе макетов разной сложности. ' +
                    'Опыт написания анимаций. ' +
                    'Знание CSS фреймворков. '
                }
              </p>
            </div>

            <div className={styles.skills__element}>
              <h4 className={styles.skills__subtitle}>
                Environments
              </h4>
              <p className={styles.skills__description}>
                {lang === LangEnum.EN &&
                    'Experience working with tools used in frontend development:: ' +
                    'Git, Yarn, NPM, Webpack, Vite, Eslint'
                }
                {lang === LangEnum.RU &&
                    'Опыт работы с инструментами применяемыми во frontend разработке: ' +
                    'Git, Yarn, NPM, Webpack, Vite, Eslint'
                }
              </p>
            </div>
          </div>
        </section>
      </div>
  );
}

export default HomeContent
