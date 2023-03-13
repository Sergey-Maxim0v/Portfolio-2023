import {LegacyRef, useRef, useState} from "react";
import {ISpaceAnimationElement, ISpaceStyledComponent} from "./types";
import useSpaceAnimation from "../../hooks/useSpaceAnimation";
import styled, {css} from "styled-components";
import styles from './styles.module.scss'

const SpaceElementWrapper = styled.div<ISpaceStyledComponent>`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 3rem;
  width: auto;
  transition: transform 3s;

  ${props => props.keyframe
          ? css`animation: ${props.keyframe} 3s linear`
          : css`display: none`
  };
`

const SkillsSpaceBg = () => {
  const containerRef: LegacyRef<HTMLDivElement> = useRef(null);
  const [elementList, setElementList] = useState<ISpaceAnimationElement []>([])

  // TODO: containerRef.current
  // console.log(1, containerRef.current)

  useSpaceAnimation({containerRef, elementList, setElementList})

  return (
      <div
          ref={containerRef}
          className={styles.space}
      >
        {elementList.map(element =>
            (
                <SpaceElementWrapper
                    key={element.key}
                    keyframe={element.keyframe}
                >
                  {element.node}
                </SpaceElementWrapper>
            ))}
      </div>
  )
}

export default SkillsSpaceBg
