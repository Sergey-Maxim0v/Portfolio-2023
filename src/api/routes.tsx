import {BASE_URL} from "./baseURL";

export interface IRoute {
  readonly path: string
  readonly titleRu: string
  readonly titleEn: string
}

export const ROUTES: { [key: string]: IRoute } = {
  home: {
    path: `${BASE_URL}/`,
    titleRu: 'Главная',
    titleEn: 'Home'
  },
  projects: {
    path: `${BASE_URL}/projects`,
    titleRu: 'Проекты',
    titleEn: 'Projects'
  },
  contacts: {
    path: `${BASE_URL}/contacts`,
    titleRu: 'Контакты',
    titleEn: 'Contacts'
  }
}