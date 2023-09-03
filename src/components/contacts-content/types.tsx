import { IconNameEnum } from "../icon/types";

export interface IContact {
  id: string;
  nameRu: string;
  nameEn: string;
  link: string;
  icon: IconNameEnum;
}
