import {Dispatch, RefObject, SetStateAction, useEffect, useMemo, useRef} from "react";
import SpaceRandomElement from "../components/space-random-element";
import {ISpaceAnimationElement} from "../components/skills-space-bg/types";
import getSpaceKeyframeList from "../components/utils/getSpaceKeyframeList";
import getRandomIndex from "../components/utils/getRandomIndex";
import onIntersection from "../components/utils/onIntersection";

export interface IContainerSize {
  width: number,
  height: number
}

export interface IUseSpaceAnimation {
  containerRef: RefObject<HTMLDivElement>
  elementList: ISpaceAnimationElement[]
  setElementList: Dispatch<SetStateAction<ISpaceAnimationElement[]>>
}

const ANIMATION_ADDED_INTERVAL: number = 700
const ANIMATION_TIME = 3000

const useSpaceAnimation = ({containerRef, elementList, setElementList}: IUseSpaceAnimation) => {
  const keyframeList = useMemo(() => getSpaceKeyframeList(containerRef), [containerRef.current])

  const stopAnimationRef = useRef(false)

  const getKey = (elementKey: string): ISpaceAnimationElement["key"] =>
      elementKey + "__" + Math.random() * 100 + Math.random() * 100

  const elementsFunk = () => {
    const {element, key: elementKey} = SpaceRandomElement()
    const key = getKey(elementKey)
    const keyframe = keyframeList[getRandomIndex(keyframeList)]

    setElementList(prev => prev.concat({node: element, key, keyframe}))

    setTimeout(() =>
        setElementList(prev => prev.filter(el => el.node !== element)), ANIMATION_TIME)
  }

  const getTimeout = () => ({
    callBack: elementsFunk,
    interval: Math.random() * ANIMATION_ADDED_INTERVAL
  })

  const animationRecursion = () => {
    if (!containerRef.current || !keyframeList.length) {
      return
    }

    const {callBack, interval} = getTimeout();

    const prom = new Promise((resolve) => {
      !stopAnimationRef.current
          ? setTimeout(() => {
            callBack()
            resolve(null)
          }, interval)
          : setTimeout(() => {
            resolve(null)
          }, 500)
    })

    prom.then(() => animationRecursion())
  }

  useEffect(() => {
    containerRef.current && onIntersection({
      element: containerRef.current,
      visibleCallback: () => stopAnimationRef.current = false,
      hiddenCallback: () => stopAnimationRef.current = true
    })
  }, [])

  useEffect(() => {
    keyframeList.length ? animationRecursion() : setElementList([])
  }, [keyframeList])

  return elementList
}

export default useSpaceAnimation