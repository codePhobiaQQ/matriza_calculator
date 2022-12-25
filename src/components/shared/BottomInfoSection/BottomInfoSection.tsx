import React from 'react';

interface BottomInfoSectionI {
    classing?: string;
}

const BottomInfoSection = ({classing = ""}: BottomInfoSectionI) => {
    return (
        <div className={`${classing} BottomInfoSection`}>
            <div className="BottomInfoSection_left BottomInfoSection_side">
        <h3>Поиск себя</h3>
        <p>Соединение мужского и женского. Выстраивание взаимоотношений. Способности, навыки, умения.</p>
        <div className="BottomInfoSection_resultLines">
            <div className="BottomInfoSection_resultLine">
                <span className={"BottomInfoSection_resultLine_title"}>Небо</span>
                <span className={"BottomInfoSection_resultLine_number"}>11</span>
            </div>
            <div className="BottomInfoSection_resultLine BottomInfoSection_resultLine_center">
                <span className={"BottomInfoSection_resultLine_title"}></span>
                <span className={"BottomInfoSection_resultLine_number"}>11</span>
            </div>
            <div className="BottomInfoSection_resultLine">
                <span className={"BottomInfoSection_resultLine_title"}>Земля</span>
                <span className={"BottomInfoSection_resultLine_number"}>11</span>
            </div>
        </div>
    </div>
            <div className="BottomInfoSection_center BottomInfoSection_side">
            <h3>Социализация</h3>
            <p>Социальная и родовая системы.
                Результаты и признания в социуме.
            </p>
            <div className="BottomInfoSection_resultLines">
                <div className="BottomInfoSection_resultLine">
                    <span className={"BottomInfoSection_resultLine_title"}>M</span>
                    <span className={"BottomInfoSection_resultLine_number"}>11</span>
                </div>
                <div className="BottomInfoSection_resultLine BottomInfoSection_resultLine_center">
                    <span className={"BottomInfoSection_resultLine_title"}></span>
                    <span className={"BottomInfoSection_resultLine_number"}>11</span>
                </div>
                <div className="BottomInfoSection_resultLine">
                    <span className={"BottomInfoSection_resultLine_title"}>Ж</span>
                    <span className={"BottomInfoSection_resultLine_number"}>11</span>
                </div>
            </div>
        </div>
            <div className="BottomInfoSection_right BottomInfoSection_side">
                        <h3>Духовная грамотность</h3>
                        <p>Духовный зачет. Кто я для бога?
                            Где божественное во мне?
                        </p>
                        <div className="BottomInfoSection_resultLines">
                            <div className="BottomInfoSection_resultLine">
                                <span className={"BottomInfoSection_resultLine_number"}>15</span>
                            </div>
                        </div>
                    </div>
        </div>
    );
};

export default BottomInfoSection;