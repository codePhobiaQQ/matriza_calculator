import React, {useCallback, useRef, useState} from "react";
import tabs from "../../../data/MainScreenData";
import Close from "../../common/svg/Close";
import Select from "react-select";
import {appSlice} from "./../../../redux/reducers/AppSlice";
import {useDispatch} from "react-redux";
import onlineMatrixCalculation from "../../../functions/onlineMatrixCalculation";
import sovmestMatrixCalculation from "../../../functions/sovmestMatrixCalculation";

interface MainScreenModalI {
  show: boolean;
  handleClose: () => void;
  type: string;
}

// const isPersonOptions = [
//   {value: "personal", label: "Личное"},
//   {value: "notpersonal", label: "Не личное"},
// ];
//
// const maleOptions = [
//   {value: "man", label: "Мужской"},
//   {value: "woman", label: "Женский"},
// ];

const yearsOption = [...Object.keys(new Array(100).fill("")).map(el => ({
  value: Number(el) + 1950,
  label: (Number(el) + 1950).toString()
}))]
const daysOption = [...Object.keys(new Array(31).fill("")).map(el => ({
  value: Number(el) + 1,
  label: (Number(el) + 1).toString()
}))]
const monthsOption = [
  {
    label: "Январь",
    // days: 31,
    value: 1,
  },
  {
    label: "Февраль",
    // days: 29,
    value: 2,
  },
  {
    label: "Март",
    // days: 31,
    value: 3,
  },
  {
    label: "Апрель",
    // days: 30,
    value: 4,
  },
  {
    label: "Май",
    // days: 31,
    value: 5,
  },
  {
    label: "Июнь",
    // days: 30,
    value: 6,
  },
  {
    label: "Июль",
    // days: 31,
    value: 7,
  },
  {
    label: "Август",
    // days: 31,
    value: 8,
  },
  {
    label: "Сентябрь",
    // days: 30,
    value: 9,
  },
  {
    label: "Октябрь",
    // days: 31,
    value: 10,
  },
  {
    label: "Ноябрь",
    // days: 30,
    value: 11,
  },
  {
    label: "Декабрь",
    // days: 31,
    value: 12,
  },
];

interface selectValueI {
  props: {
    label: string;
    value: string;
  };
}

const MainScreenModal = ({show, handleClose, type}: MainScreenModalI) => {
  const dispatch = useDispatch();
  const {chageCalculationData, changeMatrixData, changeShowResult} = appSlice.actions;

  // const [name, setName] = useState<string>("");
  const [alertText, setAlertText] = useState<string>("");

  // const editName = useCallback((e: any) => {
  //   setName(e.target.value);
  // }, []);
  // const [date, setDate] = useState<string>("");
  // const editDate = useCallback((e: any) => {
  //   setDate(e.target.value);
  // }, []);
  // const [date1, setDate1] = useState<string>("");
  // const editDate1 = useCallback((e: any) => {
  //   setDate1(e.target.value);
  // }, []);

  // const personalRef = useRef(null);
  // const maleRef = useRef(null);

  const year1Ref = useRef(null);
  const year2Ref = useRef(null);
  const month1Ref = useRef(null);
  const month2Ref = useRef(null);
  const day1Ref = useRef(null);
  const day2Ref = useRef(null);

  const errorHandler = () => {
    setAlertText("Введите все данные!");
    setTimeout(() => {
      setAlertText("");
    }, 1500);
  };
  const nullData = () => {
    // @ts-ignore
    year1Ref.current?.clearValue();
    // @ts-ignore
    year2Ref.current?.clearValue();
    // @ts-ignore
    month1Ref.current?.clearValue();
    // @ts-ignore
    month2Ref.current?.clearValue();
    // @ts-ignore
    day1Ref.current?.clearValue();
    // @ts-ignore
    day2Ref.current?.clearValue();
  };

  const calcFunction = () => {
    let personalValue;

    // First Type
    if (tabs[type].id == 1) {
      let yearValue;
      // @ts-ignore
      if (year1Ref.current.props.value) {
        // @ts-ignore
        yearValue = year1Ref.current.props.value.value;
      }
      let monthValue;
      // @ts-ignore
      if (month1Ref.current.props.value) {
        // @ts-ignore
        monthValue = month1Ref.current.props.value.value;
      }
      let dayValue;
      // @ts-ignore
      if (day1Ref.current.props.value) {
        // @ts-ignore
        dayValue = day1Ref.current.props.value.value;
      }

      if (!(yearValue && monthValue && dayValue)) {
        errorHandler();
      } else {
        dispatch(
          chageCalculationData({ date: `${yearValue}-${monthValue}-${dayValue}` })
        );
        dispatch(changeMatrixData(onlineMatrixCalculation(`${yearValue}-${monthValue}-${dayValue}`)))
        dispatch(changeShowResult(true))
        handleClose();
        nullData();
      }
    }


    // Second Type
    else if (tabs[type].id == 2) {

      let yearValue_1;
      // @ts-ignore
      if (year1Ref.current.props.value) {
        // @ts-ignore
        yearValue_1 = year1Ref.current.props.value.value;
      }
      let monthValue_1;
      // @ts-ignore
      if (month1Ref.current.props.value) {
        // @ts-ignore
        monthValue_1 = month1Ref.current.props.value.value;
      }
      let dayValue_1;
      // @ts-ignore
      if (day1Ref.current.props.value) {
        // @ts-ignore
        dayValue_1 = day1Ref.current.props.value.value;
      }
      let yearValue_2;
      // @ts-ignore
      if (year1Ref.current.props.value) {
        // @ts-ignore
        yearValue_2 = year2Ref.current.props.value.value;
      }
      let monthValue_2;
      // @ts-ignore
      if (month1Ref.current.props.value) {
        // @ts-ignore
        monthValue_2 = month2Ref.current.props.value.value;
      }
      let dayValue_2;
      // @ts-ignore
      if (day1Ref.current.props.value) {
        // @ts-ignore
        dayValue_2 = day2Ref.current.props.value.value;
      }

      if (!(yearValue_1 && yearValue_2 && monthValue_1 && monthValue_2 && dayValue_1 && dayValue_2)) {
        errorHandler();
      } else {
        dispatch(changeMatrixData(sovmestMatrixCalculation(`${yearValue_1}-${monthValue_1}-${dayValue_1}`, `${yearValue_2}-${monthValue_2}-${dayValue_2}`)))
        dispatch(changeShowResult(true))
        handleClose();
        nullData();
      }
    }
    // Third Type
    else {
      let yearValue;
      // @ts-ignore
      if (year1Ref.current.props.value) {
        // @ts-ignore
        yearValue = year1Ref.current.props.value.value;
      }
      let monthValue;
      // @ts-ignore
      if (month1Ref.current.props.value) {
        // @ts-ignore
        monthValue = month1Ref.current.props.value.value;
      }
      let dayValue;
      // @ts-ignore
      if (day1Ref.current.props.value) {
        // @ts-ignore
        dayValue = day1Ref.current.props.value.value;
      }

      if (!(yearValue && monthValue && dayValue)) {
        errorHandler();
      } else {
        dispatch(
          chageCalculationData({ date: `${yearValue}-${monthValue}-${dayValue}` })
        );
        dispatch(changeMatrixData(onlineMatrixCalculation(`${yearValue}-${monthValue}-${dayValue}`)))
        dispatch(changeShowResult(true))
        handleClose();
        nullData();
      }
    }
  };

  return (
    <div className={`CalculationModal ${show ? "active" : ""}`}>
      <div className="CalculationModalInner">
        <Close clickHandler={handleClose}/>
        <h2>{tabs[type].popupTitle}</h2>
        {/*<p>{tabs[type].popupText}</p>*/}
        <div className="formWrapper">
          <div className="form">
            {(tabs[type].id == 1 || tabs[type].id == 3) && (
              <>
                <div className="selectWrapper">
                  <Select
                    ref={year1Ref}
                    placeholder={"Год"}
                    classNames={{
                      container: (state) => "selectContainer",
                      valueContainer: (state) => "selectValueContainer",
                      input: (state) => "selectInput",
                      control: (state) =>
                        state.isFocused ? "selectData" : "selectData",
                    }}
                    options={yearsOption}
                  />
                </div>
                <div className="selectWrapper">
                  <Select
                    ref={month1Ref}
                    placeholder={"Месяц"}
                    classNames={{
                      container: (state) => "selectContainer",
                      valueContainer: (state) => "selectValueContainer",
                      input: (state) => "selectInput",
                      control: (state) =>
                        state.isFocused ? "selectData" : "selectData",
                    }}
                    options={monthsOption}
                  />
                </div>
                <div className="selectWrapper">
                  <Select
                    ref={day1Ref}
                    placeholder={"День"}
                    classNames={{
                      container: (state) => "selectContainer",
                      valueContainer: (state) => "selectValueContainer",
                      input: (state) => "selectInput",
                      control: (state) =>
                        state.isFocused ? "selectData" : "selectData",
                    }}
                    options={daysOption}
                  />
                </div>
              </>
            )}
            {tabs[type].id == 2 && (
              <>
                <span>Партнер 1</span>
                <div className="selectWrapper">
                  <Select
                    ref={year1Ref}
                    placeholder={"Год"}
                    classNames={{
                      container: (state) => "selectContainer",
                      valueContainer: (state) => "selectValueContainer",
                      input: (state) => "selectInput",
                      control: (state) =>
                        state.isFocused ? "selectData" : "selectData",
                    }}
                    options={yearsOption}
                  />
                </div>
                <div className="selectWrapper">
                  <Select
                    ref={month1Ref}
                    placeholder={"Месяц"}
                    classNames={{
                      container: (state) => "selectContainer",
                      valueContainer: (state) => "selectValueContainer",
                      input: (state) => "selectInput",
                      control: (state) =>
                        state.isFocused ? "selectData" : "selectData",
                    }}
                    options={monthsOption}
                  />
                </div>
                <div className="selectWrapper">
                  <Select
                    ref={day1Ref}
                    placeholder={"День"}
                    classNames={{
                      container: (state) => "selectContainer",
                      valueContainer: (state) => "selectValueContainer",
                      input: (state) => "selectInput",
                      control: (state) =>
                        state.isFocused ? "selectData" : "selectData",
                    }}
                    options={daysOption}
                  />
                </div>
                <span className={"SecondPartner"}>Партнер 2</span>
                <div className="selectWrapper">
                  <Select
                    ref={year2Ref}
                    placeholder={"Год"}
                    classNames={{
                      container: (state) => "selectContainer",
                      valueContainer: (state) => "selectValueContainer",
                      input: (state) => "selectInput",
                      control: (state) =>
                        state.isFocused ? "selectData" : "selectData",
                    }}
                    options={yearsOption}
                  />
                </div>
                <div className="selectWrapper">
                  <Select
                    ref={month2Ref}
                    placeholder={"Месяц"}
                    classNames={{
                      container: (state) => "selectContainer",
                      valueContainer: (state) => "selectValueContainer",
                      input: (state) => "selectInput",
                      control: (state) =>
                        state.isFocused ? "selectData" : "selectData",
                    }}
                    options={monthsOption}
                  />
                </div>
                <div className="selectWrapper">
                  <Select
                    ref={day2Ref}
                    placeholder={"День"}
                    classNames={{
                      container: (state) => "selectContainer",
                      valueContainer: (state) => "selectValueContainer",
                      input: (state) => "selectInput",
                      control: (state) =>
                        state.isFocused ? "selectData" : "selectData",
                    }}
                    options={daysOption}
                  />
                </div>
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
