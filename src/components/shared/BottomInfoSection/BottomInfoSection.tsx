import React from 'react';
import {useAppSelector} from "../../../hooks/redux";
import fixTwentyTwo from "../../../utils/fixTwentyTwo";

interface BottomInfoSectionI {
  classing?: string;
}

const titleData = {
  1: {
    title1: "Личное",
    title2: "Социальное",
    title3: "Духовное",
    description1: "Понимание кем являетесь на самом деле, истинные желания, дело которому готовы целиком посвятить себя.",
    description2: "Реализация в социуме. Позиционирование перед людьми и ощущение себя сильной личностью.",
    description3: "Энергия третьего предназначения влияет на всю жизнь и отвечает за духовность. Если идти по верному пути, появляется ощущение спокойствия, гармонии и обретение счастливой жизни и энергетической стабильности."
  },
  2: {
    title1: "Отношения",
    title2: "Слияние",
    title3: "Гармония",
    description1: "Показывает, что партнёры должны проработать каждый для себя и чему должны научиться, чтобы быть вместе.",
    description2: "Определяет, какую социальную роль выполняет пара, какую задачу выполняет и какую энергию отдает своему роду. ",
    description3: "Это духовная составляющая пары, это то, на чем базируется пара (ресурс) и куда и к чему ей следует стремиться в своем развитии."
  },
}

const BottomInfoSection = ({classing = ""}: BottomInfoSectionI) => {
  const matrixData = useAppSelector(state => state.app.matrixData)
  const activeTab = useAppSelector(state => state.app.activeTab)

  console.log(activeTab)

  return (
    <>
      {activeTab !== 3 && <div className={`${classing} BottomInfoSection`}>
          <div className="BottomInfoSection_left BottomInfoSection_side">
              <h3>{titleData[activeTab || 1].title1}</h3>
              <p>{titleData[activeTab || 1].description1}</p>
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
              <h3>{titleData[activeTab || 1].title2}</h3>
              <p>{titleData[activeTab || 1].description2}</p>
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
              <h3>{titleData[activeTab || 1].title3}</h3>
              <p>{titleData[activeTab || 1].description3}
              </p>
              <div className="BottomInfoSection_resultLines">
                  <div className="BottomInfoSection_resultLine">
            <span
                className={"BottomInfoSection_resultLine_number"}>{fixTwentyTwo(fixTwentyTwo(Number(matrixData?.j) + Number(matrixData?.h)) + fixTwentyTwo( Number(matrixData?.n) + Number(matrixData?.t)))}</span>
                  </div>
              </div>
          </div>
      </div>}
    </>
  );
};

export default BottomInfoSection;