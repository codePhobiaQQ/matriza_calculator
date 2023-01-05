import React from 'react';

interface Description1I {
  classing?: string;
}

const Description1 = ({classing = ""}: Description1I) => {
  return (
    <div className={`${classing} ResultDescription`}>
      <div className="container">
        <p>С помощью данной матрицы Вы сможете узнать о себе : </p>
        <ul>
          <li>
            Личное позиционирование
          </li>
          <li>
            Прогноз по периодам жизни
          </li>
          <li>
            Личные качества
          </li>
          <li>
            Таланты
          </li>
          <li>
            Предназначение
          </li>
          <li>
            Карма прошлой жизни
          </li>
          <li>
            Любовные отношения
          </li>
          <li>
            Деньги, богатство
          </li>
          <li>
            Родовая система
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Description1;