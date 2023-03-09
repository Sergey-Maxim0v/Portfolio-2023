import {ISpaceElement} from "./types";
import Icon from "../icon";
import {IconNameEnum} from "../icon/types";
import styles from './styles.module.scss'

const keyList = [
  // IconNameEnum.github,
  // IconNameEnum.react,
  // IconNameEnum.ts,
  // IconNameEnum.js,
  // IconNameEnum.next,
  // IconNameEnum.html,
  // IconNameEnum.CSS,
  // IconNameEnum.sass,
  // IconNameEnum.less,
  // IconNameEnum.tailwind,
  // IconNameEnum.nj,
  // IconNameEnum.webpack,
  // IconNameEnum.gitlab,
  // IconNameEnum.npm,
  // IconNameEnum.figma,
  IconNameEnum.vite,
]

const SpaceRandomElement = (): ISpaceElement => {
  const randomNumb = Math.random()
  const index = Math.round((keyList.length - 1) * randomNumb)
  const element = <Icon className={styles.element} iconName={keyList[index]}/>

  return {element: element, key: keyList[index]}
}


export default SpaceRandomElement