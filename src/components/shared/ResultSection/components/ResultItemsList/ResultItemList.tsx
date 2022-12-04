import React from "react";
import { TabItemI } from "../../../../../data/MainScreenData";
import dataText, { dataTextI } from "./data";
import ResultItem from "./ResultItem";

interface ResultItemListI {
  activeTab: string;
}

const ResultItemList = ({ activeTab }: ResultItemListI) => {
  // @ts-ignore
  console.log(Object.keys(dataText[activeTab] as TabItemI));

  return (
    <div className={"ResultItemsList"}>
      {Object.keys(dataText[activeTab]).map((item, index) => (
        <ResultItem item={item} activeTab={activeTab} key={item + index} />
      ))}
    </div>
  );
};

export default ResultItemList;
