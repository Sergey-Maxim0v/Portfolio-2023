import {FC, MouseEvent, useContext} from "react";
import {ILanguageChanger} from "./types";
import classNames from "classnames";
import styles from "./styles.module.scss";
import {LangEnum} from "../../constants/enums";
import {LANGUAGE_VALUES} from "./constants";
import {Context} from "../../context/context";

const LanguageChanger: FC<ILanguageChanger> = ({className}) => {
  const {lang, setLang} = useContext(Context)

  const actualValue = LANGUAGE_VALUES[lang];

  const changeLanguage = (event: MouseEvent<HTMLButtonElement>) => {
    if (!event || !event?.target) {
      return;
    }

    const target = event.target as HTMLButtonElement;
    const targetValue = target.value as LangEnum;

    setLang(targetValue)
  }

  const changeNextLanguage = () => {
    const languages = Object.values(LANGUAGE_VALUES)
        .reduce((res: Array<LangEnum>, lanObj) => res.concat(lanObj.value), [])

    const index: number = languages.indexOf(lang as LangEnum);
    const nextLanguage = languages[index + 1] ?? languages[0]

    setLang(nextLanguage)
  }

  return (
      <div className={classNames(className, styles.languageChanger)}>
        <div
            onClick={() => changeNextLanguage()}
            className={styles.languageChanger__button}
        >
          <span>{actualValue.nameShort}</span>
        </div>

        <div className={styles.languageChanger__content}>
          {Object.values(LANGUAGE_VALUES).map(language => (
              <button
                  key={language.value}
                  className={
                    classNames(
                        styles.languageChanger__element,
                        {[styles.languageChanger__active]: language.value === lang}
                    )
                  }
                  value={language.value}
                  onClick={event => changeLanguage(event)}
              >
                {language.name}
              </button>
          ))}
        </div>
      </div>
  )
}

export default LanguageChanger
