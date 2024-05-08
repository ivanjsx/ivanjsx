// libraries
import { FC } from "react";
import { Outlet } from "react-router-dom";

// styles 
import styles from "./root.module.css";



const RootLayout: FC = () => {
  return (
    <div className={styles.page}>
      <Outlet />
    </div>
  )
};

export default RootLayout;
