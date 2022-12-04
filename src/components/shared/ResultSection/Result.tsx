import React from "react";
import tabs from "../../../data/MainScreenData";
import ResultTitle from "./components/ResultTitle";
import { useAppSelector } from "../../../hooks/redux";
import ResultTopData from "./components/ResultTopData";
import ResultItemList from "./components/ResultItemsList/ResultItemList";

interface ResultI {
  activeTab: string;
}

const Result = ({ activeTab }: ResultI) => {
  const { calculationInputData, showResult } = useAppSelector(
    (state) => state.app
  );

  return (
    <div className={`ResultSection ${showResult ? "active" : ""}`}>
      <div className="container">
        <ResultTitle title={tabs[activeTab].resultTitle} />
        <ResultTopData data={calculationInputData} tab={activeTab} />
        <ResultItemList activeTab={activeTab} />
      </div>
    </div>
  );
};

export default Result;