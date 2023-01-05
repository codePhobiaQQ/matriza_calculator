import React from 'react';

interface ActionSectionI {
  classing?: string;
}

const ActionSection = ({classing = ""}: ActionSectionI) => {
  return (
    <div className={`ActionSection ${classing}`}>
      <h3>Для получения подробного описания Вашей матрицы судьбы обратитесь к эксперту Школы BRESSEL </h3>
      <button>Запись на консультацию</button>
    </div>
  );
};

export default ActionSection;