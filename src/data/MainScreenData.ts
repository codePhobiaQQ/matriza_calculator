import Woman from "../components/common/svg/MainScreen/Woman";
import Pair from "../components/common/svg/MainScreen/Pair";
import Health from "../components/common/svg/MainScreen/Health";
import Hands from "../components/common/svg/MainPopup/Hands";
import Pair1 from "../components/common/svg/MainPopup/Pair1";
import Face from "../components/common/svg/MainPopup/Face";

export interface TabItemI {
  id: number;
  mainScreenText: string;
  image: any;
  popupTitle: string;
  popupText: string;
  popupImg: any;
  resultTitle: string;
}

interface TabsI {
  [name: string]: TabItemI;
}

const tabs: TabsI = {
  "Матрица онлайн": {
    id: 1,
    mainScreenText: "Рассчитайте Матрицу судьбы",
    image: Woman,
    popupTitle: "БЕСПЛАТНЫЙ КАЛЬКУЛЯТОР СОВМЕСТИМОСТЬ ПО МАТРИЦЕ СУДЬБЫ ОНЛАЙН",
    popupText:
      "Здесь вы можете абсолютно бесплатно проверить свою матрицу и увидеть, как работает наш сервис с умным калькулятором Матрицы судьбы (при нажатии на раздел в диаграмме подсвечиваются энергии, описание которых в этом разделе). Наш расчёт на 100% соответствует расчету автора метода Наталии Ладини. За расчеты других школ мы ответственности не несём.",
    popupImg: Hands,
    resultTitle: "ИНФОРМАЦИЯ О ВАС",
  },
  Совместимость: {
    id: 2,
    mainScreenText: "Проверьте Вашу совместимость",
    image: Pair,
    popupTitle: "БЕСПЛАТНЫЙ КАЛЬКУЛЯТОР СОВМЕСТИМОСТЬ ПО МАТРИЦЕ СУДЬБЫ ОНЛАЙН",
    popupText:
      "Здесь вы можете абсолютно бесплатно проверить свою матрицу и увидеть, как работает наш сервис с умным калькулятором Матрицы судьбы (при нажатии на раздел в диаграмме подсвечиваются энергии, описание которых в этом разделе). Наш расчёт на 100% соответствует расчету автора метода Наталии Ладини. За расчеты других школ мы ответственности не несём.",
    popupImg: Pair1,
    resultTitle: "ВАША СОВМЕСТИМОСТЬ",
  },
  "Матрица здоровья": {
    id: 3,
    mainScreenText: "Проверьте Вашу матрицу здоровья",
    image: Health,
    popupTitle: "БЕСПЛАТНЫЙ КАЛЬКУЛЯТОР ЗДОРОВЬЯ ПО МАТРИЦЕ СУДЬБЫ ОНЛАЙН",
    popupText:
      "Здесь вы можете абсолютно бесплатно проверить свою матрицу и увидеть, как работает наш сервис с умным калькулятором Матрицы судьбы (при нажатии на раздел в диаграмме подсвечиваются энергии, описание которых в этом разделе). Наш расчёт на 100% соответствует расчету автора метода Наталии Ладини. За расчеты других школ мы ответственности не несём.",
    popupImg: Face,
    resultTitle: "ИНФОРМАЦИЯ О ВАС",
  },
};

export default tabs;
