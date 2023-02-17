import useLocalStorage from "./useLocalStorage";
import { ThemeEnum} from "../constants/enums";
import {useEffect} from "react";

const useTheme = () => {
  const [theme, setTheme] = useLocalStorage<ThemeEnum>("theme", ThemeEnum.LIGHT);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return {theme, setTheme}
}

export default useTheme