import Woman from "../components/common/svg/MainScreen/Woman";
import Pair from "../components/common/svg/MainScreen/Pair";
import Health from "../components/common/svg/MainScreen/Health";

interface TabsI {
  [name: string]: {
    id: number;
    mainScreenText: string;
    image: any;
  };
}

const tabs: TabsI = {
  "Матрица онлайн": {
    id: 1,
    mainScreenText: "Рассчитайте Матрицу судьбы",
    image: Woman,
  },
  Совместимость: {
    id: 2,
    mainScreenText: "Проверьте Вашу  совместимость ",
    image: Pair,
  },
  "Матрица здоровья": {
    id: 3,
    mainScreenText: "Проверьте Вашу  совместимость ",
    image: Health,
  },
};

export default tabs;
