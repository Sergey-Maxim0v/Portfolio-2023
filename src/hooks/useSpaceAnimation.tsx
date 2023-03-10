import {Dispatch, RefObject, SetStateAction, useContext, useEffect, useMemo, useRef, useState} from "react";
import {Context} from "../context/context";
import SpaceRandomElement from "../components/space-random-element";
import {ISpaceAnimationElement} from "../components/skills-space-bg/types";
import getSpaceKeyframeList from "../components/utils/getSpaceKeyframeList";
import getRandomIndex from "../components/utils/getRandomIndex";

export interface IContainerSize {
  width: number,
  height: number
}

export interface IUseSpaceAnimation {
  containerRef: RefObject<HTMLDivElement>
  elementList: ISpaceAnimationElement[]
  setElementList: Dispatch<SetStateAction<ISpaceAnimationElement[]>>
}

const ANIMATION_ADDED_INTERVAL: number = 500
const ANIMATION_TIME = 3000
const initialSizeState: IContainerSize = {width: 0, height: 0}

const useSpaceAnimation = ({containerRef, elementList, setElementList}: IUseSpaceAnimation) => {
  const {scrollRef} = useContext(Context)
  const [containerSize, setContainerSize] = useState(initialSizeState)

  const keyframeList = useMemo(() => getSpaceKeyframeList(containerSize), [containerSize])

  const stopAnimationRef = useRef(false)

  const scrollCallBack = (event: Event) => {
    if (!event || !event?.target) {
      return;
    }
    const targetNode = event.target as HTMLElement

    if (!stopAnimationRef.current && targetNode.scrollTop > containerSize.height / 2) {
      stopAnimationRef.current = true
      return
    }

    if (stopAnimationRef.current && targetNode.scrollTop <= containerSize.height / 2) {
      stopAnimationRef.current = false
      animationRecursion()
      return
    }
  }

  const loadCallBack = () => {
    if (!containerRef.current) {
      setContainerSize(initialSizeState)
      return
    }
    const {width, height} = containerRef.current.getBoundingClientRect()
    setContainerSize({width, height})
  }

  const resizeCallBack = () => {
    if (!containerRef.current) {
      setContainerSize(initialSizeState)
      return
    }
    const {width, height} = containerRef.current.getBoundingClientRect()
    setContainerSize({width, height})
  }

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
    if (!containerRef.current || stopAnimationRef.current || !keyframeList.length) {
      return
    }

    const {callBack, interval} = getTimeout();

    const prom = new Promise((resolve) => {
      setTimeout(() => {
        callBack()
        resolve(null)
      }, interval)
    })

    prom.then(() => animationRecursion())
  }

  useEffect(() => {
    window.addEventListener('load', () => loadCallBack())
    window.addEventListener('resize', () => resizeCallBack())
    scrollRef.current?.addEventListener('scroll', (event) => scrollCallBack(event))

    return () => {
      scrollRef.current?.removeEventListener('scroll', (event) => scrollCallBack(event))
      window.removeEventListener('resize', () => resizeCallBack())
      window.removeEventListener('load', () => loadCallBack())
    }
  }, [])

  useEffect(() => {
    keyframeList.length && animationRecursion()
  }, [keyframeList.length])

  return elementList
}

export default useSpaceAnimation