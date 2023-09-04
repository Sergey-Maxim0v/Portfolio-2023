import { useEffect, useRef, useState } from "react";

import styles from "./styles.module.scss";
import SkillsSpaceAnimation from "./components/skills-space-animation";
import onIntersection from "../../utils/onIntersection";
import useIsResizingWindow from "../../hooks/useIsResizingWindow";

const BackgroundSkillsSpace = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [isVisibleContainer, setIsVisibleContainer] = useState(true);

  const isResizing = useIsResizingWindow(1000);

  useEffect(() => {
    containerRef.current &&
      onIntersection({
        element: containerRef.current,
        visibleCallback: () => setIsVisibleContainer(true),
        hiddenCallback: () => setIsVisibleContainer(false),
      });
  }, []);

  return (
    <div ref={containerRef} className={styles.row}>
      {isVisibleContainer && !isResizing && <SkillsSpaceAnimation />}
    </div>
  );
};

export default BackgroundSkillsSpace;
