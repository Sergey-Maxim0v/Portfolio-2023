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
        title: 'Zena',
        photos: [],
        developers: '4 - 6',
        time: 7,
        technologies: '',
        descriptionRu: '',
        descriptionEn: '',
        myWorkRu: '',
        myWorkEn: ''
    },
    {
        id: 'project__zen-lendos',
        title: 'ZenCode website',
        photos: [],
        developers: '1',
        time: 2,
        technologies: '',
        descriptionRu: '',
        descriptionEn: '',
        myWorkRu: '',
        myWorkEn: ''
    },
    {
        id: 'project__zen-dock',
        title: 'ZenDock',
        photos: [],
        developers: '1',
        time: 1,
        technologies: '',
        descriptionRu: '',
        descriptionEn: '',
        myWorkRu: '',
        myWorkEn: ''
    },
    {
        id: 'project__rkdr',
        title: 'РКДР',
        photos: [],
        developers: '3',
        time: 3,
        technologies: '',
        descriptionRu: '',
        descriptionEn: '',
        myWorkRu: '',
        myWorkEn: ''
    },
    {
        id: 'project__okna',
        title: 'Okna-store',
        photos: [],
        developers: '2',
        time: 1,
        technologies: '',
        descriptionRu: '',
        descriptionEn: '',
        myWorkRu: '',
        myWorkEn: ''
    }
]