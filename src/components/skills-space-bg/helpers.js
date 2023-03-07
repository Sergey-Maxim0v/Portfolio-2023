import {keyframes} from "styled-components";

export const getSpaceElementAnimationKeyframes = props => keyframes`
  0% {
    transform: translate(-50%, -50%);
  }
  100% {
    transform: ${props => props.transform && `${props.transform}`};
  }
`