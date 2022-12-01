import React from "react";
import tabs from "../../../data/MainScreenData";
import Close from "../../common/svg/Close";
import Hands from "../../common/svg/MainPopup/Hands";

interface MainScreenModalI {
  show: boolean;
  handleClose: () => void;
  type: string;
}

const MainScreenModal = ({ show, handleClose, type }: MainScreenModalI) => {
  return (
    <div className={`CalculationModal ${show ? "active" : ""}`}>
      <div className="CalculationModalInner">
        <Close clickHandler={handleClose} />
        <h2>{tabs[type].popupTitle}</h2>
        <p>{tabs[type].popupText}</p>
        <div className="formWrapper">
          <div className="form">
            <input placeholder={"Имя*"} type="text" />
            <input type="text" />
          </div>
          <div className="imageWrapper">{tabs[type].popupImg()}</div>
        </div>
      </div>
    </div>
  );
};

export default MainScreenModal;
