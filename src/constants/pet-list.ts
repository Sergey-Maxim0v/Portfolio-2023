export interface IPetProject {
  id: string;
  number: number;
  title: string;
  date: string;
  photos: string[];
  gitLink: string;
  technologies: string;
  descriptionRu: string;
  descriptionEn: string;
  pageLink?: string;
  purposeRu?: string;
  purposeEn?: string;
}

export const PET_LIST: IPetProject[] = [
  {
    id: "pet-0",
    number: 0,
    title: "Turtle",
    date: "2021",
    photos: [
      "pet-0-turtle-all.png",
      "pet-0-turtle-buttons-push.png",
      "pet-0-turtle-buttons.png",
      "pet-0-turtle-console.png",
    ],
    gitLink: "https://github.com/Sergey-Maxim0v/Turtle-JS-Training",
    pageLink: "https://sergey-maxim0v.github.io/Turtle-JS-Training/",
    purposeRu: "Тренировка JavaScript",
    purposeEn: "JavaScript training",
    technologies: "JS, CSS, HTML",
    descriptionRu:
      "Пользователь управляет расположением выделенного квадрата (Turtle).",
    descriptionEn:
      "The user controls the location of the selected square (Turtle).",
  },
  {
    id: "pet-1",
    number: 1,
    title: "Clicker mini-game",
    date: "2021",
    photos: [
      "pet-1-clicker-section1.png",
      "pet-1-clicker-section2.png",
      "pet-1-clicker-section2.png",
      "pet-1-clicker-section3-game.png",
    ],
    gitLink: "https://github.com/Sergey-Maxim0v/clicker-mini-game",
    pageLink: "https://sergey-maxim0v.github.io/clicker-mini-game/",
    purposeRu: "Тренировка JavaScript",
    purposeEn: "JavaScript training",
    technologies: "JS, CSS, HTML",
    descriptionRu: "Игра-кликер.",
    descriptionEn: "Clicker game.",
  },
  {
    id: "pet-2",
    number: 2,
    title: "Slider",
    date: "2021",
    photos: ["pet-2-slider.png"],
    gitLink: "https://github.com/Sergey-Maxim0v/Slider-JS-Training",
    pageLink: "https://sergey-maxim0v.github.io/Slider-JS-Training/",
    purposeRu: "Тренировка JavaScript",
    purposeEn: "JavaScript training",
    technologies: "JS, CSS, HTML",
    descriptionRu: "Слайдер.",
    descriptionEn: "Slider.",
  },
  {
    id: "pet-3",
    number: 3,
    title: "Notepad",
    date: "2022",
    photos: ["pet-3-notepad.png"],
    gitLink: "https://github.com/Sergey-Maxim0v/Notepad",
    pageLink: "https://sergey-maxim0v.github.io/Notepad/",
    purposeRu: "Работа с файлами в браузере",
    purposeEn: "Working with files in the browser",
    technologies: "JS, CSS, HTML",
    descriptionRu:
      "Онлайн текстовый редактор.\n" +
      "Приложение позволяет создать, загрузить, изменить и сохранить текстовый файл в формате 'txt'.",
    descriptionEn:
      "Online text editor.\n" +
      "The application allows you to create, download, edit and save a text file in 'txt' format.",
  },
  {
    id: "pet-4",
    number: 4,
    title: "Portfolio",
    date: "2022",
    photos: [
      "pet-4-portfolio-1.png",
      "pet-4-portfolio-2.png",
      "pet-4-portfolio-3.png",
      "pet-4-portfolio-4.png",
    ],
    gitLink: "https://github.com/Sergey-Maxim0v/Portfolio",
    pageLink: "https://sergey-maxim0v.github.io/Portfolio/",
    technologies: "JS, CSS, HTML",
    descriptionRu: "Мой сайт портфолио 2022 года.",
    descriptionEn: "My 2022 portfolio website.",
  },
  {
    id: "pet-5",
    number: 5,
    title: "React-Select",
    date: "2023",
    photos: [
      "pet-5-select-1.png",
      "pet-5-select-2.png",
      "pet-5-select-3.png",
      "pet-5-select-4.png",
    ],
    gitLink: "https://github.com/Sergey-Maxim0v/react-select",
    pageLink: "https://sergey-maxim0v.github.io/react-select/",
    technologies: "React, Typescript, Vite.",
    descriptionRu: "UI-kit компонент, настраиваемый селект.",
    descriptionEn: "UI-kit component, custom select.",
  },
  {
    id: "pet-6",
    number: 6,
    title: "React-Slider",
    date: "2023",
    photos: ["pet-6-slider.png"],
    gitLink: "https://github.com/Sergey-Maxim0v/react-slider",
    pageLink: "https://sergey-maxim0v.github.io/react-slider/",
    technologies: "React, Typescript, Vite.",
    descriptionRu: "UI-kit компонент, настраиваемый слайдер (карусель).",
    descriptionEn: "UI-kit component, custom slider (carousel).",
  },
  {
    id: "pet-7",
    number: 7,
    title: "CRM-frontend",
    date: "2023",
    photos: [
      "pet-7-crm-app.png",
      "pet-7-crm-filter-sort.png",
      "pet-7-crm-modal-add.png",
      "pet-7-crm-modal-delete.png",
      "pet-7-crm-modal-error.png",
      "pet-7-crm-modal-update.png",
      "pet-7-crm-select.png",
    ],
    gitLink: "https://github.com/Sergey-Maxim0v/CRM-frontend",
    technologies: "React 18, Typescript, Vite.",
    descriptionRu:
      "Тестовое задание. React-приложение позволяет загружать с сервера, " +
      "изменять, сохранять, удалять строки списка клиентов.",
    descriptionEn:
      "React application allows you to load from the server, " +
      "change, save, delete customer list lines.",
  },
  {
    id: "pet-8",
    number: 8,
    title: "IP Check",
    date: "2024",
    photos: ["pet-8-ipcheck.png"],
    gitLink: "https://github.com/Sergey-Maxim0v/ip-check",
    pageLink: "https://sergey-maxim0v.github.io/ip-check/",
    technologies: "React, Typescript, Vite, react-yandex-maps.",
    descriptionRu: "Приложение просмотра информации по IP и геолокации",
    descriptionEn: "Application for viewing information by IP and geolocation",
  },
  {
    id: "pet-9",
    number: 9,
    title: "Yandex landing",
    date: "2024",
    photos: ["pet-9-1.png", "pet-9-2.png", "pet-9-3.png"],
    gitLink: "https://github.com/Sergey-Maxim0v/yandex-landing-2024",
    pageLink: "https://sergey-maxim0v.github.io/yandex-landing-2024/",
    technologies: "JS, CSS, HTML",
    descriptionRu:
      "Небольшой лендинг. Тестовое задание от яндекса. Написал на CSS, JS, HTML без сборщиков и без других технологий. Несколько необычных дизайнерских решений по адаптиву компонентов. Два слайдера с разной логикой.",
    descriptionEn:
      "Landing page. Test task from Yandex. Several unusual design solutions for adapting components. Two sliders with different logic. The buttons in the first section scroll the page to the corresponding sections.",
  },
];
