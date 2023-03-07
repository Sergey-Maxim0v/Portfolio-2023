import {LegacyRef, useRef, useState} from "react";
import {ISpaceAnimationElement, ISpaceElementWrapper} from "./types";
import useSpaceAnimation from "../../hooks/useSpaceAnimation";
import styled, {css, Keyframes, keyframes, SimpleInterpolation} from "styled-components";
import styles from './styles.module.scss'


// TODO: props.transform ---------------------------------------------------------------
const elementAnimation = (props: { transform: string }) => keyframes`
  0% {
    transform: translate(-50%, -50%);
  }
  100% {
    transform: translate(0, -2000%);
  }
`

const SpaceElementWrapper = styled.div<ISpaceElementWrapper>`
  position: absolute;
  top: 50%;
  left: 50%;
  transition: transform 3s;

  ${props => props.customStyle.transform
          ? css`animation: ${elementAnimation({transform: props.customStyle.transform})} 3s linear`
          : css`display: none`
  };

  ${props => props.customStyle.color
          ? css`color: ${props.customStyle.color}`
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
                customStyle={element.style}
            >
              {element.node}
            </SpaceElementWrapper>
        ))}
      </div>
  )
}

export default SkillsSpaceBg
