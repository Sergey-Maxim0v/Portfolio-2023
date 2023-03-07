import {Dispatch, ReactElement, RefObject, SetStateAction, useContext, useEffect, useRef} from "react";
import {Context} from "../context/context";
import SpaceRandomElement from "../components/space-random-element";
import {ISpaceAnimationElement} from "../components/skills-space-bg/types";

export interface IContainerSize {
  width: number,
  height: number
}

export interface IUseSpaceAnimation {
  containerRef: RefObject<HTMLDivElement>
  elementList: ISpaceAnimationElement[]
  setElementList: Dispatch<SetStateAction<ISpaceAnimationElement[]>>
}

const animationAddedInterval: number = 1000
const initialSizeState: IContainerSize = {width: 0, height: 0}

const useSpaceAnimation = ({containerRef, elementList, setElementList}: IUseSpaceAnimation) => {
  const {scrollRef} = useContext(Context)
  const containerSizeRef = useRef(initialSizeState)

  const stopAnimationRef = useRef(false)

  const scrollCallBack = (event: Event) => {
    if (!event || !event?.target) {
      return;
    }
    const targetNode = event.target as HTMLElement

    if (!stopAnimationRef.current && targetNode.scrollTop > containerSizeRef.current.height / 2) {
      stopAnimationRef.current = true
      return
    }

    if (stopAnimationRef.current && targetNode.scrollTop <= containerSizeRef.current.height / 2) {
      stopAnimationRef.current = false
      animationRecursion()
      return
    }
  }

  const loadCallBack = () => {
    if (!containerRef.current) {
      containerSizeRef.current = initialSizeState
      return
    }
    const {width, height} = containerRef.current.getBoundingClientRect()
    containerSizeRef.current = {width, height}
  }

  const resizeCallBack = () => {
    if (!containerRef.current) {
      containerSizeRef.current = initialSizeState
      return
    }
    const {width, height} = containerRef.current.getBoundingClientRect()
    containerSizeRef.current = {width, height}
  }

  const getKey = (): ISpaceAnimationElement["key"] => "" + Math.random() + "__" + Math.random()

  const getStyle = (): ISpaceAnimationElement["style"] => {
    const top = Math.floor(Math.random() * containerSizeRef.current.height / 2) * (Math.random() > 0.5 ? 1 : -1)
    const left = Math.floor(Math.random() * containerSizeRef.current.width / 2) * (Math.random() > 0.5 ? 1 : -1)

    return {transform: `translate(${top}px, ${left}px)`}
  }

  const elementsFunk = () => {
    const element: ReactElement = SpaceRandomElement()
    const key = getKey()
    const style = getStyle()

    setElementList(prev => prev.concat({node: element, style, key}))

    setTimeout(() => setElementList(prev => prev.filter(el => el.node !== element)), 3000)

    //  TODO: удаление элементов после анимации ----------------------------------------
  }

  const getTimeout = () => ({
    callBack: elementsFunk,
    interval: Math.random() * animationAddedInterval
  })

  const animationRecursion = () => {
    if (!containerRef.current || stopAnimationRef.current) {
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

    animationRecursion()

    return () => {
      scrollRef.current?.removeEventListener('scroll', (event) => scrollCallBack(event))
      window.removeEventListener('resize', () => resizeCallBack())
      window.removeEventListener('load', () => loadCallBack())
    }
  }, [])

  return elementList
}

export default useSpaceAnimation