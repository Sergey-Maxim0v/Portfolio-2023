import {RefObject, useEffect, useState} from "react";
import {IElementsSpaceBG} from "../components/skills-space-bg/types";

const animationAddedInterval: number = 5000

const useSpaseAnimation = (containerRef: RefObject<HTMLDivElement>) => {
  const [nodeList, setNodeList] = useState<IElementsSpaceBG[]>([])
  const [containerSize, setContainerSize] = useState({width: 0, height: 0})

  const loadCallBack = () => {
    if (!containerRef.current) {
      return
    }
    const {width, height} = containerRef.current.getBoundingClientRect()
    setContainerSize({width, height})
  }

  const resizeCallBack = () => {
    if (!containerRef.current) {
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

  const animationFunk = () => {
    const {callBack, interval} = getTimeout();

    const prom = new Promise((resolve) => {
      setTimeout(() => {
        callBack()
        resolve(null)
      }, interval)
    })

    prom.then(() => {
      animationFunk();
    })
  }

  useEffect(() => {
    window.addEventListener('resize', () => resizeCallBack())
    window.addEventListener('load', () => loadCallBack())

    return () => {
      window.removeEventListener('load', () => loadCallBack())
      window.removeEventListener('resize', () => resizeCallBack())
    }
  }, [])

  useEffect(() => {
    animationFunk()

    return // TODO: остановить все setTimeout
  }, [])

  return nodeList
}

export default useSpaseAnimation