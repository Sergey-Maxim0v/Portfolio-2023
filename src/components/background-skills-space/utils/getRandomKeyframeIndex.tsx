import { Keyframes } from "styled-components";

const halfNum = 4;

let keyframeGroupNum = 0;

const getRandomKeyframeIndex = (keyframeList: Keyframes[]): number => {
  const halfKeyframeListNum = keyframeList.length / halfNum;

  keyframeGroupNum === halfNum - 1
    ? (keyframeGroupNum = 0)
    : keyframeGroupNum++;

  return Math.floor(
    Math.random() * halfKeyframeListNum +
      halfKeyframeListNum * keyframeGroupNum,
  );
};

export default getRandomKeyframeIndex;
