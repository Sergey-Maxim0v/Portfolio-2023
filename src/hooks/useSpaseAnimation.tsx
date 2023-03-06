import {RefObject, useEffect, useState} from "react";
import {IElementsSpaceBG} from "../components/skills-space-bg/types";
import useDebounce from "./useDebonce";

export interface IContainerSize {
  width: number,
  height: number
}

const animationAddedInterval: number = 5000
const initialSizeState: IContainerSize = {width: 0, height: 0}

const useSpaseAnimation = (containerRef: RefObject<HTMLDivElement>, scrollNode: HTMLElement | null) => {
  const [nodeList, setNodeList] = useState<IElementsSpaceBG[]>([])
  const [containerSize, setContainerSize] = useState<IContainerSize>(initialSizeState)
  const debouncedContainerSize = useDebounce<IContainerSize>(containerSize, 100)

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
    window.addEventListener('resize', () => resizeCallBack())
    window.addEventListener('load', () => loadCallBack())

    animationRecursion()

    return () => {
      window.removeEventListener('load', () => loadCallBack())
      window.removeEventListener('resize', () => resizeCallBack())

      // TODO: clearTimeout для всех setTimeout
    }
  }, [])

  return nodeList
}

export default useSpaseAnimation