import React from 'react';

interface Description3I {
  classing?: string;
}

const Description3 = ({classing = ""}: Description3I) => {
  return (
    <div className={`${classing} ResultDescription`}>
      <div className="container">
        <p>Ваше физическое здоровье напрямую зависит от ментального здоровья, поэтому рекомендуем обратиться к эксперту
          нашей школы за подробной информацией.</p>
        <p>А сейчас сделайте шаг к Вашему здоровью и получите уникальную практику</p>
        <a href={"https://t.me/Kris_bresselbot"} target={"_blank"}>Получить</a>
      </div>
    </div>
  );
};

export default Description3;