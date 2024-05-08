// libraries
import { FC } from "react";
import { Outlet } from "react-router-dom";

// styles 
import styles from "./root.module.css";

// components 
import AppHeader from "../../components/app-header/app-header";



const RootLayout: FC = () => {
  return (
    <div className={styles.page}>
      <AppHeader />
      <Outlet />
    </div>
  )
};

export default RootLayout;
