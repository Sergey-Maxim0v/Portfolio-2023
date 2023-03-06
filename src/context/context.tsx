import {createContext} from "react";
import {LangEnum, ThemeEnum} from "../constants/enums";

export interface IContext {
  lang: LangEnum,
  setLang: (val: LangEnum) => void,
  theme: ThemeEnum,
  setTheme: (val: ThemeEnum) => void,
  isLoadedPage: boolean,
  scrollNode: null | HTMLDivElement
}

export const Context = createContext<IContext>({
  lang: LangEnum.RU,
  setLang: () => {
  },
  theme: ThemeEnum.LIGHT,
  setTheme: () => {
  },
  isLoadedPage: false,
  scrollNode: null
})