import { RefObject, useEffect, useMemo, useState } from "react";
import SpaceRandomElement from "../components/background-skills-space/components/space-random-element";
import getSpaceKeyframeList from "../components/background-skills-space/utils/getSpaceKeyframeList";
import useDebounce from "./useDebonce";
import { Keyframes } from "styled-components";
import { ISpaceAnimationElement } from "../components/background-skills-space/components/skills-space-animation/types";

export interface IContainerSize {
  width: number;
  height: number;
}

export interface IUseSpaceAnimation {
  containerRef: RefObject<HTMLDivElement>;
}

const ANIMATION_ADDED_INTERVAL = 700; // максимальное время создания нового элемента
const ANIMATION_TIME = 3000; // время существования элемента

const useSpaceAnimation = ({
  containerRef,
}: IUseSpaceAnimation): ISpaceAnimationElement[] => {
  const [elementList, setElementList] = useState<ISpaceAnimationElement[]>([]);
  const [containerSize, setContainerSize] = useState<IContainerSize>({
    width: 0,
    height: 0,
  });

  const debouncedContainerHeight = useDebounce(containerSize.height, 300);
  const debouncedContainerWidth = useDebounce(containerSize.width, 300);

  const keyframeList = useMemo<Keyframes[]>(
    () => getSpaceKeyframeList(containerRef),
    [containerRef.current, debouncedContainerHeight, debouncedContainerWidth],
  );

  const getKey = (elementKey: string): ISpaceAnimationElement["key"] =>
    elementKey + "__" + Math.random() * 100 + Math.random() * 100;

  const onResize = () => {
    setElementList([]);
    setContainerSize({
      width: containerRef.current?.getBoundingClientRect().width ?? 0,
      height: containerRef.current?.getBoundingClientRect().height ?? 0,
    });
  };

  let keyframeGroupNum = 0;

  const getRandomKeyframeIndex = (): number => {
    const halfNum = 4;
    const halfKeyframeListNum = keyframeList.length / halfNum;

    keyframeGroupNum === halfNum - 1
      ? (keyframeGroupNum = 0)
      : keyframeGroupNum++;

    return Math.floor(
      Math.random() * halfKeyframeListNum +
        halfKeyframeListNum * keyframeGroupNum,
    );
  };

  const elementsAddRemoveFunk = () => {
    const { element, key: elementKey } = SpaceRandomElement();
    const key = getKey(elementKey);
    const keyframeIndex = getRandomKeyframeIndex();
    const keyframe = keyframeList[keyframeIndex];

    setElementList((prev) => prev.concat({ node: element, key, keyframe }));

    setTimeout(
      () => setElementList((prev) => prev.filter((el) => el.node !== element)),
      ANIMATION_TIME,
    );
  };

  const getTimeout = () => ({
    callBack: elementsAddRemoveFunk,
    interval: Math.random() * ANIMATION_ADDED_INTERVAL,
  });

  const animationRecursion = () => {
    if (!containerRef.current || !keyframeList.length) {
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
    window.addEventListener("resize", () => onResize());

    return () => {
      window.removeEventListener("resize", () => setElementList([]));
    };
  }, []);

  useEffect(() => {
    keyframeList.length && animationRecursion();
  }, [keyframeList]);

  return elementList;
};

export default useSpaceAnimation;
