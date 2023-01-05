import React, { useState } from "react";
import ArrowDown from "../../../../common/svg/ArrowDown";
import dataText from "./data";

interface ResultItemI {
  item: string[];
  periodNumb: number;
  isFinance?: boolean;
  titleText?: string;
  // activeTab: string;
}

const ResultItem = ({ item, periodNumb, isFinance, titleText }: ResultItemI) => {
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
        {/*<span>{`${isFinance ? "Финансовая карма" : `Рекомендации на ближайший период жизни ${periodNumb}`}`}</span>*/}
        <span>{titleText}</span>
        <ArrowDown isActive={isTabOpen} clickHandler={editOpenHandler} />
      </div>
      <div
        className="ResultItemContent"
        // dangerouslySetInnerHTML={{ __html: dataText[activeTab][item]["1"] }}
      >
        {item.map((text, index) => (
          <p key={"text" + index}>{text}</p>
        ))}
      </div>
    </div>
  );
};

export default ResultItem;
