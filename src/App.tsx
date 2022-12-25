import React, { useState } from "react";
import MainScreen from "./components/shared/MainScreen";
import Result from "./components/shared/ResultSection/Result";
import tabs from "./data/MainScreenData";
import {useAppSelector} from "./hooks/redux";
import Layout from "./hoc/Layout";

function App() {
  const [activeTab, setActiveTab] = useState<string>(Object.keys(tabs)[0]);
  const showResult = useAppSelector(state => state.app.showResult)

  return (
      <body className={showResult ? "" : "hidden"}>
          <Layout>
              <MainScreen activeTab={activeTab} setActiveTab={setActiveTab} />
              <Result activeTab={activeTab} />
          </Layout>
      </body>
  );
}

export default App;
