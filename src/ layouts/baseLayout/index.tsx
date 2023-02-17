import {FC} from "react";
import Header from "../../components/header";
import {IBaseLayout} from "./types";
import {useNavigation} from "react-router-dom";
import classNames from "classnames";
import styles from "./styles.module.scss";

const BaseLayout: FC<IBaseLayout> = ({children}) => {
  // const navigation = useNavigation();
  // const isLoading = navigation.state === "loading"

  // TODO: useContext

  return (
      <>
        <Header/>
        <div className={classNames(styles.contentLayout, "container", "font__normal")}>
          {children}
        </div>
      </>
  )
}

export default BaseLayout