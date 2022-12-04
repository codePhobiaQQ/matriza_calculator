import React from "react";
import tabs from "../../../data/MainScreenData";
import ResultTitle from "./components/ResultTitle";
import { useAppSelector } from "../../../hooks/redux";
import ResultTopData from "./components/ResultTopData";
import ResultItemList from "./components/ResultItemsList/ResultItemList";
import Matrix from "../CalcMatrix/Matrix";

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

        <ResultTitle classing={"mt-100 fz"} title={"ПЕРСОНАЛЬНЫЙ РАСЧЕТ"} />
        <ResultTopData onlyTitle={"Карта здоровья"} />

        <div className="MapSection">
          <Matrix />
        </div>
      </div>
    </div>
  );
};

export default Result;
