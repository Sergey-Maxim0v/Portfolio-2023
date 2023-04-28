export interface IProject {
    id: string
    title: string
    photos: string[]
    developers: string
    time: number
    technologies: string
    descriptionRu: string
    descriptionEn: string
    myWorkRu: string
    myWorkEn: string
}

export const PROJECTS_LIST: IProject[] = [
    {
        id: 'project__zena',
        title: 'Zen-Auto',
        photos: [],
        developers: '4 - 7',
        time: 10,
        technologies: 'Next, Typescript, Material-UI',
        descriptionRu: 'CRM, приложение для учета загруженности сотрудников, ' +
            'сохранения ежедневных итогов работы сотрудников' +
            ' и&nbsp;подготовки сводных таблиц и отчетов.',
        descriptionEn: '// TODO', // TODO: en
        myWorkRu: 'Пользовательская часть приложения: настройка взаимодействия пользователя ' +
            'с&nbsp;формами, настройка автосохранений, сохранений, интерактивные таблицы.',
        myWorkEn: '// TODO ' // TODO: en
    },
    {
        id: 'project__zen-lendos',
        title: 'ZenCode',
        photos: [],
        developers: '1',
        time: 2,
        technologies: 'Next, Javascript',
        descriptionRu: 'Лендинг',
        descriptionEn: '// TODO', // TODO: en
        myWorkRu: 'Обновление приложения согласно новым макетам, простые анимации, ' +
            'корректировка логик работы приложения, рефакторинг.',
        myWorkEn: '// TODO ' // TODO: en
    },
    {
        id: 'project__zen-dock',
        title: 'ZenDock',
        photos: [],
        developers: '1',
        time: 1,
        technologies: 'Electron, React, Typescript, Tailwind CSS',
        descriptionRu: 'Приложение работает локально. Сохраняет архив с&nbsp;бухгалтерскими ' +
            'документами в&nbsp;формате DOCX, на&nbsp;основании введенных пользователем данных',
        descriptionEn: '// TODO', // TODO: en
        myWorkRu: 'Исправление и настройка приложения (на&nbsp;момент начала работы приложение не&nbsp;работало), ' +
            'корректировка стилей',
        myWorkEn: '// TODO ' // TODO: en
    },
    {
        id: 'project__rkdr',
        title: 'РКДР',
        photos: [],
        developers: '3',
        time: 3,
        technologies: 'Nunjucks, JS, SCSS, GSAP',
        descriptionRu: 'Новый сайт на 1C-Bitrix для гос. учереждения',
        descriptionEn: '// TODO', // TODO: en
        myWorkRu: 'Подготовка верстки, написание скриптов работы интерактивных элементов ' +
            '(модалки, аккордеоны, выпадающие меню...), простые анимации',
        myWorkEn: '// TODO ' // TODO: en
    },
    {
        id: 'project__okna',
        title: 'Okna-store',
        photos: [],
        developers: '2',
        time: 1,
        technologies: 'Nunjucks, JS, SCSS, GSAP',
        descriptionRu: 'Новый сайт на 1C-Bitrix для производителя пластиковых окон',
        descriptionEn: '// TODO', // TODO: en
        myWorkRu: 'Подготовка верстки, написание скриптов работы интерактивных элементов ' +
            '(модалки, аккордеоны, выпадающие меню...), простые анимации',
        myWorkEn: '// TODO ' // TODO: en
    }
]