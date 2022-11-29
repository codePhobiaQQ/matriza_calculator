import React from "react";
import Woman from "../../common/svg/Woman";
import ArrowRight from "../../common/svg/ArrowRight";
import CircleBot from "../../common/svg/CircleBot";

const MainScreen = () => {
  return (
    <div className={"MainScreen"}>
      <CircleBot />
      <div className="container first">
        <div className="leftSide">
          <div className="leftSideInner">
            <h1>Рассчитайте Матрицу судьбы </h1>
            <button>
              <span>Рассчитать</span>
              <ArrowRight />
            </button>
          </div>
        </div>
        <div className="rightSide">
          <Woman />
        </div>
      </div>
      <div className="container second">
        <div className="tabsWrapper">
          <div className="tab active">
            Матрица
            <br /> онлайн
          </div>
          <div className="separator">/</div>
          <div className="tab">Совместимость</div>
          <div className="separator">/</div>
          <div className="tab">
            Матрица
            <br /> здоровья
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
