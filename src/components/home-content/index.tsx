import {useContext} from "react";
import {Context} from "../../context/context";
import {LangEnum} from "../../constants/enums";

const HomeContent = () => {
  const {lang} = useContext(Context)

  const result = []

  for (let i = 0; i < 100; i++) {
    const node =
        <div key={i}>
          {lang === LangEnum.EN && 'Page home under construction'}
          {lang === LangEnum.RU && 'Главная страница в разработке'}
          <br/>
        </div>
    result.push(node)
  }

  return (
      <>
        {result}
      </>
  );
}

export default HomeContent