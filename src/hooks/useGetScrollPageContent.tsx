import {useEffect, useState} from "react";

export interface IScrollPageContent {
  top: number
  left: number
}

const initialState: IScrollPageContent = {
  top: 0,
  left: 0,
}

const useGetScrollPageContent = (): IScrollPageContent => {
  const [result, setResult] = useState<IScrollPageContent>(initialState);

  // TODO: типизация, debounce;

  useEffect(() => {
    const listener = (event: Event) => {
      if (!event || !event?.target) {
        return;
      }

      setResult({
        top: event.target.scrollTop,
        left: event.target.scrollLeft
      })
    }

    const containerNode = document.querySelector('[data-content-layout]')

    if (!containerNode) {
      return;
    }

    containerNode.addEventListener('scroll', (event) => listener(event))

    return containerNode.removeEventListener('scroll', (event) => listener(event))
  }, [])

  return result
}

export default useGetScrollPageContent