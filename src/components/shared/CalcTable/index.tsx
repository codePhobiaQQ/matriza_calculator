import React from 'react';
import tableIcon1 from "./../../../assets/svg/tableIcon1.svg"
import tableIcon2 from "./../../../assets/svg/tableIcon2.svg"
import tableIcon3 from "./../../../assets/svg/tableIcon3.svg"
import tableIcon4 from "./../../../assets/svg/tableIcon4.svg"
import tableIcon5 from "./../../../assets/svg/tableIcon5.svg"
import tableIcon6 from "./../../../assets/svg/tableIcon6.svg"
import tableIcon7 from "./../../../assets/svg/tableIcon7.svg"
import {useAppSelector} from "../../../hooks/redux";

interface CalcTableI {

}

const CalcTable = ({}: CalcTableI) => {
    const matrixData = useAppSelector(state => state.app.matrixData)

    console.log(matrixData)

    return (
        <div className={`CalcTable`}>
            <table className="iksweb">
                <tbody>
                <tr>
                    <th></th>
                    <th>Название чакры</th>
                    <th>Физика</th>
                    <th>Энергия</th>
                    <th>Эмоции</th>
                </tr>
                <tr>
                    <td>
                        <img src={tableIcon1} alt="table1"/>
                    </td>
                    <td>
                        <span className={"Big"}>Сахасрара</span>
                        <span className={"Little"}>Миссия</span>
                    </td>
                    <td>{matrixData?.a}</td>
                    <td>{matrixData?.b}</td>
                    <td>{matrixData?.l}</td>
                </tr>
                <tr>
                    <td>
                        <img src={tableIcon2} alt="table2"/>
                    </td>
                    <td>
                        <span className={"Big"}>Аджна</span>
                        <span className={"Little"}>Судьба, эгрегоры</span>
                    </td>
                    <td>{matrixData?.a2}</td>
                    <td>{matrixData?.b2}</td>
                    <td>{matrixData?.l1}</td>
                </tr>
                <tr>
                    <td>
                        <img src={tableIcon3} alt="table3"/>
                    </td>
                    <td>
                        <span className={"Big"}>Вишудха</span>
                        <span className={"Little"}>Судьба, эгрегоры</span>
                    </td>
                    <td>{matrixData?.a1}</td>
                    <td>{matrixData?.b1}</td>
                    <td>{matrixData?.l2}</td>
                </tr>
                <tr>
                    <td>
                        <img src={tableIcon4} alt="table4"/>
                    </td>
                    <td>
                        <span className={"Big"}>Анахата</span>
                        <span className={"Little"}>Отношения, картина мира</span>
                    </td>
                    <td>{matrixData?.a3}</td>
                    <td>{matrixData?.b3}</td>
                    <td>{matrixData?.l3}</td>
                </tr>
                <tr>
                    <td>
                        <img src={tableIcon5} alt="table5"/>
                    </td>
                    <td>
                        <span className={"Big"}>Манипура</span>
                        <span className={"Little"}>Статус, владение</span>
                    </td>
                    <td>{matrixData?.e}</td>
                    <td>{matrixData?.e}</td>
                    <td>{matrixData?.l4}</td>
                </tr>
                <tr>
                    <td>
                        <img src={tableIcon6} alt="table6"/>
                    </td>
                    <td>
                        <span className={"Big"}>Свадхистана</span>
                        <span className={"Little"}>Детская любовь и радость</span>
                    </td>
                    <td>{matrixData?.c1}</td>
                    <td>{matrixData?.d1}</td>
                    <td>{matrixData?.l5}</td>
                </tr>
                <tr>
                    <td>
                        <img src={tableIcon7} alt="table7"/>
                    </td>
                    <td>
                        <span className={"Big"}>Муладхара</span>
                        <span className={"Little"}>Тело, материя</span>
                    </td>
                    <td>{matrixData?.c}</td>
                    <td>{matrixData?.d}</td>
                    <td>{matrixData?.l6}</td>
                </tr>
                <tr>
                    <td>

                    </td>
                    <td>
                        <span className={"Big"}>Итого</span>
                        <span className={"Little"}>Общее энергополе</span>
                    </td>
                    <td>{Number(matrixData?.a) + Number(matrixData?.a2) + Number(matrixData?.a1) + Number(matrixData?.a3) + Number(matrixData?.e) + Number(matrixData?.c1) + Number(matrixData?.c)}</td>
                    <td>{Number(matrixData?.b) + Number(matrixData?.b2) + Number(matrixData?.b1) + Number(matrixData?.b3) + Number(matrixData?.e) + Number(matrixData?.d1) + Number(matrixData?.d)}</td>
                    <td>{Number(matrixData?.l) + Number(matrixData?.l1) + Number(matrixData?.l2) + Number(matrixData?.l3) + Number(matrixData?.l4) + Number(matrixData?.l5) + Number(matrixData?.l6)}</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CalcTable;