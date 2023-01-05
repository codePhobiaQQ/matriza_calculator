import React from 'react';
import {useAppSelector} from "../../../hooks/redux";

interface ActionSectionI {
  classing?: string;
}

const ActionSection = ({classing = ""}: ActionSectionI) => {
  const activeTab = useAppSelector(state => state.app.activeTab)

  return (
    <>
      {activeTab == 1 &&
      <div className={`ActionSection ${classing}`}>
          <h3>Эксперты Школы BRESSEL владеют уникальными знаниями для расчета Матрицы года и если Вы хотите узнать, что принесёт лично Вам текущий или предстоящий год, напишите нам!</h3>
          <button>Заказать</button>
      </div>
      }
      {activeTab == 2 &&
      <div className={`ActionSection ${classing}`}>
          <h3>Для получения подробного описания Вашей матрицы судьбы обратитесь к эксперту Школы BRESSEL </h3>
          <button>Запись на консультацию</button>
      </div>
      }
    </>
  );
};

export default ActionSection;