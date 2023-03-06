import {RefObject, useContext, useEffect, useRef, useState} from "react";
import {IElementsSpaceBG} from "../components/skills-space-bg/types";
import useDebounce from "./useDebonce";
import {Context} from "../context/context";

export interface IContainerSize {
  width: number,
  height: number
}

export interface IUseSpaceAnimation {
  containerRef: RefObject<HTMLDivElement>
}

const animationAddedInterval: number = 1000
const initialSizeState: IContainerSize = {width: 0, height: 0}

const useSpaceAnimation = ({containerRef}: IUseSpaceAnimation) => {
  const {scrollRef} = useContext(Context)
  const [nodeList, setNodeList] = useState<IElementsSpaceBG[]>([])
  const [containerSize, setContainerSize] = useState<IContainerSize>(initialSizeState)
  const debouncedContainerSize = useDebounce<IContainerSize>(containerSize, 100)

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

  return nodeList
}

export default useSpaceAnimation