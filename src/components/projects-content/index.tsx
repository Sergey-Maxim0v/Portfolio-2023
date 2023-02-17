import {LangEnum} from "../../constants/enums";
import {useContext} from "react";
import {Context} from "../../context/context";

const ProjectsContent = () => {
  const {lang} = useContext(Context)

  return (
      <>
        {lang === LangEnum.EN && 'Page projects under construction'}
        {lang === LangEnum.RU && 'Страница "Проекты" в разработке'}
      </>
  );
}

export default ProjectsContent