import {LegacyRef, useRef, useState} from "react";
import {ISpaceAnimationElement, ISpaceElementStyle} from "./types";
import useSpaceAnimation from "../../hooks/useSpaceAnimation";
import styled, {css, Keyframes, keyframes} from "styled-components";
import styles from './styles.module.scss'

const elementAnimation = ({top, left}: { top: number, left: number }): Keyframes => {
  const transform: string = `translate(${top}px, ${left}px)`

  return keyframes`
    0% {
      transform: translate(-50%, -50%);
    }
    100% {
      transform: ${transform};
    }
  `;
}

const SpaceElementWrapper = styled.div<ISpaceElementStyle>`
  position: absolute;
  top: 50%;
  left: 50%;
  transition: transform 3s;

  ${props => props.top && props.left
          ? css`animation: ${elementAnimation({top: props.top, left: props.left})} 3s linear`
          : css`display: none`
  };

  ${props => props.color
          ? css`color: ${props.color}`
          : css`color: currentColor`
  };
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
                top={element.top}
                left={element.left}
                color={element.color}
            >
              {element.node}
            </SpaceElementWrapper>
        ))}
      </div>
  )
}

export default SkillsSpaceBg
