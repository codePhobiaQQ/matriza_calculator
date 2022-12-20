import React, { useCallback, useRef, useState } from "react";
import tabs from "../../../data/MainScreenData";
import Close from "../../common/svg/Close";
import Select from "react-select";
import { appSlice } from "./../../../redux/reducers/AppSlice";
import { useDispatch } from "react-redux";
import onlineMatrixCalculation from "../../../functions/onlineMatrixCalculation";

interface MainScreenModalI {
  show: boolean;
  handleClose: () => void;
  type: string;
}

const isPersonOptions = [
  { value: "personal", label: "Личное" },
  { value: "notpersonal", label: "Не личное" },
];

const maleOptions = [
  { value: "man", label: "Мужской" },
  { value: "woman", label: "Женский" },
];

interface selectValueI {
  props: {
    label: string;
    value: string;
  };
}

const MainScreenModal = ({ show, handleClose, type }: MainScreenModalI) => {
  const dispatch = useDispatch();
  const { chageCalculationData, changeMatrixData, changeShowResult } = appSlice.actions;
  console.log();

  const [name, setName] = useState<string>("");
  const [alertText, setAlertText] = useState<string>("");

  const editName = useCallback((e: any) => {
    setName(e.target.value);
  }, []);
  const [date, setDate] = useState<string>("");
  const editDate = useCallback((e: any) => {
    setDate(e.target.value);
  }, []);
  const [date1, setDate1] = useState<string>("");
  const editDate1 = useCallback((e: any) => {
    setDate1(e.target.value);
  }, []);

  const personalRef = useRef(null);
  const maleRef = useRef(null);

  const errorHandler = () => {
    setAlertText("Введите все данные!");
    setTimeout(() => {
      setAlertText("");
    }, 1500);
  };
  const nullData = () => {
    setName("");
    setDate("");
    // @ts-ignore
    maleRef.current?.clearValue();
    // @ts-ignore
    personalRef.current?.clearValue();
  };

  const calcFunction = () => {
    let personalValue;
    // @ts-ignore
    if (personalRef.current.props.value) {
      // @ts-ignore
      personalValue = personalRef.current.props.value.value;
    }
    let maleValue;
    // @ts-ignore
    if (maleRef.current.props.value) {
      // @ts-ignore
      maleValue = maleRef.current.props.value.value;
    }

    // First Type
    if (tabs[type].id == 1) {
      if (!(name && date && personalValue && maleValue)) {
        errorHandler();
      } else {
        dispatch(
          chageCalculationData({ name, date, personalValue, maleValue })
        );
        dispatch(changeMatrixData(onlineMatrixCalculation(date)))
        dispatch(changeShowResult(true))

        handleClose();
        nullData();
      }
    }
    // Second Type
    else if (tabs[type].id == 2) {
      if (!(name && date && personalValue && maleValue)) {
        errorHandler();
      } else {
        console.log("here2");
      }
    }
    // Third Type
    else {
      if (!(name && date && personalValue && maleValue)) {
        errorHandler();
      } else {
        console.log("here3");
      }
    }
  };

  return (
    <div className={`CalculationModal ${show ? "active" : ""}`}>
      <div className="CalculationModalInner">
        <Close clickHandler={handleClose} />
        <h2>{tabs[type].popupTitle}</h2>
        <p>{tabs[type].popupText}</p>
        <div className="formWrapper">
          <div className="form">
            {(tabs[type].id == 1 || tabs[type].id == 3) && (
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
                    ref={personalRef}
                    placeholder={"Личное*"}
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
                    ref={maleRef}
                    placeholder={"Пол*"}
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
                <span>Партнер 1</span>
                <input
                  placeholder={"Дата рождения*"}
                  value={date}
                  onChange={editDate}
                  type="date"
                />
                <span>Партнер 2</span>
                <input
                  placeholder={"Дата рождения*"}
                  value={date1}
                  onChange={editDate1}
                  type="date"
                />
              </>
            )}
            <button onClick={calcFunction}>Рассчитать</button>
            <div
              className={`alertWrapper ${
                alertText.length ? "visible" : "hidden"
              }`}
            >
              {alertText}
            </div>
          </div>
          <div className="imageWrapper">{tabs[type].popupImg()}</div>
        </div>
      </div>
    </div>
  );
};

export default MainScreenModal;
