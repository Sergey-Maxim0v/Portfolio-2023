import {FC} from "react";
import Header from "../../components/header";
import {IBaseLayout} from "./types";
import {useNavigation} from "react-router-dom";
import styles from "./styles.module.scss";

const BaseLayout: FC<IBaseLayout> = ({children}) => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading"

  return (
      <>
        <Header/>
        <div className={styles.contentLayout}>
          {children}
        </div>
      </>
  )
}

export default BaseLayout