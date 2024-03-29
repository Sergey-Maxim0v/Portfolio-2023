import { NavLink } from "react-router-dom";
import { ROUTES } from "../../api/routes";
import GlowingButton from "../glowing-button";
import styles from "./styles.module.scss";
import { IErrorPageContent } from "./types";
import { FC, useContext } from "react";
import { Context } from "../../context/context";
import { LangEnum } from "../../constants/enums";
import classNames from "classnames";

const ErrorPageContent: FC<IErrorPageContent> = ({ error }) => {
  const { lang } = useContext(Context);

  const errorTitle = error?.name ?? "";
  const errorDescription = error?.message ?? "";

  return (
    <div className={styles.container}>
      <h3 className={classNames(styles.title, "font__rampart")}>
        {lang === LangEnum.EN && "Error!"}
        {lang === LangEnum.RU && "Ошибка!"}
      </h3>

      <p className={styles.subtitle}>
        {lang === LangEnum.EN && "Something went wrong..."}
        {lang === LangEnum.RU && "Что-то пошло не так..."}
      </p>

      <NavLink to={ROUTES.home.path} className={styles.link}>
        <GlowingButton
          textRu={"На главную"}
          textEn={"Home page"}
          className={styles.button}
        />
      </NavLink>

      <div className={styles.description}>
        {errorTitle && (
          <p>
            <span>Error title: </span>
            {errorTitle}
          </p>
        )}
        {errorDescription && (
          <p>
            <span>Error message: </span>
            {errorDescription}
          </p>
        )}
      </div>
    </div>
  );
};

export default ErrorPageContent;
