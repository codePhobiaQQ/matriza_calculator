import React from "react";
import {useAppSelector} from "../../../hooks/redux";
import Matrix from "../CalcMatrix/Matrix";
import CalcTable from "../CalcTable";
import BottomInfoSection from "../BottomInfoSection/BottomInfoSection";
import ResultTitle from "./components/ResultTitle";
import tabs from "../../../data/MainScreenData";
import Description1 from "./components/descriptions/Description1";
import Description2 from "./components/descriptions/Description2";
import Description3 from "./components/descriptions/Description3";
import DecriptPeriods from "../DecriptPeriods/DecriptPeriods";
import ActionSection from "../ActionSection/ActionSection";

interface ResultI {
  activeTab: string;
}

const Result = ({activeTab}: ResultI) => {
  const activeTab1 = useAppSelector(state => state.app.activeTab)
  const {showResult} = useAppSelector(
    (state) => state.app
  );

  const chooseDescription = () => {
    if (tabs[activeTab].id === 1) {
      return <Description1/>
    } else if (tabs[activeTab].id === 2) {
      return <Description2/>
    } else {
      return <Description3/>
    }
  }

  return (
    <>
      {showResult && (
        <>
          <div className={`ResultSection`}>
            <ResultTitle title={tabs[activeTab].resultTitle}/>
            {chooseDescription()}
            <div className="container">
              <div className="MapSection">
                <Matrix activeTab={activeTab} classing={`${tabs[activeTab].id !== 3 ? "m-auto" : ""}`}/>
                {
                  tabs[activeTab].id === 3 && <CalcTable />
                }
              </div>
              {activeTab1 !== 3 && <h3 className={`BottomInfoTitle ResultTitle m_t_20`}>Предназначение</h3>}
              <BottomInfoSection />
              <DecriptPeriods />
              <ActionSection />
            </div>
          </div>
        </>)}
    </>
  );
};

export default Result;
