import React from 'react';
import Header from "./hoc/Header";
import MainScreen from "./components/shared/MainScreen";

function App() {
  return (
    <Header>
      <MainScreen />
    </Header>
  );
}

export default App;
