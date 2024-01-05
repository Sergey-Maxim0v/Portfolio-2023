import { FC, useRef, useState } from "react";
import { ISlider } from "./types";
import styles from "./styles.module.scss";
import Arrow from "../Arrow";
import { ARROW_DIRECTION } from "../Arrow/types";
import Dots from "../Dots";
import { useGetNumSlidesForRender } from "../../hooks/useGetNumSlidesForRender";
import { useAutoplayChangeSlides } from "../../hooks/useAutoplayChangeSlides";
import { useKeyboardListener } from "../../hooks/useKeyboardListener";
import { useSwipe } from "../../hooks/useSwipe";
import { useGetSlideNodeList } from "../../hooks/useGetSlideNodeList";
import classNames from "classnames";

const ANIMATION_TIME = 200;

const ProjectsSlider: FC<ISlider> = ({
  autoPlay = false,
  autoPlayTime = 5000,
}) => {
  // @ts-ignore
  const sliderRef = useRef<HTMLDivElement>(null);

  const [indexCurrentSlide, setIndexCurrentSlide] = useState<number>(0);
  const [animationDirection, setAnimationDirection] = useState<-1 | 0 | 1>(0);
  const [isInFocus, setIsInFocus] = useState(false);
  const [isAutoplay, setIsAutoplay] = useState(autoPlay);

  const slideNodeList = useGetSlideNodeList({
    className: styles.slide,
  });

  const numListSlidesForRender = useGetNumSlidesForRender({
    slidesNum: slideNodeList.length,
    indexCurrentSlide,
  });

  const changeSlide = async (direction: -1 | 1) => {
    setAnimationDirection(direction);

    await new Promise((resolve) => setTimeout(resolve, ANIMATION_TIME));

    setAnimationDirection(0);

    setIndexCurrentSlide((prevState) => {
      if (direction > 0 && prevState >= slideNodeList.length - 1) {
        return 0;
      }

      if (direction < 0 && prevState === 0) {
        return slideNodeList.length - 1;
      }

      return prevState + direction;
    });
  };

  useAutoplayChangeSlides({
    autoPlay: isAutoplay,
    autoPlayTime,
    changeSlide,
    indexCurrentSlide,
  });

  useKeyboardListener({ sliderRef, isInFocus, changeSlide });

  useSwipe({
    ref: sliderRef,
    onLeft: () => changeSlide(-1),
    onRight: () => changeSlide(1),
  });

  return (
    <div
      onMouseEnter={() => setIsAutoplay(false)}
      onMouseLeave={() => autoPlay && setIsAutoplay(true)}
      className={styles.slider}
      onFocus={() => setIsInFocus(true)}
      onBlur={() => setIsInFocus(false)}
      ref={sliderRef}
    >
      <Arrow
        direction={ARROW_DIRECTION.left}
        className={classNames(styles.arrow, styles.arrow_left)}
        onClick={() => changeSlide(-1)}
      />

      <div
        className={classNames(
          styles.slideList,
          {
            [styles.slideList__goLeft]: animationDirection === -1,
          },
          {
            [styles.slideList__goRight]: animationDirection === 1,
          },
        )}
      >
        {numListSlidesForRender.map((num) => slideNodeList[num])}
      </div>

      <Arrow
        direction={ARROW_DIRECTION.right}
        className={classNames(styles.arrow, styles.arrow_right)}
        onClick={() => changeSlide(1)}
      />

      <Dots
        length={slideNodeList.length}
        indexCurrentSlide={indexCurrentSlide}
        setIndexCurrentSlide={setIndexCurrentSlide}
        className={styles.dots}
      />
    </div>
  );
};

export default ProjectsSlider;
