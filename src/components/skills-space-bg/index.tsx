import styles from './styles.module.scss'
import {LegacyRef, useRef, useState} from "react";
import {ISpaceAnimationElement} from "./types";
import useSpaceAnimation from "../../hooks/useSpaceAnimation";

"../../hooks/useSpaceAnimation";

const SkillsSpaceBg = () => {
  const containerRef: LegacyRef<HTMLDivElement> = useRef(null);
  const [elementList, setElementList] = useState<ISpaceAnimationElement []>([])

  useSpaceAnimation({containerRef, elementList, setElementList})

  return (
      <div
          ref={containerRef}
          className={styles.space}
      >
        {elementList.map(element => (
            <div
                className={styles.element}
                key={element.key}
                style={element.style}
            >
              {element.node}
            </div>
        ))}
      </div>
  )
}

export default SkillsSpaceBg
