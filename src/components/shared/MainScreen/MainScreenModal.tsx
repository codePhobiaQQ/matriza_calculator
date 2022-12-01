import React, { useCallback, useState } from "react";
import tabs from "../../../data/MainScreenData";
import Close from "../../common/svg/Close";
import Select from "react-select";

interface MainScreenModalI {
  show: boolean;
  handleClose: () => void;
  type: string;
}

const isPersonOptions = [
  { value: "man", label: "Мужской" },
  { value: "woman", label: "Женский" },
];

const maleOptions = [
  { value: "man", label: "Мужской" },
  { value: "woman", label: "Женский" },
];

const MainScreenModal = ({ show, handleClose, type }: MainScreenModalI) => {
  const [name, setName] = useState<string>("");
  const editName = useCallback((e: any) => {
    setName(e.target.value);
  }, []);
  const [date, setDate] = useState<string>("");
  const editDate = useCallback((e: any) => {
    setDate(e.target.value);
  }, []);

  const calcFunction = () => {
    console.log("calc");
  };

  return (
    <div className={`CalculationModal ${show ? "active" : ""}`}>
      <div className="CalculationModalInner">
        <Close clickHandler={handleClose} />
        <h2>{tabs[type].popupTitle}</h2>
        <p>{tabs[type].popupText}</p>
        <div className="formWrapper">
          <div className="form">
            {tabs[type].id == 1 && (
              <>
                <input
                  value={name}
                  onChange={editName}
                  placeholder={"Имя*"}
                  type="text"
                />
                <input value={date} onChange={editDate} type="date" />
                <div className="selectWrapper">
                  <Select
                    classNames={{
                      container: (state) => "selectContainer",
                      valueContainer: (state) => "selectValueContainer",
                      input: (state) => "selectInput",
                      control: (state) =>
                        state.isFocused ? "selectData" : "selectData",
                    }}
                    options={isPersonOptions}
                  />
                </div>
                <div className="selectWrapper">
                  <Select
                    classNames={{
                      container: (state) => "selectContainer",
                      control: (state) => "selectData",
                    }}
                    options={maleOptions}
                  />
                </div>
              </>
            )}
            {tabs[type].id == 2 && (
              <>
                <input
                  value={name}
                  onChange={editName}
                  placeholder={"Имя*"}
                  type="text"
                />
                <input value={date} onChange={editDate} type="date" />
              </>
            )}
            {tabs[type].id == 3 && (
              <>
                <input
                  value={name}
                  onChange={editName}
                  placeholder={"Имя*"}
                  type="text"
                />
                <input value={date} onChange={editDate} type="date" />
              </>
            )}
            <button onClick={calcFunction}>Рассчитать</button>
          </div>
          <div className="imageWrapper">{tabs[type].popupImg()}</div>
        </div>
      </div>
    </div>
  );
};

export default MainScreenModal;
