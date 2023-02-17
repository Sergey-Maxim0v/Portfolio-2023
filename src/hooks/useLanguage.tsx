import useLocalStorage from "./useLocalStorage";
import {LangEnum} from "../constants/enums";

const useLanguage = () => {
  const [actualLanguage, setActualLanguage] = useLocalStorage<string>("lang", LangEnum.RU);

  return {actualLanguage, setActualLanguage}
}

export default useLanguage