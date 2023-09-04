import { RefObject, useRef } from "react";
import useSpaceAnimation from "../../../../hooks/useSpaceAnimation";
import styles from "./styles.module.scss";
import SpaceElementWrapper from "../space-element-wrapper";

const SkillsSpaceAnimation = () => {
  const containerRef: RefObject<HTMLDivElement> = useRef(null);

  const elementList = useSpaceAnimation({ containerRef });

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
