// libraries 
import { FC } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// urls
import { HOME_PAGE_PATH } from "../../utils/urls";

// layouts 
import RootLayout from "../../layouts/root/root";

// pages 
import HomePage from "../../pages/home/home";



const App: FC = () => {
  const location = useLocation();
  const background = location.state && location.state.background;
  
  return (
    <Routes location={background || location}>
      <Route 
        path={HOME_PAGE_PATH}
        element={<RootLayout />} 
      >
        <Route 
          index
          element={<HomePage />} 
        />
      </Route>
    </Routes>
  );
};

export default App;
