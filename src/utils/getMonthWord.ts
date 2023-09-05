import { LangEnum } from "../constants/enums";
import getWordDependingNumber from "./getWordDependingNumber";

const getMonthWord = (num: number, lang: LangEnum): string => {
  if (lang === LangEnum.RU) {
    return getWordDependingNumber({
      num,
      word_0: "месяцев",
      word_1: "месяц",
      word_2: "месяца",
      word_5: "месяцев",
    });
  }

  if (lang === LangEnum.EN) {
    return getWordDependingNumber({
      num,
      word_0: "month",
      word_1: "month",
      word_2: "months",
      word_5: "months",
    });
  }

  return "";
};

export default getMonthWord;
