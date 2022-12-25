import React from 'react';

interface Description2I {
    classing?: string;
}

const Description2 = ({classing = ""}: Description2I) => {
    return (
        <div className={`${classing} ResultDescription`}>
            <div className="container">
                <p>С помощью матрицы совместимости Вы сможете узнать:</p>
                <ul>
                    <li>
                        Финансовый рост
                    </li>
                    <li>
                        Деторождение
                    </li>
                    <li>
                        Отношения с родными
                    </li>
                    <li>
                        Гармония и страсть в любовных отношениях
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Description2;