import { RefObject, useEffect, useMemo, useState } from "react";
import getSpaceKeyframeList from "../components/background-skills-space/utils/getSpaceKeyframeList";
import useDebounce from "./useDebonce";
import { Keyframes } from "styled-components";
import { ISpaceAnimationElement } from "../components/background-skills-space/components/skills-space-animation/types";
import elementsAddRemoveFunk from "../components/background-skills-space/utils/elementsAddRemoveFunk";

export interface IContainerSize {
  width: number;
  height: number;
}

export interface IUseSpaceAnimation {
  containerRef: RefObject<HTMLDivElement>;
}

const ANIMATION_ADDED_INTERVAL = 700; // максимальное время создания нового элемента

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

  const getTimeout = () => ({
    callBack: () => elementsAddRemoveFunk({ keyframeList, setElementList }),
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
    setContainerSize({
      width: containerRef.current?.getBoundingClientRect().width ?? 0,
      height: containerRef.current?.getBoundingClientRect().height ?? 0,
    });
  }, [containerRef.current]);

  useEffect(() => {
    keyframeList.length && animationRecursion();
  }, [keyframeList.length]);

  return elementList;
};

export default useSpaceAnimation;
