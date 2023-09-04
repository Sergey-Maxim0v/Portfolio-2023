import { RefObject, useRef, useState } from "react";
import useSpaceAnimation from "../../hooks/useSpaceAnimation";
import styled, { css } from "styled-components";
import styles from "./styles.module.scss";
import { ISpaceAnimationElement, ISpaceStyledComponent } from "./types";

const SpaceElementWrapper = styled.div<ISpaceStyledComponent>`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 3rem;
  width: auto;
  transition: transform 3s;

  ${(props) =>
    props.keyframe
      ? css`
          animation: ${props.keyframe} 3s linear;
        `
      : css`
          display: none;
        `};
`;

const SkillsSpaceAnimation = () => {
  const containerRef: RefObject<HTMLDivElement> = useRef(null);
  const [elementList, setElementList] = useState<ISpaceAnimationElement[]>([]);

  useSpaceAnimation({ containerRef, elementList, setElementList });

  return (
    <div ref={containerRef} className={styles.space}>
      {elementList.map((element) => (
        <SpaceElementWrapper key={element.key} keyframe={element.keyframe}>
          {element.node}
        </SpaceElementWrapper>
      ))}
    </div>
  );
};

export default SkillsSpaceAnimation;
