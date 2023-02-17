import useLocalStorage from "./useLocalStorage";
import {LangEnum} from "../constants/enums";

const useLanguage = () => {
  const [lang, setLang] = useLocalStorage<LangEnum>("lang", LangEnum.RU);

  return {lang, setLang}
}

export default useLanguage