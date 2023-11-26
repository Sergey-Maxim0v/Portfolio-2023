import { useEffect, useState } from "react";

export interface IUseMedia {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

const mobileMatch = "(max-width: 767px)";
const mobileMatchMin = "(min-width: 768px)";
const tabletMatchMax = "(max-width: 1023px)";
const desktopMatch = "(min-width: 1024px)";

const getIsMobile = () => {
  let isMobile = false;

  try {
    isMobile = window.matchMedia(mobileMatch).matches;
  } catch (error) {
    console.error("getIsMobile:::", error);
  }

  return isMobile;
};

const getIsTablet = () => {
  let isTablet = false;

  try {
    isTablet =
      window.matchMedia(mobileMatchMin).matches &&
      window.matchMedia(tabletMatchMax).matches;
  } catch (error) {
    console.error("getIsTablet:::", error);
  }

  return isTablet;
};

const getIsDesktop = () => {
  let isDesktop = false;

  try {
    isDesktop = window.matchMedia(desktopMatch).matches;
  } catch (error) {
    console.error("getIsDesktop:::", error);
  }

  return isDesktop;
};

const useMedia = (): IUseMedia => {
  const [isMobile, seIsMobile] = useState(getIsMobile());
  const [isTablet, setIsTablet] = useState(getIsTablet());
  const [isDesktop, setIsDesktop] = useState(getIsDesktop());

  const onResize = () => {
    seIsMobile(getIsMobile());
    setIsTablet(getIsTablet());
    setIsDesktop(getIsDesktop());
  };

  useEffect(() => {
    window.addEventListener("resize", () => onResize());

    return () => window.removeEventListener("resize", () => onResize());
  }, []);

  return { isMobile, isTablet, isDesktop };
};

export default useMedia;
