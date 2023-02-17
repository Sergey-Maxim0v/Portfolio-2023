import {FC, MouseEvent} from "react";
import {ILanguageChanger} from "./types";
import classNames from "classnames";
import styles from "./styles.module.scss";
import {LangEnum} from "../../constants/enums";
import {LANGUAGE_VALUES} from "./constants";
import useLanguage from "../../hooks/useLanguage";

const LanguageChanger: FC<ILanguageChanger> = ({className}) => {
  const {actualLanguage, setActualLanguage} = useLanguage()

  const actualValue = LANGUAGE_VALUES[actualLanguage];

  const changeLanguage = (event: MouseEvent<HTMLButtonElement>) => {
    if (!event || !event?.target) {
      return;
    }

    const target = event.target as HTMLButtonElement;
    const targetValue = target.value as LangEnum;

    setActualLanguage(targetValue)
  }

  const changeNextLanguage = () => {
    const languages = Object.values(LANGUAGE_VALUES)
        .reduce((res: Array<LangEnum>, lanObj) => res.concat(lanObj.value), [])

    const index: number = languages.indexOf(actualLanguage as LangEnum);
    const nextLanguage = languages[index + 1] ?? languages[0]

    setActualLanguage(nextLanguage)
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
                        {[styles.languageChanger__active]: language.value === actualLanguage}
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
