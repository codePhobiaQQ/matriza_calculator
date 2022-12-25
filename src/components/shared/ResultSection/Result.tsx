import React from "react";
import { useAppSelector } from "../../../hooks/redux";
import Matrix from "../CalcMatrix/Matrix";
import LogoFooter from "../../common/svg/LogoFooter";
import CalcTable from "../CalcTable";
import BottomInfoSection from "../BottomInfoSection/BottomInfoSection";
import ResultTitle from "./components/ResultTitle";

interface ResultI {
  activeTab: string;
}

const Result = ({ activeTab }: ResultI) => {
  const { showResult } = useAppSelector(
    (state) => state.app
  );

  return (
    <>
      {showResult && (
       <>
         <div className={`ResultSection`}>
          <div className="container">
            <div className="MapSection">
              <Matrix />
              <CalcTable />
            </div>
            <BottomInfoSection />
          </div>
        </div>
     </>)}
    </>
  );
};

export default Result;
