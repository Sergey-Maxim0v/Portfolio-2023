import { ISpaceAnimationElement } from "./components/skills-space-animation/types";
import { Keyframes } from "styled-components";
import { Dispatch, SetStateAction } from "react";

export interface IElementsAddRemoveFunk {
  keyframeList: Keyframes[];
  setElementList: Dispatch<SetStateAction<ISpaceAnimationElement[]>>;
}
