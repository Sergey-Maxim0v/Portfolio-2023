import styles from './styles.module.scss'
import {useContext} from "react";
import {Context} from "../../context/context";

const Background = () => {
  const {isLoadedPage} = useContext(Context);

  return (
      <div className={styles.background}>

        <div className={styles.gradient}></div>
      </div>
  )
}

export default Background