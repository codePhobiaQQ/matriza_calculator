import Woman from "../components/common/svg/MainScreen/Woman";
import Pair from "../components/common/svg/MainScreen/Pair";
import Health from "../components/common/svg/MainScreen/Health";
import Hands from "../components/common/svg/MainPopup/Hands";
import Pair1 from "../components/common/svg/MainPopup/Pair1";
import Face from "../components/common/svg/MainPopup/Face";
import {activeTabType} from "../redux/reducers/AppSlice";

export interface TabItemI {
  id: activeTabType;
  mainScreenText: string;
  image: any;
  popupTitle: string;
  popupText: string;
  popupImg: any;
  resultTitle: string;
}

export type resultType = "Матрица онлайн" | "Совместимость" | "Матрица здоровья"

interface TabsI {
  [name: string]: TabItemI;
}

const tabs: TabsI = {
  "Личная матрица": {
    id: 1,
    mainScreenText: "Личная матрица",
    image: Woman,
    popupTitle: "КАЛЬКУЛЯТОР ПО МАТРИЦЕ СУДЬБЫ",
    popupText:
      "Здесь вы можете абсолютно бесплатно проверить свою матрицу и увидеть, как работает наш сервис с умным калькулятором Матрицы судьбы (при нажатии на раздел в диаграмме подсвечиваются энергии, описание которых в этом разделе). Наш расчёт на 100% соответствует расчету автора метода Наталии Ладини. За расчеты других школ мы ответственности не несём.",
    popupImg: Hands,
    resultTitle: "ИНФОРМАЦИЯ О ВАС",
  },
  "Матрица совместимости": {
    id: 2,
    mainScreenText: "Матрица совместимости",
    image: Pair,
    popupTitle: "КАЛЬКУЛЯТОР CОВМЕСТИМОСТИ",
    popupText:
      "Здесь вы можете абсолютно бесплатно проверить свою матрицу и увидеть, как работает наш сервис с умным калькулятором Матрицы судьбы (при нажатии на раздел в диаграмме подсвечиваются энергии, описание которых в этом разделе). Наш расчёт на 100% соответствует расчету автора метода Наталии Ладини. За расчеты других школ мы ответственности не несём.",
    popupImg: Pair1,
    resultTitle: "ВАША СОВМЕСТИМОСТЬ",
  },
  "Матрица здоровья": {
    id: 3,
    mainScreenText: "Матрица здоровья",
    image: Health,
    popupTitle: "КАЛЬКУЛЯТОР ЗДОРОВЬЯ",
    popupText:
      "Здесь вы можете абсолютно бесплатно проверить свою матрицу и увидеть, как работает наш сервис с умным калькулятором Матрицы судьбы (при нажатии на раздел в диаграмме подсвечиваются энергии, описание которых в этом разделе). Наш расчёт на 100% соответствует расчету автора метода Наталии Ладини. За расчеты других школ мы ответственности не несём.",
    popupImg: Face,
    resultTitle: "ИНФОРМАЦИЯ О ВАС",
  },
};

export default tabs;
