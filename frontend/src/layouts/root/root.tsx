// libraries
import { FC } from "react";
import { Outlet } from "react-router-dom";



const RootLayout: FC = () => {
  return (
    <main>
      <Outlet />
    </main>              
  )
};

export default RootLayout;
