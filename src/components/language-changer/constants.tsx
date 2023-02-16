import {ILanguageValue} from "./types";
import {LangEnum} from "../../constants/enums";

export const LANGUAGE_VALUES: { [key: string]: ILanguageValue } = {
  [LangEnum.RU]: {
    name: 'Русский',
    nameShort: 'RU',
    value: LangEnum.RU,
  },
  [LangEnum.EN]: {
    name: 'English',
    nameShort: 'EN',
    value: LangEnum.EN,
  }
}