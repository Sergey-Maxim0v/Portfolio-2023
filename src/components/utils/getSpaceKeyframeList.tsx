import { Keyframes } from "styled-components";
import getSpaceKeyframe from "./getSpaceKeyframe";
import { RefObject } from "react";

const getNumberList = (n: number): number[] => [
  0,
  n * 0.1,
  n * 0.2,
  n * 0.3,
  n * 0.4,
  n * -0.1,
  n * -0.2,
  n * -0.3,
  n * -0.4,
];

const getSpaceKeyframeList = (
  containerRef: RefObject<HTMLDivElement>,
): Keyframes[] => {
  if (!containerRef.current) {
    return [];
  }

  const { width, height } = containerRef.current.getBoundingClientRect();

  const result: Keyframes[] = [];

  const leftList = getNumberList(width);
  const topList = getNumberList(height);

  const leftSide = width * -0.45;
  const rightSide = width * 0.4;
  const topSide = height * -0.45;
  const bottomSide = height * 0.4;

  topList.forEach((top) => {
    result.push(getSpaceKeyframe({ top, left: leftSide }));
  });

  leftList.forEach((left) => {
    result.push(getSpaceKeyframe({ top: topSide, left }));
  });

  topList.forEach((top) => {
    result.push(getSpaceKeyframe({ top, left: rightSide }));
  });

  leftList.forEach((left) => {
    result.push(getSpaceKeyframe({ top: bottomSide, left }));
  });

  return result;
};

export default getSpaceKeyframeList;
