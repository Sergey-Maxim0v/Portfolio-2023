import {keyframes, Keyframes} from "styled-components";
import {IContainerSize} from "../../hooks/useSpaceAnimation";
import getSpaceKeyframe from "./getSpaceKeyframe";

const initialKeyframe = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`

const getList = (n: number): number[] => [0, n * 0.1, n * 0.2, n * 0.3, n * 0.4,
  n * -0.1, n * -0.2, n * -0.3, n * -0.4]

const getSpaceKeyframeList = (sizeObj: IContainerSize): Keyframes[] => {
  if(!sizeObj.width || !sizeObj.height){
    return []
  }

  const result: Keyframes[] = [initialKeyframe]

  const leftList = getList(sizeObj.width)
  const topList = getList(sizeObj.height)

  const leftSide = sizeObj.width * -0.45
  const rightSide = sizeObj.width * 0.4
  const topSide = sizeObj.height * -0.45
  const bottomSide = sizeObj.height * 0.4

  topList.forEach(top=> {
    result.push(getSpaceKeyframe({top, left: leftSide}));
    result.push(getSpaceKeyframe({top, left: rightSide}));
  })

  leftList.forEach(left=> {
    result.push(getSpaceKeyframe({top: topSide, left}));
    result.push(getSpaceKeyframe({top: bottomSide, left}));
  })

  return result
}

export default getSpaceKeyframeList