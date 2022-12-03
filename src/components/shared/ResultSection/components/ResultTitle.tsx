import React from "react";

interface ResultTitleI {
  title: string;
}

const ResultTitle = ({ title }: ResultTitleI) => {
  return <h3 className={"ResultTitle"}>{title}</h3>;
};

export default ResultTitle;
