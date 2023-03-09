import {ISpaceElement} from "./types";
import styles from './styles.module.scss'
import Icon from "../icon";
import {IconNameEnum} from "../icon/types";


const SpaceRandomElement = (): ISpaceElement => {
  const elementList: ISpaceElement[] = [
    {
      element: <Icon className={styles.element} iconName={IconNameEnum.github}/>,
      key: "github"
    },
    {
      element: <Icon className={styles.rotate} iconName={IconNameEnum.react}/>,
      key: "react"
    },
    {
      element: <Icon className={styles.element} iconName={IconNameEnum.ts}/>,
      key: "ts"
    },
    {
      element: <Icon className={styles.element} iconName={IconNameEnum.js}/>,
      key: "js"
    },
    {
      element: <Icon className={styles.element} iconName={IconNameEnum.next}/>,
      key: "next"
    },
    {
      element: <Icon className={styles.element} iconName={IconNameEnum.html}/>,
      key: "html"
    },
    {
      element: <Icon className={styles.element} iconName={IconNameEnum.CSS}/>,
      key: "CSS"
    },
    {
      element: <Icon className={styles.element} iconName={IconNameEnum.sass}/>,
      key: "sass"
    }
  ]

  const randomNumb = Math.random()
  const index = Math.round((elementList.length - 1) * randomNumb)
  const element = elementList[index]

  return {element: element.element, key: element.key}
}


export default SpaceRandomElement