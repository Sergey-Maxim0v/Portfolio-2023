import { LangEnum } from "../../constants/enums";
import { useContext } from "react";
import { Context } from "../../context/context";
import styles from "./styles.module.scss";
import { CONTACTS } from "./constants";
import Icon from "../icon";
import classNames from "classnames";

const ContactsContent = () => {
  const { lang } = useContext(Context);

  return (
    <section className={styles.contacts}>
      <div className={styles.contacts__text}>
        <p className={styles.contacts__textElement}>+7 909 233 60 62</p>

        <p className={styles.contacts__textElement}>dev9092336062@gmail.com</p>
      </div>

      <nav className={styles.contacts__links}>
        <ul className={styles.contacts__list}>
          {CONTACTS.map((contact, index) => {
            const randomAnimationClass = styles[`animation_${index + 1}`];

            return (
              <li
                key={contact.id}
                className={classNames(
                  styles.contacts__element,
                  randomAnimationClass,
                )}
              >
                <a
                  className={styles.contacts__link}
                  href={contact.link}
                  target="_blank"
                >
                  <Icon
                    className={styles.contacts__icon}
                    iconName={contact.icon}
                  />

                  <p className={styles.contacts__desc}>
                    {lang === LangEnum.RU && contact.nameRu}
                    {lang === LangEnum.EN && contact.nameEn}
                  </p>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </section>
  );
};

export default ContactsContent;
