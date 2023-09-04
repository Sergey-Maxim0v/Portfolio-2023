import SpaceRandomElement from "../components/space-random-element";
import getRandomKeyframeIndex from "./getRandomKeyframeIndex";

import { ISpaceAnimationElement } from "../components/skills-space-animation/types";
import { IElementsAddRemoveFunk } from "../types";

const getKey = (elementKey: string): ISpaceAnimationElement["key"] =>
  elementKey + "__" + Math.random() * 100 + Math.random() * 100;

const ANIMATION_TIME = 3000; // время существования элемента

const elementsAddRemoveFunk = ({
  keyframeList,
  setElementList,
}: IElementsAddRemoveFunk) => {
  const { element, key: elementKey } = SpaceRandomElement();
  const key = getKey(elementKey);
  const keyframeIndex = getRandomKeyframeIndex(keyframeList);
  const keyframe = keyframeList[keyframeIndex];

  setElementList((prev) => prev.concat({ node: element, key, keyframe }));

  setTimeout(
    () => setElementList((prev) => prev.filter((el) => el.node !== element)),
    ANIMATION_TIME,
  );
};

export default elementsAddRemoveFunk;
