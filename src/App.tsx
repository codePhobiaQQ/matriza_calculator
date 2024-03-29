import React, {useEffect, useState} from "react";
import MainScreen from "./components/shared/MainScreen";
import Result from "./components/shared/ResultSection/Result";
import tabs from "./data/MainScreenData";
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import Layout from "./hoc/Layout";
import {appSlice} from "./../src/redux/reducers/AppSlice"

const TITLE = 'Матрица судьбы';

function App() {
  const {changeShowResult, changeActiveTab} = appSlice.actions
  const [activeTab, setActiveTab] = useState<string>(Object.keys(tabs)[0]);
  const showResult = useAppSelector(state => state.app.showResult)
  const dispatch = useAppDispatch()

  useEffect(() => {
    document.title = TITLE;
  }, []);

  useEffect(() => {
    dispatch(changeShowResult(false))
    dispatch(changeActiveTab(tabs[activeTab].id))
  }, [activeTab])

  return (
    <body className={showResult ? "" : "hidden"}>
      <Layout>
        <MainScreen activeTab={activeTab} setActiveTab={setActiveTab}/>
        <Result activeTab={activeTab}/>
      </Layout>
    </body>
  );
}

export default App;
