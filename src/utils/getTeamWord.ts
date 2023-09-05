import { LangEnum } from "../constants/enums";
import getWordDependingNumber from "./getWordDependingNumber";

const getTeamWord = (num: number | string, lang: LangEnum): string => {
  if (typeof num !== "number") {
    if (lang === LangEnum.RU) {
      return "разработчиков";
    }
    if (lang === LangEnum.EN) {
      return "developers";
    }
  }

  if (lang === LangEnum.RU) {
    return getWordDependingNumber({
      num,
      word_0: "разработчиков",
      word_1: "разработчик",
      word_2: "разработчика",
      word_5: "разработчиков",
    });
  }

  if (lang === LangEnum.EN) {
    return getWordDependingNumber({
      num,
      word_0: "developers",
      word_1: "developer",
      word_2: "developers",
      word_5: "developers",
    });
  }

  return "";
};

export default getTeamWord;
