import React, { Dispatch, SetStateAction, useCallback, useEffect, useState } from "react";
import ArrowRight from "../../common/svg/ArrowRight";
import CircleBot from "../../common/svg/CircleBot";
import tabs from "../../../data/MainScreenData";
import MainScreenModal from "./MainScreenModal";
import {useAppSelector} from "../../../hooks/redux";

interface MainScreenI {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
}

const MainScreen = ({ activeTab, setActiveTab }: MainScreenI) => {
  const activeTab1 = useAppSelector(state => state.app.activeTab)
  const changeTab = useCallback((tab: string) => {
    setActiveTab(tab);
  }, []);

  useEffect(() => {
    console.log(activeTab1)
    const tab = Object.keys(tabs).filter(tab => tabs[tab].id === activeTab1);
    setActiveTab(tab[0])
  }, [activeTab1]);


  // ----- Modal window -----
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className={"MainScreen"}>
      <CircleBot />
      <div className="container first">
        <div className="leftSide">
          <div className="leftSideInner">
            <h1>{tabs[activeTab]?.mainScreenText}</h1>
            <button onClick={handleShow}>
              <span>Рассчитать</span>
              <ArrowRight />
            </button>
          </div>
        </div>
        <div className="rightSide">{tabs[activeTab]?.image()}</div>
      </div>
      <div className="container second">
        <div className="tabsWrapper">
          {Object.keys(tabs)?.map((tab, index) => (
            <div key={tab} className={"tabsWrapperInner"}>
              <div
                onClick={() => changeTab(tab)}
                className={`tab ${tab == activeTab ? "active" : ""}`}
              >
                <span>{tab}</span>
              </div>
              {index + 1 != Object.keys(tabs).length && (
                <div className="separator">/</div>
              )}
            </div>
          ))}
        </div>
      </div>
      <MainScreenModal type={activeTab} show={show} handleClose={handleClose} />
    </div>
  );
};

export default MainScreen;
