import {createContext} from "react";
import {LangEnum} from "../constants/enums";

export const Context = createContext({lang: LangEnum.RU, setLang: (val:LangEnum)=>{}})