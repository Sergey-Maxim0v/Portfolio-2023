import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/context";
import { LangEnum } from "../../constants/enums";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { BASE_URL } from "../../api/baseURL";
import GlowingButton from "../glowing-button";
import SkillsSpaceBg from "../skills-space-bg";
import PageCard from "../page-card";
import { ROUTES } from "../../api/routes";
import { NavLink } from "react-router-dom";
import Icon from "../icon";
import { IconNameEnum } from "../icon/types";

const HomeContent = () => {
  const { lang, scrollRef } = useContext(Context);
  const [isScroll, setIsScroll] = useState(false);

  const linkPDF =
    lang === LangEnum.RU
      ? `${BASE_URL}/download/resume-ru.pdf`
      : `${BASE_URL}/download/resume-en.pdf`;

  useEffect(() => {
    const onScroll = (event: Event) => {
      if (!event || !event?.target) {
        return;
      }

      const targetNode = event.target as HTMLElement;

      setIsScroll(targetNode.scrollTop > 200);
    };

    if (!scrollRef.current) {
      return;
    }

    scrollRef.current.addEventListener("scroll", (event) => onScroll(event));

    return scrollRef.current.removeEventListener("scroll", (event) =>
      onScroll(event),
    );
  }, [scrollRef]);

  return (
    <div className={styles.home}>
      {/* Section 1 */}
      <section className={classNames(styles.home__section, styles.about)}>
        <h1 className={classNames(styles.home__title, styles.title)}>
          <p className={classNames("font__rampart", styles.title__front)}>
            FRONTEND
          </p>
          <p className={classNames(styles.title__dev)}>
            {lang === LangEnum.EN && " developer"}
            {lang === LangEnum.RU && " разработчик"}
          </p>
        </h1>

        <div className={styles.about__description}>
          <p className={classNames(styles.home__text, styles.about__text)}>
            {lang === LangEnum.EN && `Hello! I'm `}
            {lang === LangEnum.RU && `Привет! Меня зовут `}
            <span className={styles.about__name}>
              {lang === LangEnum.EN && "Sergey Maximov"}
              {lang === LangEnum.RU && "Сергей Максимов"}
            </span>
          </p>

          <p className={classNames(styles.home__text, styles.about__text)}>
            {lang === LangEnum.EN && (
              <span>
                I&nbsp;like to&nbsp;implement complex design ideas, create smart
                user interface and imagine useful interaction, developing rich
                web experiences and&nbsp;web applications.
              </span>
            )}
            {lang === LangEnum.RU && (
              <span>
                Мне нравится воплощать сложные дизайнерские идеи
                и&nbsp;разрабатывать интересный функционал для&nbsp;
                <span className={styles.nowrap}>web-приложений.</span>
              </span>
            )}
          </p>
        </div>

        <a href={linkPDF} className={styles.about__link} download>
          <GlowingButton textRu={"Скачать резюме"} textEn={"Download resume"} />
        </a>

        <div
          className={classNames(styles.about__scroll, {
            [styles.hidden]: isScroll,
          })}
        >
          scroll
        </div>

        <SkillsSpaceBg />
      </section>

      {/* Section 2 */}
      <section className={classNames(styles.home__section, styles.skills)}>
        <PageCard className={styles.skills__titleRow}>
          <h2
            className={classNames(styles.home__subtitle, styles.skills__title)}
          >
            {lang === LangEnum.EN && "Skills"}
            {lang === LangEnum.RU && "Навыки"}
          </h2>
        </PageCard>

        <div className={styles.skills__content}>
          <PageCard className={styles.skills__element}>
            <h4 className={styles.skills__subtitle}>
              <div className={styles.skills__subtitleElement}>
                <span>TypeScript</span>
                <Icon
                  iconName={IconNameEnum.ts}
                  className={classNames(styles.skills__icon, styles.icon__ts)}
                />
                <span>, </span>
              </div>
              <div className={styles.skills__subtitleElement}>
                <span>JavaScript</span>
                <Icon
                  iconName={IconNameEnum.js}
                  className={styles.skills__icon}
                />
              </div>
            </h4>
            <p className={styles.skills__description}>
              {lang === LangEnum.EN &&
                "Knowledge of the capabilities and features of programming languages, " +
                  "extensive experience with DOM and events," +
                  "communication between the client and the server. " +
                  "Knowledge and experience in applying basic programming patterns. " +
                  "Knowledge of browser features " +
                  "and the principles of creating modern large Web applications. "}
              {lang === LangEnum.RU &&
                "Знание возможностей и особенностей языков, " +
                  "в т.ч. большой опыт работы с DOM и событиями, " +
                  "общением клиента с сервером. " +
                  "Знание и опыт применения основных паттернов программирования. " +
                  "Знание особенностей работы браузеров " +
                  "и принципов создания современных крупных Web-приложений. "}
            </p>
          </PageCard>

          <PageCard className={styles.skills__element}>
            <h4 className={styles.skills__subtitle}>
              <div className={styles.skills__subtitleElement}>
                <span>React</span>
                <Icon
                  iconName={IconNameEnum.react}
                  className={classNames(
                    styles.skills__icon,
                    styles.icon__react,
                  )}
                />
                <span>, </span>
              </div>
              <div className={styles.skills__subtitleElement}>
                <span>Next.js</span>
                <Icon
                  iconName={IconNameEnum.next}
                  className={classNames(styles.skills__icon, styles.icon__next)}
                />
              </div>
            </h4>
            <p className={styles.skills__description}>
              {lang === LangEnum.EN &&
                "Experience in creating React applications of varying degrees of complexity. " +
                  "Experience in creating SSR applications using Next.js " +
                  "Experience with other libraries: " +
                  "MobX, Material UI, Styled Components and others."}
              {lang === LangEnum.RU &&
                "Опыт создания приложений на React разной степени сложности. " +
                  "Опыт создания SSR приложений с использованием Next.js. " +
                  "Опыт работы с разными библиотеками: " +
                  "MobX, Material UI, Styled Components и другие"}
            </p>
          </PageCard>

          <PageCard className={styles.skills__element}>
            <h4 className={styles.skills__subtitle}>
              <div className={styles.skills__subtitleElement}>
                <span>HTML</span>
                <Icon
                  iconName={IconNameEnum.html}
                  className={styles.skills__icon}
                />
                <span>, </span>
              </div>
              <div className={styles.skills__subtitleElement}>
                <span>CSS</span>
                <Icon
                  iconName={IconNameEnum.css}
                  className={classNames(styles.skills__icon, styles.icon__css)}
                />
                <span>, </span>
              </div>
              <div className={styles.skills__subtitleElement}>
                <span> SASS</span>
                <Icon
                  iconName={IconNameEnum.sass}
                  className={classNames(styles.skills__icon, styles.icon__sass)}
                />
                <span>, </span>
              </div>
              <div className={styles.skills__subtitleElement}>
                <span> Tailwind CSS</span>
                <Icon
                  iconName={IconNameEnum.tailwind2}
                  className={classNames(
                    styles.skills__icon,
                    styles.icon__tailwind,
                  )}
                />
                <span>, </span>
              </div>
              <div className={styles.skills__subtitleElement}>
                <span> Nunjucks</span>
                <Icon
                  iconName={IconNameEnum.nj}
                  className={classNames(styles.skills__icon, styles.icon__nj)}
                />
              </div>
            </h4>
            <p className={styles.skills__description}>
              {lang === LangEnum.EN &&
                "Experience of layout based on layouts of varying complexity. " +
                  "Experience writing animations. " +
                  "Knowledge of CSS frameworks."}
              {lang === LangEnum.RU &&
                "Опыт верстки на основе макетов разной сложности. " +
                  "Опыт написания анимаций. " +
                  "Знание CSS фреймворков. "}
            </p>
          </PageCard>

          <PageCard className={styles.skills__element}>
            <h4 className={styles.skills__subtitle}>
              <div className={styles.skills__subtitleElement}>Environments</div>
            </h4>
            <p className={styles.skills__description}>
              {lang === LangEnum.EN &&
                "Experience working with tools used in frontend development: " +
                  "Git, Yarn, NPM, Webpack, Vite, Eslint"}
              {lang === LangEnum.RU &&
                "Опыт работы с инструментами применяемыми во frontend разработке: " +
                  "Git, Yarn, NPM, Webpack, Vite, Eslint"}
            </p>
          </PageCard>
        </div>
      </section>

      {/* Section 3 */}
      <section className={classNames(styles.home__section, styles.buttons)}>
        <NavLink to={ROUTES.projects.path} className={styles.buttons__element}>
          <GlowingButton textRu={"Мои работы"} textEn={"My works"} />
        </NavLink>
        <NavLink to={ROUTES.contacts.path} className={styles.buttons__element}>
          <GlowingButton textRu={"Контакты"} textEn={"Contacts"} />
        </NavLink>
      </section>
    </div>
  );
};

export default HomeContent;
