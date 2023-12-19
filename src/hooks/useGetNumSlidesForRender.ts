import { useEffect, useState } from "react";

export const useGetNumSlidesForRender = ({
  slidesNum,
  indexCurrentSlide,
}: {
  slidesNum: number;
  indexCurrentSlide: number;
}): number[] => {
  if (!slidesNum) return [];
  if (slidesNum === 1) return [0, 0, 0, 0, 0];
  if (slidesNum === 2) return [0, 0, indexCurrentSlide, 1, 1];

  const [numListSlidesForRender, setNumListSlidesForRender] = useState<
    number[]
  >([]);

  useEffect(() => {
    if (indexCurrentSlide === 0) {
      setNumListSlidesForRender([slidesNum - 2, slidesNum - 1, 0, 1, 2]);
      return;
    }

    if (indexCurrentSlide === 1) {
      setNumListSlidesForRender([slidesNum - 1, 0, 1, 2, 3]);
      return;
    }

    if (indexCurrentSlide === slidesNum - 1) {
      setNumListSlidesForRender([
        slidesNum - 3,
        slidesNum - 2,
        slidesNum - 1,
        0,
        1,
      ]);
      return;
    }

    if (indexCurrentSlide === slidesNum - 2) {
      setNumListSlidesForRender([
        slidesNum - 4,
        slidesNum - 3,
        slidesNum - 2,
        slidesNum - 1,
        0,
      ]);
      return;
    }

    setNumListSlidesForRender([
      indexCurrentSlide - 2,
      indexCurrentSlide - 1,
      indexCurrentSlide,
      indexCurrentSlide + 1,
      indexCurrentSlide + 2,
    ]);
  }, [indexCurrentSlide]);

  return numListSlidesForRender;
};
