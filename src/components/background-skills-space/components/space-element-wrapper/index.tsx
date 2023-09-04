import styled, { css, Keyframes } from "styled-components";

const SpaceElementWrapper = styled.div<{ keyframe: Keyframes }>`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 3rem;
  width: auto;
  transition: transform 3s;

  ${(props) =>
    props.keyframe
      ? css`
          animation: ${props.keyframe} 3s linear;
        `
      : css`
          display: none;
        `};
`;

export default SpaceElementWrapper;
