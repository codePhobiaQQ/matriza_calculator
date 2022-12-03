import React, { useState } from "react";
import Header from "./hoc/Header";
import MainScreen from "./components/shared/MainScreen";
import CalcMatrixSection from "./components/shared/CalcMatrixSection";
import Result from "./components/shared/ResultSection/Result";
import tabs from "./data/MainScreenData";

function App() {
  const [activeTab, setActiveTab] = useState<string>(Object.keys(tabs)[0]);

  return (
    <Header>
      <MainScreen activeTab={activeTab} setActiveTab={setActiveTab} />
      <Result activeTab={activeTab} />
      <CalcMatrixSection />
    </Header>
  );
}

export default App;
