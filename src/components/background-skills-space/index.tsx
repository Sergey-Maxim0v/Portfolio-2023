import { useEffect, useRef, useState } from "react";

import styles from "./styles.module.scss";
import SkillsSpaceAnimation from "./components/skills-space-animation";
import onIntersection from "../../utils/onIntersection";

const BackgroundSkillsSpace = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [isAnimation, setIsAnimation] = useState(true);

  useEffect(() => {
    containerRef.current &&
      onIntersection({
        element: containerRef.current,
        visibleCallback: () => setIsAnimation(true),
        hiddenCallback: () => setIsAnimation(false),
      });
  }, []);

  return (
    <div ref={containerRef} className={styles.row}>
      {isAnimation && <SkillsSpaceAnimation />}
    </div>
  );
};

export default BackgroundSkillsSpace;
