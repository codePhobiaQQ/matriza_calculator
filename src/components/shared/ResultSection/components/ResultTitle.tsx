import React from "react";

interface ResultTitleI {
  title: string;
  classing?: string;
}

const ResultTitle = ({ title, classing }: ResultTitleI) => {
  return <div className={"container"}>
    <h3 className={`ResultTitle ${classing}`}>{title}</h3>
  </div>;
};

export default ResultTitle;
