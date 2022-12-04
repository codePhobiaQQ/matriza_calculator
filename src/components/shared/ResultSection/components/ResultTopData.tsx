import React from "react";
import { calculationDataI } from "../../../../redux/reducers/AppSlice";

interface ResultTopData {
  tab: string;
  data: calculationDataI;
}

const ResultTopData = ({ tab, data }: ResultTopData) => {
  console.log(data);

  return (
    <div className={"ResultTopData"}>
      {tab === "Совместимость" ? null : (
        <span>{`${data.name} (${data.date
          ?.split("-")
          .reverse()
          .join(".")})`}</span>
      )}
    </div>
  );
};

export default ResultTopData;
