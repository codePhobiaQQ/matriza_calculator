import React from "react";

interface ResultTitleI {
  title: string;
  classing?: string;
}

const ResultTitle = ({ title, classing }: ResultTitleI) => {
  return <h3 className={`ResultTitle ${classing}`}>{title}</h3>;
};

export default ResultTitle;
