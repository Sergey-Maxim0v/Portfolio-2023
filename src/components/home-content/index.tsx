import {useContext, useEffect, useState} from "react";
import {Context} from "../../context/context";
import {LangEnum} from "../../constants/enums";
import styles from "./styles.module.scss"
import classNames from "classnames";
import {BASE_URL} from "../../api/baseURL";
import GlowingButton from "../glowing-button";
import SkillsSpaceBg from "../skills-space-bg";
import PageCard from "../page-card";

const HomeContent = () => {
  const {lang, scrollRef} = useContext(Context);
  const [isScroll, setIsScroll] = useState(false);

  const linkPDF = lang === LangEnum.RU
      ? `${BASE_URL}/download/resume-ru.pdf`
      : `${BASE_URL}/download/resume-en.pdf`

  useEffect(() => {
    const onScroll = (event: Event) => {
      if (!event || !event?.target) {
        return;
      }

      const targetNode = event.target as HTMLElement

      setIsScroll(targetNode.scrollTop > 200)
    }


    if (!scrollRef.current) {
      return;
    }

    scrollRef.current.addEventListener('scroll', (event) => onScroll(event))

    return scrollRef.current.removeEventListener('scroll', (event) => onScroll(event))
  }, [scrollRef])

  return (
      <div className={styles.home}>
        <section className={classNames(styles.home__section, styles.about)}>
          <h1 className={classNames(styles.home__title, styles.title)}>
            <p className={classNames('font__rampart', styles.title__front)}>FRONTEND</p>
            <p className={classNames(styles.title__dev)}>
              {lang === LangEnum.EN && ' developer'}
              {lang === LangEnum.RU && ' разработчик'}
            </p>
          </h1>

          <div className={styles.about__description}>
            <p className={classNames(styles.home__text, styles.about__text)}>
              {lang === LangEnum.EN &&
                  `Hello! I'm `
              }
              {lang === LangEnum.RU &&
                  `Привет! Меня зовут `
              }
              <span className={styles.about__name}>
                {lang === LangEnum.EN && 'Sergey Maximov'}
                {lang === LangEnum.RU && 'Сергей Максимов'}
              </span>
            </p>

            <p className={classNames(styles.home__text, styles.about__text)}>
              {lang === LangEnum.EN &&
                  <span>
                    I&nbsp;like to&nbsp;implement complex design ideas,
                    create smart user interface and imagine useful interaction,
                    developing rich web experiences and&nbsp;web applications.
                  </span>
              }
              {lang === LangEnum.RU &&
                  <span>
                    Мне нравится воплощать сложные дизайнерские идеи
                    и&nbsp;разрабатывать интересный функционал для&nbsp;
                    <span className={styles.nowrap}>web-приложений.</span>
                  </span>
              }
            </p>
          </div>

          <a
              href={linkPDF}
              className={styles.about__link}
              download
          >
            <GlowingButton textRu={'Скачать резюме'} textEn={'Download resume'}/>
          </a>

          <div className={classNames(styles.about__scroll, {[styles.hidden]: isScroll})}>
            scroll
          </div>

          <SkillsSpaceBg/>
        </section>

        <section className={classNames(styles.home__section, styles.skills)}>
          <PageCard>
            <h2 className={classNames(styles.home__subtitle, styles.skills__title)}>
              {lang === LangEnum.EN && 'Skills'}
              {lang === LangEnum.RU && 'Навыки'}
            </h2>
          </PageCard>

          <div className={styles.skills__content}>
            <PageCard className={styles.skills__element}>
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
            </PageCard>

            <PageCard className={styles.skills__element}>
              <h4 className={styles.skills__subtitle}>
                React, Next.js
              </h4>
              <p className={styles.skills__description}>
                {lang === LangEnum.EN &&
                    'Experience in creating React applications of varying degrees of complexity. ' +
                    'Experience in creating SSR applications using Next.js ' +
                    'Experience working with React libraries for building ' +
                    'and interacting with tables and forms. ' +
                    'Experience working with React UI libraries (Material UI).'
                }
                {lang === LangEnum.RU &&
                    'Опыт создания приложений на React разной степени сложности. ' +
                    'Опыт создания SSR приложений с использованием Next.js. ' +
                    'Опыт работы с React библиотеками работы с таблицами, формами. ' +
                    'Опыт работы с  React библиотеками UI (Material UI). '
                }
              </p>
            </PageCard>

            <PageCard className={styles.skills__element}>
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
            </PageCard>

            <PageCard className={styles.skills__element}>
              <h4 className={styles.skills__subtitle}>
                Environments
              </h4>
              <p className={styles.skills__description}>
                {lang === LangEnum.EN &&
                    'Experience working with tools used in frontend development: ' +
                    'Git, Yarn, NPM, Webpack, Vite, Eslint'
                }
                {lang === LangEnum.RU &&
                    'Опыт работы с инструментами применяемыми во frontend разработке: ' +
                    'Git, Yarn, NPM, Webpack, Vite, Eslint'
                }
              </p>
            </PageCard>
          </div>
        </section>
      </div>
  );
}

export default HomeContent
