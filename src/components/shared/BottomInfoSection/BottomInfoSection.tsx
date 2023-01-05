import React from 'react';
import {useAppSelector} from "../../../hooks/redux";
import fixTwentyTwo from "../../../utils/fixTwentyTwo";

interface BottomInfoSectionI {
  classing?: string;
}

const BottomInfoSection = ({classing = ""}: BottomInfoSectionI) => {
  const matrixData = useAppSelector(state => state.app.matrixData)

  return (
    <>
      <div className={`${classing} BottomInfoSection`}>
        <div className="BottomInfoSection_left BottomInfoSection_side">
          <h3>Личное</h3>
          <p>Показывает, что партнёры должны проработать каждый для себя и чему должны научиться, чтобы быть вместе.</p>
          <div className="BottomInfoSection_resultLines">
            <div className="BottomInfoSection_resultLine">
              <span className={"BottomInfoSection_resultLine_title"}>Небо</span>
              <span className={"BottomInfoSection_resultLine_number"}>{matrixData?.h}</span>
            </div>
            <div className="BottomInfoSection_resultLine BottomInfoSection_resultLine_center">
              <span className={"BottomInfoSection_resultLine_title"}></span>
              <span
                className={"BottomInfoSection_resultLine_number"}>{fixTwentyTwo(Number(matrixData?.j) + Number(matrixData?.h))}</span>
            </div>
            <div className="BottomInfoSection_resultLine">
              <span className={"BottomInfoSection_resultLine_title"}>Земля</span>
              <span className={"BottomInfoSection_resultLine_number"}>{matrixData?.j}</span>
            </div>
          </div>
        </div>
        <div className="BottomInfoSection_center BottomInfoSection_side">
          <h3>Социальное</h3>
          <p>Определяет, какую социальную роль выполняет пара, какую задачу выполняет и какую энергию отдает своему
            роду.
          </p>
          <div className="BottomInfoSection_resultLines">
            <div className="BottomInfoSection_resultLine">
              <span className={"BottomInfoSection_resultLine_title"}>M</span>
              <span className={"BottomInfoSection_resultLine_number"}>{matrixData?.n}</span>
            </div>
            <div className="BottomInfoSection_resultLine BottomInfoSection_resultLine_center">
              <span className={"BottomInfoSection_resultLine_title"}></span>
              <span
                className={"BottomInfoSection_resultLine_number"}>{fixTwentyTwo(Number(matrixData?.n) + Number(matrixData?.t))}</span>
            </div>
            <div className="BottomInfoSection_resultLine">
              <span className={"BottomInfoSection_resultLine_title"}>Ж</span>
              <span className={"BottomInfoSection_resultLine_number"}>{matrixData?.t}</span>
            </div>
          </div>
        </div>
        <div className="BottomInfoSection_right BottomInfoSection_side">
          <h3>Духовное</h3>
          <p>Это духовная составляющая пары, это то, на чем базируется пара (ресурс) и куда и к чему ей следует
            стремиться в своем развитии.
          </p>
          <div className="BottomInfoSection_resultLines">
            <div className="BottomInfoSection_resultLine">
            <span
              className={"BottomInfoSection_resultLine_number"}>{fixTwentyTwo(fixTwentyTwo(Number(matrixData?.j) + Number(matrixData?.h)) + Number(matrixData?.n) + Number(matrixData?.t))}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomInfoSection;