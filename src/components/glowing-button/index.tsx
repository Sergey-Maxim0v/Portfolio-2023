import styles from "./styles.module.scss";
import { FC, useContext } from "react";
import { IGlowingButton } from "./types";
import { Context } from "../../context/context";
import { LangEnum } from "../../constants/enums";
import classNames from "classnames";

const GlowingButton: FC<IGlowingButton> = ({ textRu, textEn, ...props }) => {
  const { lang } = useContext(Context);

  return (
    <button className={classNames(styles.button, "font__semibold")} {...props}>
      {lang === LangEnum.RU && textRu}
      {lang === LangEnum.EN && textEn}
    </button>
  );
};

export default GlowingButton;
