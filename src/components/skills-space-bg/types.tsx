import {ReactElement} from "react";

export interface IElementsSpaceBG {
  element: JSX.Element,
  key: string
}

export interface ISpaceAnimationElement {
  node: ReactElement,
  key: string
  style: ISpaceElementStyle
}

export interface ISpaceElementStyle {
  transform: string,
  color: string
}

export interface ISpaceElementWrapper {
  customStyle: ISpaceElementStyle
}