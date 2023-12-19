import { ReactElement, useMemo } from "react";
import Slide from "../components/Slide";
import { PET_LIST } from "../constants/pet-list";

export const useGetSlideNodeList = ({
  className,
}: {
  className: string;
}): ReactElement[] =>
  useMemo(
    () =>
      PET_LIST.sort((el1, el2) => el2.number - el1.number).map((project) => (
        <Slide key={project.id} className={className} project={project} />
      )),
    [],
  );
