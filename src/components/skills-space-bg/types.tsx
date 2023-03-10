import {ReactElement} from "react";

export interface IElementsSpaceBG {
  element: JSX.Element,
  key: string
}

export interface ISpaceAnimationElement {
  node: ReactElement,
  key: string
  top: number
  left: number
}

export interface ISpaceElementStyle {
  top: number
  left: number
}
