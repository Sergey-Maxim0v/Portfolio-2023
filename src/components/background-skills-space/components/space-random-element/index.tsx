import { ISpaceElement } from "./types";
import Icon from "../../../icon";
import { IconNameEnum } from "../../../icon/types";
import styles from "./styles.module.scss";
import getRandomIndex from "../../../../utils/getRandomIndex";

const keyList = Object.keys(IconNameEnum).filter(
  (el) =>
    el !== IconNameEnum.phone &&
    el !== IconNameEnum.tg &&
    el !== IconNameEnum.whatsapp &&
    el !== IconNameEnum.email &&
    el !== IconNameEnum.vk &&
    el !== IconNameEnum.codewars,
);

const colorList = [
  "#434343",
  "#848484",
  "#641894",
  "#742DBC",
  "#BC6DFF",
  "#BA3C15",
  "#FBA71C",
  "#F9C909",
  "#F9E501",
  "#185D35",
  "#649009",
  "#9CC50F",
  "#C4E31E",
  "#F0F949",
  "#0C635F",
  "#03B3A1",
  "#15606F",
  "#1D8D8A",
  "#3EE4C2",
  "#17445A",
  "#942941",
  "#C82255",
  "#F6198D",
];

const getColor = () => colorList[getRandomIndex(colorList)];

const SpaceRandomElement = (): ISpaceElement => {
  const index = getRandomIndex(keyList);
  const color = getColor();

  const element = (
    <div style={{ width: "100%", height: "100%", color: color }}>
      <Icon
        className={styles.element}
        iconName={keyList[index] as IconNameEnum}
      />
    </div>
  );

  return { element: element, key: keyList[index] };
};

export default SpaceRandomElement;
