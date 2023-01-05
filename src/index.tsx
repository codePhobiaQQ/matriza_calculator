import React from "react";
import ReactDOM from "react-dom/client";
import { setupStore } from "./redux/store";
import App from "./App";

// ---- Styles ----
import "./styles/calculation/Matrix.sass";
import "./styles/calculation/Matrix1.css";
import "./styles/CalcTable.sass";
import "./styles/Result.sass";
import "./styles/main.sass";
import "./styles/MainScreen.sass";
import "./styles/BottomInfoSection.sass";
import "./styles/DecriptPeriods.sass";
import "./styles/ActionSection.sass";
import { Provider } from "react-redux";

const store = setupStore();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
