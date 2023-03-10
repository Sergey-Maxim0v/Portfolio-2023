import {ISpaceElement} from "./types";
import Icon from "../icon";
import {IconNameEnum} from "../icon/types";
import styles from './styles.module.scss'

const keyList = [
  IconNameEnum.github,
  IconNameEnum.react,
  IconNameEnum.ts,
  IconNameEnum.js,
  IconNameEnum.next,
  IconNameEnum.html,
  IconNameEnum.CSS,
  IconNameEnum.sass,
  IconNameEnum.less,
  IconNameEnum.tailwind,
  IconNameEnum.nj,
  IconNameEnum.webpack,
  IconNameEnum.gitlab,
  IconNameEnum.npm,
  IconNameEnum.figma,
  IconNameEnum.vite,
]


const colorList = ['#434343', '#848484', '#641894', '#742DBC', '#BC6DFF', '#BA3C15', '#FBA71C', '#F9C909'
  , '#F9E501', '#185D35', '#649009', '#9CC50F', '#C4E31E', '#F0F949', '#0C635F', '#03B3A1', '#15606F'
  , '#1D8D8A', '#3EE4C2', '#17445A', '#942941', '#C82255', '#F6198D']

const getColor = () => colorList[Math.round((colorList.length - 1) * Math.random())]

const SpaceRandomElement = (): ISpaceElement => {
  const randomNumb = Math.random()
  const index = Math.round((keyList.length - 1) * randomNumb)
  const color = getColor()

  const element = (
      <div style={{width: '100%', height: '100%', color: color}}>
        <Icon className={styles.element} iconName={keyList[index]}/>
      </div>
  )

  return {element: element, key: keyList[index]}
}

export default SpaceRandomElement