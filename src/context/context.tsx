import {createContext, RefObject} from "react";
import {LangEnum, ThemeEnum} from "../constants/enums";

export interface IContext {
  lang: LangEnum,
  setLang: (val: LangEnum) => void,
  theme: ThemeEnum,
  setTheme: (val: ThemeEnum) => void,
  isLoadedPage: boolean,
  scrollRef: RefObject<HTMLDivElement>
}

export const Context = createContext<IContext>({
  lang: LangEnum.RU,
  setLang: () => {
  },
  theme: ThemeEnum.LIGHT,
  setTheme: () => {
  },
  isLoadedPage: false,
  scrollRef: {current: null}
})