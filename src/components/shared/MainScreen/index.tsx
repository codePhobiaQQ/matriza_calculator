import React, { useCallback, useState } from "react";
import ArrowRight from "../../common/svg/ArrowRight";
import CircleBot from "../../common/svg/CircleBot";
import tabs from "../../../data/MainScreenData";

const MainScreen = () => {
  const [activeTab, setActiveTab] = useState<string>(Object.keys(tabs)[0]);
  const changeTab = useCallback((tab: string) => {
    setActiveTab(tab);
  }, []);

  return (
    <div className={"MainScreen"}>
      <CircleBot />
      <div className="container first">
        <div className="leftSide">
          <div className="leftSideInner">
            <h1>{tabs[activeTab].mainScreenText}</h1>
            <button>
              <span>Рассчитать</span>
              <ArrowRight />
            </button>
          </div>
        </div>
        <div className="rightSide">{tabs[activeTab].image()}</div>
      </div>
      <div className="container second">
        <div className="tabsWrapper">
          {Object.keys(tabs).map((tab, index) => (
            <>
              <div
                onClick={() => changeTab(tab)}
                key={tab}
                className={`tab ${tab == activeTab ? "active" : ""}`}
              >
                {tab}
              </div>
              {index + 1 != Object.keys(tabs).length && (
                <div className="separator">/</div>
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
