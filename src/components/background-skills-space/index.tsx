import { useRef, lazy, Suspense } from "react";

import styles from "./styles.module.scss";
import useIsResizingWindow from "../../hooks/useIsResizingWindow";
import { useIsVisibleComponent } from "../../hooks/useIsVisibleComponent";

const SkillsSpaceAnimation = lazy(
  () => import("./components/skills-space-animation"),
);

const BackgroundSkillsSpace = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const isVisibleContainer = useIsVisibleComponent(containerRef);

  const isResizing = useIsResizingWindow(1000);

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
