export interface IProject {
  id: string;
  number: number;
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
    number: 1,
    title: "Zena",
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
      "Разработал пользовательскую часть приложения, настроил взаимодействие пользователя с формами, " +
      "настроил автосохранение форм, разработал интерактивные таблицы.",
    myWorkEn:
      "Worked on the user part of the application, set up user interaction" +
      "with forms, configured autosave, saved, wrote interactive tables.",
  },
  {
    id: "project__zen-lendos",
    number: 2,
    title: "ZenCode",
    date: "2022",
    photos: [],
    developers: 1,
    time: 2,
    technologies: "Next, Javascript",
    descriptionRu: "Лендинг",
    descriptionEn: "Landing",
    myWorkRu:
      "Обновил приложение согласно новым макетам, добавил простые анимации, " +
      "скорректировал логику работы приложения, провел рефакторинг.",
    myWorkEn:
      "Updated the application according to the new layouts, wrote simple animations, " +
      "corrected the logic of the application, refactoring.",
  },
  {
    id: "project__zen-dock",
    number: 3,
    title: "ZenDock",
    date: "2022",
    photos: [],
    developers: 1,
    time: 1,
    technologies: "Electron, React, Typescript, Tailwind CSS, Material-UI",
    descriptionRu:
      "Приложение работает локально. Сохраняет архив с бухгалтерскими " +
      "документами в формате DOCX, на основании введенных пользователем данных.",
    descriptionEn:
      "The application is running locally. " +
      "Saves an archive with accounting documents in DOCX format, " +
      "based on the data entered by the user.",
    myWorkRu:
      "Исправил код и настроил приложение " +
      "(на момент начала работы в приложении присутствовали критичные для запуска ошибки) " +
      "скорректировал стили в ui части и генерируемых документах согласно пожеланиям заказчика.",
    myWorkEn:
      "Fixed and configured the application " +
      "(at the time of the start of work, the application was crashing due to errors), " +
      "adjusted the styles according to the wishes of the customer.",
  },
  {
    id: "project__rkdr",
    number: 4,
    title: "Сайт гос учреждения",
    date: "2022 - 2023",
    photos: [],
    developers: 3,
    time: 3,
    technologies: "Nunjucks, JS, SCSS, GSAP",
    descriptionRu: "Сайт на 1C-Bitrix для гос. учреждения",
    descriptionEn: "Site on 1C-Bitrix for a government agency",
    myWorkRu:
      "Сверстал страницы и UI Kit по макетам, разработал скрипты работы интерактивных элементов " +
      "(модальные окна, аккордеоны, выпадающие меню и т.д.), добавил простые анимации.",
    myWorkEn:
      "Wrote the layout, wrote scripts for interactive elements " +
      "(modals, accordions, dropdown menus...), wrote simple animations.",
  },
  {
    id: "project__okna",
    number: 5,
    title: "Okna-store",
    date: "2023",
    photos: [],
    developers: 2,
    time: 1,
    technologies: "Nunjucks, JS, SCSS, GSAP",
    descriptionRu:
      "Обновленный сайт на 1C-Bitrix для производителя пластиковых окон.",
    descriptionEn:
      "Updated site on 1C-Bitrix for the manufacturer of plastic windows.",
    myWorkRu:
      "Сверстал страницы и UI Kit по макетам, разработал скрипты работы интерактивных элементов " +
      "(модальные окна, аккордеоны, выпадающие меню и т.д.), добавил простые анимации.",
    myWorkEn:
      "Wrote layout, wrote scripts for interactive elements " +
      "(modals, accordions, drop-down menus...), wrote simple animations.",
  },
  {
    id: "pro32-demo",
    number: 6,
    title: "Интерактивный обзор антивируса Pro32",
    date: "2023",
    photos: [],
    developers: 1,
    time: 1,
    technologies: "React, MobX, Styled Components",
    descriptionRu: "Демо приложения для лендинга.",
    descriptionEn: "Demo app for Landing",
    myWorkRu:
      "Сверстал демо, согласно макетам клиента, " +
      "написал анимации и логику интерактивных элементов: аккордеоны, кнопки, формы.",
    myWorkEn:
      "Wrote a demo based on client layouts, " +
      "wrote animation and logic of interactive elements: accordions, buttons, forms.",
  },
];
