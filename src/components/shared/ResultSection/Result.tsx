import React from "react";
import { useAppSelector } from "../../../hooks/redux";
import Matrix from "../CalcMatrix/Matrix";
import CalcTable from "../CalcTable";
import BottomInfoSection from "../BottomInfoSection/BottomInfoSection";
import ResultTitle from "./components/ResultTitle";
import tabs from "../../../data/MainScreenData";
import Description1 from "./components/descriptions/Description1";
import Description2 from "./components/descriptions/Description2";
import Description3 from "./components/descriptions/Description3";
import DecriptPeriods from "../DecriptPeriods/DecriptPeriods";

interface ResultI {
  activeTab: string;
}

const Result = ({ activeTab }: ResultI) => {
  const { showResult } = useAppSelector(
    (state) => state.app
  );

  const chooseDescription = () => {
    if (tabs[activeTab].id === 1) {
      return <Description1 />
    }
    else if (tabs[activeTab].id === 2) {
      return <Description2 />
    }
    else {
      return <Description3 />
    }
  }

  return (
    <>
      {showResult && (
       <>
         <div className={`ResultSection`}>
           <ResultTitle title={tabs[activeTab].resultTitle} />
           {chooseDescription()}
          <div className="container">
            <div className="MapSection">
              <Matrix activeTab={activeTab} classing={`${tabs[activeTab].id !== 3 ? "m-auto" : ""}`} />
              {
                tabs[activeTab].id === 3 && <CalcTable/>
              }
            </div>
            <BottomInfoSection />
            {/*<DecriptPeriods />*/}
          </div>
        </div>
     </>)}
    </>
  );
};

export default Result;
