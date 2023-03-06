import {useEffect, useRef, useState} from "react";
import {IElementsSpaceBG} from "../components/skills-space-bg/types";
import useDebounce from "./useDebonce";

export interface IContainerSize {
  width: number,
  height: number
}

export interface IUseSpaceAnimation {
  containerNode: HTMLDivElement | null
  scrollNode: HTMLElement | null
}

const animationAddedInterval: number = 1000
const initialSizeState: IContainerSize = {width: 0, height: 0}

const useSpaceAnimation = ({containerNode, scrollNode}: IUseSpaceAnimation) => {
  const [nodeList, setNodeList] = useState<IElementsSpaceBG[]>([])
  const [containerSize, setContainerSize] = useState<IContainerSize>(initialSizeState)
  const debouncedContainerSize = useDebounce<IContainerSize>(containerSize, 100)

  const stopRef = useRef(false)

  const scrollCallBack = (event: Event) => {
    if (!event || !event?.target) {
      return;
    }
    const targetNode = event.target as HTMLElement

    if (targetNode.scrollTop > containerSize.height / 2) {
      stopRef.current = true
      return
    }

    if (targetNode.scrollTop <= containerSize.height / 2 && stopRef.current) {
      stopRef.current = false
      animationRecursion()
    }
  }

  const loadCallBack = () => {
    if (!containerNode) {
      setContainerSize(initialSizeState)
      return
    }
    const {width, height} = containerNode.getBoundingClientRect()
    setContainerSize({width, height})
  }

  const resizeCallBack = () => {
    if (!containerNode) {
      setContainerSize(initialSizeState)
      return
    }
    const {width, height} = containerNode.getBoundingClientRect()
    setContainerSize({width, height})
  }

  const elementsFunk = () => {
    // TODO: функция добавления элемента в рандомных координатах и добавления координат движения.
    //  После анимации удалить из возвращаемого массива.
    console.log('TODO: elementsFunk')
  }

  const getTimeout = () => ({
    callBack: elementsFunk,
    interval: Math.random() * animationAddedInterval
  })

  const animationRecursion = () => {
    if (!containerNode || stopRef.current) {
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
    if (!scrollNode) {
      return
    }
    scrollNode.addEventListener('scroll', (event) => scrollCallBack(event))
    window.addEventListener('resize', () => resizeCallBack())
    window.addEventListener('load', () => loadCallBack())
    stopRef.current = false

    animationRecursion()

    return () => {
      scrollNode.removeEventListener('scroll', (event) => scrollCallBack(event))
      window.removeEventListener('load', () => loadCallBack())
      window.removeEventListener('resize', () => resizeCallBack())
      stopRef.current = true
    }
  }, [scrollNode])

  return nodeList
}

export default useSpaceAnimation