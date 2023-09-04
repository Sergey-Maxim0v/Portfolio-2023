import {
  Dispatch,
  RefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import SpaceRandomElement from "../components/space-random-element";
import getSpaceKeyframeList from "../components/utils/getSpaceKeyframeList";
import getRandomIndex from "../components/utils/getRandomIndex";
import onIntersection from "../components/utils/onIntersection";
import useDebounce from "./useDebonce";
import { Keyframes } from "styled-components";
import { ISpaceAnimationElement } from "../components/skills-space-animation/types";

export interface IContainerSize {
  width: number;
  height: number;
}

export interface IUseSpaceAnimation {
  containerRef: RefObject<HTMLDivElement>;
  elementList: ISpaceAnimationElement[];
  setElementList: Dispatch<SetStateAction<ISpaceAnimationElement[]>>;
}

const ANIMATION_ADDED_INTERVAL: number = 700;
const ANIMATION_TIME = 3000;

const useSpaceAnimation = ({
  containerRef,
  elementList,
  setElementList,
}: IUseSpaceAnimation) => {
  const [containerSize, setContainerSize] = useState<IContainerSize>({
    width: 0,
    height: 0,
  });

  const debouncedContainerHeight = useDebounce(containerSize.height, 300);
  const debouncedContainerWidth = useDebounce(containerSize.width, 300);

  const keyframeListRef = useRef<Keyframes[]>([]);
  const stopAnimationRef = useRef(false);

  const getKey = (elementKey: string): ISpaceAnimationElement["key"] =>
    elementKey + "__" + Math.random() * 100 + Math.random() * 100;

  const onResize = () => {
    setElementList([]);
    setContainerSize({
      width: containerRef.current?.getBoundingClientRect().width ?? 0,
      height: containerRef.current?.getBoundingClientRect().height ?? 0,
    });
  };

  const elementsFunk = () => {
    if (stopAnimationRef.current) {
      return;
    }

    const { element, key: elementKey } = SpaceRandomElement();
    const key = getKey(elementKey);
    const keyframe =
      keyframeListRef.current[getRandomIndex(keyframeListRef.current)];

    setElementList((prev) => prev.concat({ node: element, key, keyframe }));

    setTimeout(
      () => setElementList((prev) => prev.filter((el) => el.node !== element)),
      ANIMATION_TIME,
    );
  };

  const getTimeout = () => ({
    callBack: elementsFunk,
    interval: Math.random() * ANIMATION_ADDED_INTERVAL,
  });

  const animationRecursion = () => {
    if (
      !containerRef.current ||
      !keyframeListRef.current.length ||
      stopAnimationRef.current
    ) {
      return;
    }

    const { callBack, interval } = getTimeout();

    const prom = new Promise((resolve) => {
      setTimeout(() => {
        callBack();
        resolve(null);
      }, interval);
    });

    prom.then(() => animationRecursion());
  };

  useEffect(() => {
    keyframeListRef.current = getSpaceKeyframeList(containerRef);
  }, [containerRef.current, debouncedContainerHeight, debouncedContainerWidth]);

  useEffect(() => {
    window.addEventListener("resize", () => onResize());

    containerRef.current &&
      onIntersection({
        element: containerRef.current,
        visibleCallback: () => {
          stopAnimationRef.current = false;
          !elementList.length && animationRecursion();
        },
        hiddenCallback: () => {
          stopAnimationRef.current = true;
          setElementList([]);
        },
      });

    return () => {
      window.removeEventListener("resize", () => setElementList([]));
    };
  }, []);

  return elementList;
};

export default useSpaceAnimation;
