import {useContext} from "react";
import {Context} from "../../context/context";
import {LangEnum} from "../../constants/enums";

const HomeContent = () => {
  const {lang} = useContext(Context)

  const result = []

  for (let i = 0; i < 100; i++){
    lang === LangEnum.EN && result.push('Page home under construction')
    lang === LangEnum.RU && result.push('Главная страница в разработке')
    result.push(<br/>)
  }

  return (
      <>
        {result}
      </>
  );
}

export default HomeContent