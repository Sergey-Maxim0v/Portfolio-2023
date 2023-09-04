import { useEffect, useRef, useState, lazy, Suspense } from "react";

import styles from "./styles.module.scss";
import onIntersection from "../../utils/onIntersection";
import useIsResizingWindow from "../../hooks/useIsResizingWindow";

const SkillsSpaceAnimation = lazy(
  () => import("./components/skills-space-animation"),
);

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
      {isVisibleContainer && !isResizing && (
        <Suspense>
          <SkillsSpaceAnimation />
        </Suspense>
      )}
    </div>
  );
};

export default BackgroundSkillsSpace;
