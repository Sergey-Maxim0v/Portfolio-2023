import {LangEnum} from "../../constants/enums";
import {useContext} from "react";
import {Context} from "../../context/context";

const ContactsContent = () => {
  const {lang} = useContext(Context)

  return (
      <>
        {lang === LangEnum.EN && 'Page contacts under construction'}
        {lang === LangEnum.RU && 'Страница "Контакты" в разработке'}
      </>
  );
}

export default ContactsContent