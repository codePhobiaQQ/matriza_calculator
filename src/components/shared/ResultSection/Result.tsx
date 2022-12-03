import React from "react";
import tabs from "../../../data/MainScreenData";
import ResultTitle from "./components/ResultTitle";
import { useAppSelector } from "../../../hooks/redux";

interface ResultI {
  activeTab: string;
}

const Result = ({ activeTab }: ResultI) => {
  const data = useAppSelector((state) => state.app.calculationInputData);
  console.log(data);

  return (
    <div className={"ResultSection"}>
      <div className="container">
        <ResultTitle title={tabs[activeTab].resultTitle} />
      </div>
    </div>
  );
};

export default Result;
