import {useContext, useEffect} from "react";
import {ThemeEnum} from "../constants/enums";
import {Context} from "../context/context";

const useWindowTheme = () =>{
  const {theme, setTheme} = useContext(Context)

  useEffect(() => {
    if (!theme) {
      window.matchMedia("(prefers-color-scheme: dark)")
          .matches
          ? setTheme(ThemeEnum.DARK)
          : setTheme(ThemeEnum.LIGHT)
    }
  }, [])
}

export default useWindowTheme