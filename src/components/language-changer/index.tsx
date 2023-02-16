import {FC, MouseEvent, useState} from "react";
import {ILanguageChanger} from "./types";
import classNames from "classnames";
import styles from "./styles.module.scss";
import {LangEnum} from "../../constants/enums";
import {LANGUAGE_VALUES} from "./constants";

const LanguageChanger: FC<ILanguageChanger> = ({className}) => {
  const [actualLanguage, setActualLanguage] = useState(LangEnum.RU);
  const actualValue = LANGUAGE_VALUES[actualLanguage];

  const changeLanguage = (event: MouseEvent<HTMLButtonElement>) => {
    if (!event || !event?.target) {
      return;
    }

    const target = event.target as HTMLButtonElement;
    const targetValue: LangEnum = target.value as LangEnum;

    setActualLanguage(targetValue)
  }

  return (
      <div className={classNames(className, styles.languageChanger)}>
        <div className={styles.languageChanger__button}>
          <span>{actualValue.nameShort}</span>
        </div>

        <div className={styles.languageChanger__content}>
          {Object.values(LANGUAGE_VALUES).map(language => (
              <button
                  key={language.value}
                  className={styles.languageChanger__element}
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
