import { RefObject, useEffect, useState } from "react";
import onIntersection from "../utils/onIntersection";

export const useIsVisibleComponent = (
  containerRef: RefObject<HTMLDivElement>,
) => {
  const [isVisibleComponent, setIsVisibleComponent] = useState(true);

  useEffect(() => {
    containerRef.current &&
      onIntersection({
        element: containerRef.current,
        visibleCallback: () => setIsVisibleComponent(true),
        hiddenCallback: () => setIsVisibleComponent(false),
      });
  }, []);

  return isVisibleComponent;
};
