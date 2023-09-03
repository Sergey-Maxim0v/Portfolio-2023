export interface IProject {
    id: string
    title: string
    date: string
    photos: string[]
    developers: string | number
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
        date: '2022',
        photos: [],
        developers: '4 - 7',
        time: 10,
        technologies: 'Next, Typescript, Material-UI',
        descriptionRu: 'CRM, приложение для учета загруженности сотрудников, ' +
            'сохранения ежедневных итогов работы сотрудников' +
            ' и подготовки сводных таблиц и отчетов.',
        descriptionEn: '// TODO', // TODO: en
        myWorkRu: 'работал над пользовательской частью приложения, настроил взаимодействия пользователя ' +
            'с формами, настроил автосохранения, сохранения, написал интерактивные таблицы',
        myWorkEn: '// TODO ' // TODO: en
    },
    {
        id: 'project__zen-lendos',
        title: 'ZenCode',
        date: '2022',
        photos: [],
        developers: 1,
        time: 2,
        technologies: 'Next, Javascript',
        descriptionRu: 'Лендинг',
        descriptionEn: '// TODO', // TODO: en
        myWorkRu: 'обновил приложение согласно новым макетам, написал простые анимации, ' +
            'скорректировал логики работы приложения, рефакторинг',
        myWorkEn: '// TODO ' // TODO: en
    },
    {
        id: 'project__zen-dock',
        title: 'ZenDock',
        date: '2022',
        photos: [],
        developers: 1,
        time: 1,
        technologies: 'Electron, React, Typescript, Tailwind CSS',
        descriptionRu: 'Приложение работает локально. Сохраняет архив с бухгалтерскими ' +
            'документами в формате DOCX, на основании введенных пользователем данных',
        descriptionEn: '// TODO', // TODO: en
        myWorkRu: 'исправил и настроил приложение ' +
            '(на момент начала работы приложение падало из-за ошибок), ' +
            'скорректировал стили согласно плжеланиям заказчика',
        myWorkEn: '// TODO ' // TODO: en
    },
    {
        id: 'project__rkdr',
        title: 'РКДР',
        date: '2022 - 2023',
        photos: [],
        developers: 3,
        time: 3,
        technologies: 'Nunjucks, JS, SCSS, GSAP',
        descriptionRu: 'Сайт на 1C-Bitrix для гос. учереждения',
        descriptionEn: '// TODO', // TODO: en
        myWorkRu: 'написал вестку, написал скрипты работы интерактивных элементов ' +
            '(модалки, аккордеоны, выпадающие меню...), написал простые анимации',
        myWorkEn: '// TODO ' // TODO: en
    },
    {
        id: 'project__okna',
        title: 'Okna-store',
        date: '2023',
        photos: [],
        developers: 2,
        time: 1,
        technologies: 'Nunjucks, JS, SCSS, GSAP',
        descriptionRu: 'Новый сайт на 1C-Bitrix для производителя пластиковых окон',
        descriptionEn: '// TODO', // TODO: en
        myWorkRu: 'написал вестку, написал скрипты работы интерактивных элементов ' +
            '(модалки, аккордеоны, выпадающие меню...), написал простые анимации',
        myWorkEn: '// TODO ' // TODO: en
    },
//    TODO: описать PRO-32 demo, закомитить. пометку что показывать только с 1 октября 2023
]