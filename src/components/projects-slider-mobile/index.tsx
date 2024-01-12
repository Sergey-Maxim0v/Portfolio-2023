import classNames from "classnames";
import styles from "./styles.module.scss";
import { useGetSlideNodeList } from "../../hooks/useGetSlideNodeList";

const ProjectsSliderMobile = () => {
  const slideNodeList = useGetSlideNodeList({
    className: styles.slide,
  });

  return (
    <div className={classNames(styles.slider)}>
      {slideNodeList.map((el) => el)}
    </div>
  );
};

export default ProjectsSliderMobile;
