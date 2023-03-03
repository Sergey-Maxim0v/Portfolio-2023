import {RefObject, useEffect, useState} from "react";
import {IElementsSpaceBG} from "../components/skills-space-bg/types";

const animationAddedInterval: number = 5000
const initialSizeState = {width: 0, height: 0}

const useSpaseAnimation = (containerRef: RefObject<HTMLDivElement>) => {
  const [nodeList, setNodeList] = useState<IElementsSpaceBG[]>([])
  const [containerSize, setContainerSize] = useState(initialSizeState)
  const [stop, setStop] = useState(false)

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
    console.log('elementsFunk')
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

    prom.then(() => {
      !stop && animationRecursion();
    })
  }

  useEffect(() => {
    window.addEventListener('resize', () => resizeCallBack())
    window.addEventListener('load', () => loadCallBack())

    animationRecursion()

    return () => {
      window.removeEventListener('load', () => loadCallBack())
      window.removeEventListener('resize', () => resizeCallBack())

      // TODO: clearTimeout для всех setTimeout

      setStop(true)
    }
  }, [])

  return nodeList
}

export default useSpaseAnimation