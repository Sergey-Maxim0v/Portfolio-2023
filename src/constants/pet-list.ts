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
    photos: [],
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
    photos: [],
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
    photos: [],
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
    photos: [],
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
    title: "Portfolio 2022",
    date: "2022",
    photos: [],
    gitLink: "https://github.com/Sergey-Maxim0v/Portfolio",
    pageLink: "https://sergey-maxim0v.github.io/Portfolio/",
    technologies: "JS, CSS, HTML",
    descriptionRu: "Мой сайт портфолио 2022 года.",
    descriptionEn: "My 2022 portfolio website.",
  },
  {
    id: "pet-5",
    number: 5,
    title: "CRM-frontend",
    date: "2023",
    photos: [],
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
    id: "pet-6",
    number: 6,
    title: "React-Select",
    date: "2023",
    photos: [],
    gitLink: "https://github.com/Sergey-Maxim0v/react-select",
    pageLink: "https://sergey-maxim0v.github.io/react-select/",
    technologies: "React, Typescript, Vite.",
    descriptionRu: "UI-kit компонент, настраиваемый селект.",
    descriptionEn: "UI-kit component, custom select.",
  },
  {
    id: "pet-7",
    number: 7,
    title: "React-Slider",
    date: "2023",
    photos: [],
    gitLink: "https://github.com/Sergey-Maxim0v/react-slider",
    pageLink: "https://sergey-maxim0v.github.io/react-slider/",
    technologies: "React, Typescript, Vite.",
    descriptionRu: "UI-kit компонент, настраиваемый слайдер (карусель).",
    descriptionEn: "UI-kit component, custom slider (carousel).",
  },
];
