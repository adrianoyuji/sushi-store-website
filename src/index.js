import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//context
import { MenuProvider } from "./contexts/menu";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <MenuProvider>
      <App />
    </MenuProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
