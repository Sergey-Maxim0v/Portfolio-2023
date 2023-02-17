import {createContext} from "react";
import {LangEnum, ThemeEnum} from "../constants/enums";

export const Context = createContext({
  lang: LangEnum.RU,
  setLang: (val: LangEnum) => {
  },
  theme: ThemeEnum.LIGHT,
  setTheme: (val: ThemeEnum) => {
  }
})