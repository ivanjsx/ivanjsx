// libraries
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// styles 
import "./index.css";

// components 
import App from "./components/app/app";



const root = createRoot(
  document.querySelector("#root") as HTMLDivElement
);

root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
