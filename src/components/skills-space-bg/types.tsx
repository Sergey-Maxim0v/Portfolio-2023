import {ReactElement} from "react";
import {Keyframes} from "styled-components";

export interface IElementsSpaceBG {
  element: JSX.Element,
  key: string
}

export interface ISpaceAnimationElement {
  node: ReactElement,
  key: string
  keyframe: Keyframes
}

export interface ISpaceStyledComponent{
  keyframe: Keyframes
}

