import {ISpaceElement} from "./types";
import styles from './styles.module.scss'

const SpaceRandomElement = (): ISpaceElement => {
  const elementList: ISpaceElement[] = [
    {
      element: <p className={styles.element}>test-1</p>,
      key: "test-1"
    },
    {
      element: <p className={styles.element}>test-2</p>,
      key: "test-2"
    },
    {
      element: <p className={styles.element}>test-3</p>,
      key: "test-3"
    },
    {
      element: <p className={styles.element}>test-4</p>,
      key: "test-4"
    },
    {
      element: <p className={styles.element}>test-5</p>,
      key: "test-5"
    }
  ]

  const randomNumb = Math.random()
  const index = Math.round((elementList.length - 1) * randomNumb)
  const element = elementList[index]

  return {element: element.element, key: element.key}
}


export default SpaceRandomElement