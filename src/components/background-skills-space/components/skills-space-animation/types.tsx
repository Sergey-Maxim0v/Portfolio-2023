import { Keyframes } from "styled-components";
import { ReactElement } from "react";

export interface ISpaceAnimationElement {
  node: ReactElement;
  key: string;
  keyframe: Keyframes;
}
