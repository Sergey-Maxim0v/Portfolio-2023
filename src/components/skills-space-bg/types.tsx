import {CSSProperties, ReactElement} from "react";

export interface IElementsSpaceBG {
  element: JSX.Element,
  key: string
}

export interface ISpaceAnimationElement {
  node: ReactElement,
  key: string
  style: CSSProperties | undefined
}