// libraries
import { FC } from "react";
import { Outlet } from "react-router-dom";

// styles 
import styles from "./root.module.css";

// components 
import AppHeader from "../../components/app-header/app-header";
import AppFooter from "../../components/app-footer/app-footer";



const RootLayout: FC = () => {
  return (
    <div className={styles.page}>
      <AppHeader />
      <Outlet />
      <AppFooter />
    </div>
  )
};

export default RootLayout;
