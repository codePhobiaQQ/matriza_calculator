import React from "react";
import Header from "./hoc/Header";
import MainScreen from "./components/shared/MainScreen";
import CalcMatrixSection from "./components/shared/CalcMatrixSection";

function App() {
  return (
    <Header>
      <MainScreen />
      <CalcMatrixSection />
    </Header>
  );
}

export default App;
