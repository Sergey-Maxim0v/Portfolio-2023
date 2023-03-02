import styles from './styles.module.scss'
import {FC, useContext} from "react";
import {IGlowingButton} from "./types";
import {Context} from "../../context/context";
import {LangEnum} from "../../constants/enums";

const GlowingButton: FC<IGlowingButton> = ({textRu, textEn, ...props}) => {
  const {lang} = useContext(Context)

  return (
      <button
          className={styles.button}
          {...props}
      >
        {lang === LangEnum.RU && textRu}
        {lang === LangEnum.EN && textEn}
      </button>
  )
}

export default GlowingButton