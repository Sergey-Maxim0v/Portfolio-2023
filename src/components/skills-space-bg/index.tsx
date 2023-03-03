import styles from './styles.module.scss'
import {LegacyRef, useRef} from "react";
import {IElementsSpaceBG} from "./types";
import useSpaseAnimation from "../../hooks/useSpaseAnimation";

const nodes: IElementsSpaceBG[] = [
  //  TODO: вынести в отдельный файл экспортируемый массив элементов
  {
    element: (
        <span>test1</span>
    ),
    key: 'key_1'
  },
  {
    element: (
        <span>test2</span>
    ),
    key: 'key_2'
  },
  {
    element: (
        <span>test4</span>
    ),
    key: 'key_3'
  }
]


const SkillsCloudBg = () => {
  const containerRef: LegacyRef<HTMLDivElement> | null = useRef(null);

  const nodeList = useSpaseAnimation(containerRef)

  return (
      <div
          ref={containerRef}
          className={styles.space}
      >
        {nodeList.map((node, index) => (
            <div
                key={index + node.key}
            >
              {node.element}
            </div>
        ))}
      </div>
  )
}

export default SkillsCloudBg
