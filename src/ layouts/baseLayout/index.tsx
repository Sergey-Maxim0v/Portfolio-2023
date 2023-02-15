import {FC} from "react";
import Header from "../../components/header";
import {IBaseLayout} from "./types";

const BaseLayout: FC<IBaseLayout> = ({children}) => {
  return (
      <>
        <Header/>
        {children}
      </>
  )
}

export default BaseLayout