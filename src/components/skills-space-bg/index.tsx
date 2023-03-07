import {LegacyRef, useRef, useState} from "react";
import {ISpaceAnimationElement} from "./types";
import useSpaceAnimation from "../../hooks/useSpaceAnimation";
import styled from "styled-components";
import styles from './styles.module.scss'

const SpaceElementWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

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
            <SpaceElementWrapper
                key={element.key}
                style={element.style}
            >
              {element.node}
            </SpaceElementWrapper>
        ))}
      </div>
  )
}

export default SkillsSpaceBg
