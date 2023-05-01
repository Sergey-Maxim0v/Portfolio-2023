import {IProjectElement} from "./types";
import {FC, useContext} from "react";
import classNames from "classnames";
import styles from './styles.module.scss'
import {LangEnum} from "../../constants/enums";
import {Context} from "../../context/context";
import getWordDependingNumber from "../../utils/getWordDependingNumber";

const ProjectElement: FC<IProjectElement> = ({className, project}) => {
    const {lang} = useContext(Context)

    const getMonthWord = (num: number): string => {
        if (lang === LangEnum.RU) {
            return getWordDependingNumber({
                num,
                word_0: 'месяцев',
                word_1: 'месяц',
                word_2: 'месяца',
                word_5: 'месяцев'
            })
        }

        if (lang === LangEnum.EN) {
            return getWordDependingNumber({
                num,
                word_0: 'month',
                word_1: 'month',
                word_2: 'months',
                word_5: 'months'
            })
        }

        return ''
    }

    const getTeamWord = (num: number | string): string => {
        if (typeof num !== 'number') {
            if (lang === LangEnum.RU) {
                return 'разработчиков'
            }
            if (lang === LangEnum.EN) {
                return 'developers'
            }
        }

        if (lang === LangEnum.RU) {
            return getWordDependingNumber({
                num,
                word_0: 'разработчиков',
                word_1: 'разработчик',
                word_2: 'разработчика',
                word_5: 'разработчиков'
            })
        }

        if (lang === LangEnum.EN) {
            return getWordDependingNumber({
                num,
                word_0: 'developers',
                word_1: 'developer',
                word_2: 'developers',
                word_5: 'developers'
            })
        }

        return ''
    }

    return (
        <div
            className={classNames(styles.projectElement, className)}
        >
            <p className="">
                {project.title}
                <span className="">{` ( ${project.date} )`}</span>
            </p>

            <p className="">
                {lang === LangEnum.RU && `${project.descriptionRu}`}
                {lang === LangEnum.EN && `${project.descriptionEn}`}
            </p>

            <p className="">
                {lang === LangEnum.RU && `Стек технологий: ${project.technologies}.`}
                {lang === LangEnum.EN && `Technology stack: ${project.technologies}.`}
            </p>

            <p className="">
                {lang === LangEnum.RU && `Команда: ${project.developers} ${getTeamWord(project.developers)}.`}
                {lang === LangEnum.EN && `Team of ${project.developers} ${getTeamWord(project.developers)}.`}
            </p>

            <p className="">
                {lang === LangEnum.RU && `Работал  над проектом: ${project.time} ${getMonthWord(project.time)}.`}
                {lang === LangEnum.EN && `Worked on the project for ${project.time} ${getMonthWord(project.time)}.`}
            </p>

            <p className="">
                {lang === LangEnum.RU && `Выполненные работы: ${project.myWorkRu}.`}
                {lang === LangEnum.EN && `completed works: ${project.myWorkEn}.`}
            </p>
        </div>
    )
}

export default ProjectElement