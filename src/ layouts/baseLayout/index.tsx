import {FC} from "react";
import Header from "../../components/header";
import {IBaseLayout} from "./types";
import {useNavigation} from "react-router-dom";
import styles from "./styles.module.scss";
import classNames from "classnames";

const BaseLayout: FC<IBaseLayout> = ({children}) => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading"

  return (
      <>
        <Header/>
        <div className={classNames(styles.contentLayout, "container")}>
          {children}
        </div>
      </>
  )
}

export default BaseLayout