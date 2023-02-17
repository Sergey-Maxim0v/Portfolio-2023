import {useContext} from "react";
import {Context} from "../../context/context";
import {LangEnum} from "../../constants/enums";

const HomeContent = () => {
  const {lang} = useContext(Context)

  return (
      <>
        {lang === LangEnum.EN && 'Page home under construction'}
        {lang === LangEnum.RU && 'Главная страница в разработке'}
      </>
  );
}

export default HomeContent