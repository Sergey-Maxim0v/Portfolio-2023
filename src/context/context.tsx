import { createContext, RefObject } from "react";
import { LangEnum, ThemeEnum } from "../constants/enums";

export interface IContext {
  lang: LangEnum;
  setLang: (val: LangEnum) => void;
  theme: ThemeEnum;
  setTheme: (val: ThemeEnum) => void;
  isLoadedPage: boolean;
  scrollRef: RefObject<HTMLDivElement>;
  isOpenModal: boolean;
  setIsOpenModal: (val: boolean) => void;
}

export const Context = createContext<IContext>({
  lang: LangEnum.RU,
  setLang: () => {},
  theme: ThemeEnum.LIGHT,
  setTheme: () => {},
  isLoadedPage: false,
  scrollRef: { current: null },
  isOpenModal: false,
  setIsOpenModal: () => {},
});
