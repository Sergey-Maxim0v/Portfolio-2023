export interface IProject {
  id: string;
  title: string;
  date: string;
  photos: string[];
  developers: string | number;
  time: number;
  technologies: string;
  descriptionRu: string;
  descriptionEn: string;
  myWorkRu: string;
  myWorkEn: string;
}

export const PROJECTS_LIST: IProject[] = [
  {
    id: "project__zena",
    title: "Zen-Auto",
    date: "2022",
    photos: [],
    developers: "4 - 7",
    time: 10,
    technologies: "Next, Typescript, Material-UI",
    descriptionRu:
      "CRM, приложение для учета загруженности сотрудников, " +
      "сохранения ежедневных итогов работы сотрудников" +
      " и подготовки сводных таблиц и отчетов.",
    descriptionEn:
      "CRM, an application for tracking the workload of employees, " +
      "save the daily results of employees " +
      "and compiling summary tables and reports.",
    myWorkRu:
      "работал над пользовательской частью приложения, настроил взаимодействия пользователя " +
      "с формами, настроил автосохранения, сохранения, написал интерактивные таблицы",
    myWorkEn:
      "worked on the user part of the application, set up user interaction" +
      "with forms, configured autosave, saved, wrote interactive tables",
  },
  {
    id: "project__zen-lendos",
    title: "ZenCode",
    date: "2022",
    photos: [],
    developers: 1,
    time: 2,
    technologies: "Next, Javascript",
    descriptionRu: "Лендинг",
    descriptionEn: "Landing",
    myWorkRu:
      "обновил приложение согласно новым макетам, написал простые анимации, " +
      "скорректировал логики работы приложения, рефакторинг",
    myWorkEn:
      "updated the application according to the new layouts, wrote simple animations, " +
      "corrected the logic of the application, refactoring",
  },
  {
    id: "project__zen-dock",
    title: "ZenDock",
    date: "2022",
    photos: [],
    developers: 1,
    time: 1,
    technologies: "Electron, React, Typescript, Tailwind CSS",
    descriptionRu:
      "Приложение работает локально. Сохраняет архив с бухгалтерскими " +
      "документами в формате DOCX, на основании введенных пользователем данных",
    descriptionEn:
      "The application is running locally. " +
      "Saves an archive with accounting documents in DOCX format, " +
      "based on the data entered by the user",
    myWorkRu:
      "исправил и настроил приложение " +
      "(на момент начала работы приложение падало из-за ошибок), " +
      "скорректировал стили согласно пожеланиям заказчика",
    myWorkEn:
      "исправили и настроили приложение " +
      "(на момент начала работы приложение вылетало из-за ошибок), " +
      "настроили стили согласно пожеланиям заказчика",
  },
  {
    id: "project__rkdr",
    title: "РКДР",
    date: "2022 - 2023",
    photos: [],
    developers: 3,
    time: 3,
    technologies: "Nunjucks, JS, SCSS, GSAP",
    descriptionRu: "Сайт на 1C-Bitrix для гос. учреждения",
    descriptionEn: "Site on 1C-Bitrix for a government agency",
    myWorkRu:
      "написал верстку, написал скрипты работы интерактивных элементов " +
      "(модалки, аккордеоны, выпадающие меню...), написал простые анимации",
    myWorkEn:
      "wrote the layout, wrote scripts for interactive elements " +
      "(modals, accordions, dropdown menus...), wrote simple animations",
  },
  {
    id: "project__okna",
    title: "Okna-store",
    date: "2023",
    photos: [],
    developers: 2,
    time: 1,
    technologies: "Nunjucks, JS, SCSS, GSAP",
    descriptionRu:
      "Обновленный сайт на 1C-Bitrix для производителя пластиковых окон",
    descriptionEn:
      "Updated site on 1C-Bitrix for the manufacturer of plastic windows.",
    myWorkRu:
      "Написал верстку, написал скрипты работы интерактивных элементов " +
      "(модалки, аккордеоны, выпадающие меню...), написал простые анимации",
    myWorkEn:
      "Wrote layout, wrote scripts for interactive elements " +
      "(modals, accordions, drop-down menus...), wrote simple animations",
  },
  // TODO: скрыто до 01.10.2023
  // {
  //     id: 'pro32-demo-endpoint',
  //     title: 'Pro32-demo',
  //     date: '2023',
  //     photos: [],
  //     developers: 1,
  //     time: 1,
  //     technologies: 'React, MobX, Styled Components',
  //     descriptionRu: 'Демо приложения для лендинга.',
  //     descriptionEn: 'Demo app for Landing',
  //     myWorkRu: 'Написал демо: верстка, логики, ui-kit компоненты (аккордеоны, кнопки, формы).',
  //     myWorkEn: 'Wrote a demo: layout, logics, ui-kit components (accordions, buttons, forms).'
  // },
];
