import { ReactElement, useMemo } from "react";
import Slide from "../components/Slide";

const SLIDES_COUNT = 7;

export const useGetSlideNodeList = ({
  className,
}: {
  className: string;
}): ReactElement[] =>
  useMemo(() => {
    const result = [];
    for (let i = 0; i <= SLIDES_COUNT; i++) {
      result.push(<Slide key={i} number={i} className={className} />);
    }
    return result;
  }, []);
