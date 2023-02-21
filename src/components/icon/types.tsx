export interface IIcon {
  className: string;
  iconName: IconNameEnum
}

export enum IconNameEnum {
  phone = 'phone',
  tg = 'tg',
  whatsapp = 'whatsapp',
  email = 'email',
  github = 'github',
  gitlab = 'gitlab',
  vk = 'vk',
  codewars = 'codewars'
}