import { IContact } from "./types";
import { IconNameEnum } from "../icon/types";

export const CONTACTS: IContact[] = [
  {
    id: "contact-1",
    nameEn: "Call",
    nameRu: "Позвонить",
    link: "tel:+79092336062",
    icon: IconNameEnum.phone,
  },
  {
    id: "contact-2",
    nameEn: "Telegram",
    nameRu: "Telegram",
    link: "https://telegram.me/SergeyMaxim0v",
    icon: IconNameEnum.tg,
  },
  {
    id: "contact-3",
    nameEn: "Whatsapp",
    nameRu: "Whatsapp",
    link: "https://wa.me/79092336062",
    icon: IconNameEnum.whatsapp,
  },
  {
    id: "contact-4",
    nameEn: "Email",
    nameRu: "Email",
    link: "mailto:dev9092336062@gmail.com",
    icon: IconNameEnum.email,
  },
  {
    id: "contact-5",
    nameEn: "Github",
    nameRu: "Github",
    link: "https://github.com/Sergey-Maxim0v",
    icon: IconNameEnum.github,
  },
  {
    id: "contact-6",
    nameEn: "Gitlab",
    nameRu: "Gitlab",
    link: "https://gitlab.com/Sergey-Maxim0v",
    icon: IconNameEnum.gitlab,
  },
  {
    id: "contact-7",
    nameEn: "Vk",
    nameRu: "ВКонтакте",
    link: "https://vk.com/id88699816",
    icon: IconNameEnum.vk,
  },
  {
    id: "contact-8",
    nameEn: "Codewars",
    nameRu: "Codewars",
    link: "https://www.codewars.com/users/Sergey-Maxim0v",
    icon: IconNameEnum.codewars,
  },
  {
    id: "contact-9",
    nameEn: "LeetCode",
    nameRu: "LeetCode",
    link: "https://leetcode.com/Sergey-Maxim0v/",
    icon: IconNameEnum.leetcode,
  },
];
