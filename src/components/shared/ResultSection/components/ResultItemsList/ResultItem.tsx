import React, { useState } from "react";
import ArrowDown from "../../../../common/svg/ArrowDown";
import dataText from "./data";

interface ResultItemI {
  item: string;
  activeTab: string;
}

const ResultItem = ({ activeTab, item }: ResultItemI) => {
  const [isTabOpen, setIsTabOpen] = useState<boolean>(false);
  const editOpenHandler = () => {
    setIsTabOpen((prevState) => !prevState);
  };

  return (
    <div
      onClick={editOpenHandler}
      className={`ResultItem ${isTabOpen ? "active" : ""}`}
    >
      <div className="ResultItemHeader">
        <span>{item}</span>
        <ArrowDown isActive={isTabOpen} clickHandler={editOpenHandler} />
      </div>
      <div
        className="ResultItemContent"
        dangerouslySetInnerHTML={{ __html: dataText[activeTab][item]["1"] }}
      ></div>
    </div>
  );
};

export default ResultItem;
