import { LangEnum } from "../../constants/enums";

export interface ILanguageChanger {
  className: string;
}

export interface ILanguageValue {
  name: string;
  nameShort: string;
  value: LangEnum;
}
