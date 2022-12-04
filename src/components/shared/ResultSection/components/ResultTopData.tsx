import React from "react";
import { calculationDataI } from "../../../../redux/reducers/AppSlice";

interface ResultTopData {
  tab?: string;
  data?: calculationDataI;
  onlyTitle?: string;
}

const ResultTopData = ({ tab, data, onlyTitle }: ResultTopData) => {
  return (
    <div className={"ResultTopData"}>
      {onlyTitle ? (
        onlyTitle
      ) : tab === "Совместимость" ? null : (
        <span>{`${data?.name} (${data?.date
          ?.split("-")
          .reverse()
          .join(".")})`}</span>
      )}
    </div>
  );
};

export default ResultTopData;
