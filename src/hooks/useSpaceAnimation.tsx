import {Dispatch, RefObject, SetStateAction, useContext, useEffect, useRef} from "react";
import {Context} from "../context/context";
import SpaceRandomElement from "../components/space-random-element";
import {ISpaceAnimationElement, ISpaceElementStyle} from "../components/skills-space-bg/types";

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

const colorList = ['#434343', '#848484', '#641894', '#742DBC', '#BC6DFF', '#BA3C15', '#FBA71C', '#F9C909'
  , '#F9E501', '#185D35', '#649009', '#9CC50F', '#C4E31E', '#F0F949', '#0C635F', '#03B3A1', '#15606F'
  , '#1D8D8A', '#3EE4C2', '#17445A', '#942941', '#C82255', '#F6198D']

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

  const getKey = (elementKey: string): ISpaceAnimationElement["key"] =>
      elementKey + "__" + Math.random() * 100 + Math.random() * 100

  const getStyles = (): ISpaceElementStyle => {
    const top =
        Math.floor(Math.random() * containerSizeRef.current.height / 2)
        * (Math.random() > 0.5 ? 1 : -1)

    const left =
        Math.floor(Math.random() * containerSizeRef.current.width / 2)
        * (Math.random() > 0.5 ? 1 : -1)

    const colorIndex = Math.round((colorList.length - 1) * Math.random())
    const color = colorList[colorIndex]

    return {top, left, color}
  }

  const elementsFunk = () => {
    const {element, key: elementKey} = SpaceRandomElement()
    const key = getKey(elementKey)
    const {top, left, color} = getStyles()

    setElementList(prev => prev.concat({node: element, top, left, color, key}))

    setTimeout(() =>
        setElementList(prev => prev.filter(el => el.node !== element)), ANIMATION_TIME)
  }

  const getTimeout = () => ({
    callBack: elementsFunk,
    interval: Math.random() * ANIMATION_ADDED_INTERVAL
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