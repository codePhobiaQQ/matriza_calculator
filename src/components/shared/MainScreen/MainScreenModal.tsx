import React from "react";
import tabs from "../../../data/MainScreenData";
import Close from "../../common/svg/Close";

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
      </div>
    </div>
  );
};

export default MainScreenModal;
