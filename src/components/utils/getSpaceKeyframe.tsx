import {keyframes, Keyframes} from "styled-components";

const getSpaceKeyframe = ({top, left}: { top: number, left: number }): Keyframes =>
    keyframes`
      0% {
        transform: translate(-50%, -50%);
      }
      100% {
        transform: translate(${left}px, ${top}px);
      }
    `

export default getSpaceKeyframe