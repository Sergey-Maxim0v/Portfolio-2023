import { useEffect, useState } from "react";

const useIsResizingWindow = (delay: number = 300): boolean => {
  const [isResizing, setIsResizing] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const onResize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    window.addEventListener("resize", () => onResize());

    return () => window.removeEventListener("resize", () => onResize());
  }, []);

  useEffect(() => {
    const handler = setTimeout(() => {
      setIsResizing(false);
    }, delay);

    setIsResizing(true);

    return () => {
      clearTimeout(handler);
    };
  }, [windowSize, delay]);

  return isResizing;
};

export default useIsResizingWindow;
