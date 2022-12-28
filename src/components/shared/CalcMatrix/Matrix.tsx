import React from "react";
import MatrixSvg from "../../common/svg/MatrixSvg";
import WomanMatrix from "../../common/svg/WomanMatrix";
import tableIcon1 from "./../../../assets/svg/tableIcon1.svg"
import tableIcon2 from "./../../../assets/svg/tableIcon2.svg"
import tableIcon3 from "./../../../assets/svg/tableIcon3.svg"
import tableIcon4 from "./../../../assets/svg/tableIcon4.svg"
import tableIcon5 from "./../../../assets/svg/tableIcon5.svg"
import tableIcon6 from "./../../../assets/svg/tableIcon6.svg"
import tableIcon7 from "./../../../assets/svg/tableIcon7.svg"
import {useAppSelector} from "../../../hooks/redux";

interface MatrixI {
  classing?: string
  activeTab?: string;
}

const Matrix = ({classing, activeTab}: MatrixI) => {
  const matrixData = useAppSelector(state => state.app.matrixData)

  return (
    <div className={`matrix ${classing}`}>
      <div className="section-with-diagram__col-with-diagram">
        <WomanMatrix />

        <div className="section-with-diagram__matrix-diagram">
          <div className="matrix-diagram">
            <div className="matrix-diagram__svg">
              <MatrixSvg />
            </div>

            {/*circles*/}
            <div
              className={`matrix-diagram__circle js-personal-calculation-item -size-lg ${activeTab !== "Матрица здоровья" ? "bronze" : ""} -position-a -purple`}
              data-personal-calculation-position="a"
            >
              {activeTab == "Матрица здоровья" ? <img src={tableIcon1} alt="Icon1"/> : matrixData?.a}
            </div>
            <div
              className="matrix-diagram__circle js-personal-calculation-item -size-md -position-a2 -blue"
              data-personal-calculation-position="a2"
            >
              {activeTab == "Матрица здоровья" ? <img src={tableIcon2} alt="Icon2"/> : matrixData?.a2}
            </div>
            <div
              className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-a1 -cyan"
              data-personal-calculation-position="a1"
            >
              {activeTab == "Матрица здоровья" ? <img src={tableIcon3} alt="Icon1"/> : matrixData?.a1}
            </div>
            <div
              className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-a3 -green"
              data-personal-calculation-position="a3"
            >
              {activeTab == "Матрица здоровья" ? <img src={tableIcon4} alt="Icon4"/> : matrixData?.a3}
            </div>
            <div
              className={`matrix-diagram__circle js-personal-calculation-item -size-lg -position-b -purple ${activeTab !== "Матрица здоровья" ? "bronze" : ""}`}
              data-personal-calculation-position="b"
            >
              {activeTab == "Матрица здоровья" ? <img src={tableIcon1} alt="icon1"/> : matrixData?.b}
            </div>
            <div
              className="matrix-diagram__circle js-personal-calculation-item -size-md -position-b2 -blue"
              data-personal-calculation-position="b2"
            >
              {activeTab == "Матрица здоровья" ? <img src={tableIcon2} alt="Icon2"/> : matrixData?.b2}
            </div>
            <div
              className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-b1 -cyan"
              data-personal-calculation-position="b1"
            >
              {activeTab == "Матрица здоровья" ? <img src={tableIcon3} alt="Icon3"/> : matrixData?.b1}
            </div>
            <div
              className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-b3 -green"
              data-personal-calculation-position="b3"
            >
              {activeTab == "Матрица здоровья" ? <img src={tableIcon4} alt="Icon4"/> : matrixData?.b3}
            </div>
            <div
              className={`matrix-diagram__circle js-personal-calculation-item -size-lg -position-c -red ${activeTab !== "Матрица здоровья" ? "bronze" : ""}`}
              data-personal-calculation-position="c"
            >
              {activeTab == "Матрица здоровья" ? <img src={tableIcon7} alt="Icon7"/> : matrixData?.c}
            </div>
            <div
              className="matrix-diagram__circle js-personal-calculation-item -size-md -position-c2 -white"
              data-personal-calculation-position="c2"
            >
              {activeTab !== "Матрица здоровья" && matrixData?.c2}
            </div>
            <div
              className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-c1 -orange"
              data-personal-calculation-position="c1"
            >
              {activeTab == "Матрица здоровья" ? <img src={tableIcon6} alt="Icon6"/> : matrixData?.c1}
            </div>
            <div
              className={`matrix-diagram__circle js-personal-calculation-item -size-lg -position-d -red ${activeTab !== "Матрица здоровья" ? "bronze" : ""}`}
              data-personal-calculation-position="d"
            >
              {activeTab == "Матрица здоровья" ? <img src={tableIcon7} alt="Icon7"/> : matrixData?.d}
            </div>
            <div
              className="matrix-diagram__circle js-personal-calculation-item -size-md -position-d2 -white"
              data-personal-calculation-position="d2"
            >
              {activeTab !== "Матрица здоровья" && matrixData?.d2}
            </div>
            <div
              className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-d1 -orange"
              data-personal-calculation-position="d1"
            >
              {activeTab == "Матрица здоровья" ? <img src={tableIcon6} alt="Icon6"/> : matrixData?.d1}
            </div>
            <div
              className={`matrix-diagram__circle js-personal-calculation-item -size-lg -position-e -yellow ${activeTab !== "Матрица здоровья" ? "bronze" : ""}`}
              data-personal-calculation-position="e"
            >
              {activeTab == "Матрица здоровья" ? <img src={tableIcon5} alt="Icon5"/> : matrixData?.e}
            </div>
            <div
              className="matrix-diagram__circle js-personal-calculation-item -size-md -position-e1 -white"
              data-personal-calculation-position="e1"
            >
              {activeTab !== "Матрица здоровья" && matrixData?.e1}
            </div>
            <div
              className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-e2 -white"
              data-personal-calculation-position="e2"
            >
              {activeTab !== "Матрица здоровья" && matrixData?.e2}
            </div>
            <div
              className="matrix-diagram__circle js-personal-calculation-item -size-lg -size-lg-transparent -position-f -white"
              data-personal-calculation-position="f"
            >
              {activeTab !== "Матрица здоровья" && matrixData?.f}
            </div>
            <div
              className="matrix-diagram__circle js-personal-calculation-item -size-lg -size-lg-transparent -position-g -white"
              data-personal-calculation-position="g"
            >
              {activeTab !== "Матрица здоровья" && matrixData?.g}
            </div>
            <div
              className="matrix-diagram__circle js-personal-calculation-item -size-lg -size-lg-transparent -position-y -white"
              data-personal-calculation-position="y"
            >
              {activeTab !== "Матрица здоровья" && matrixData?.y}
            </div>
            <div
              className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-p1 -white"
              data-personal-calculation-position="p1"
            >
              {activeTab !== "Матрица здоровья" && matrixData?.p1}
            </div>
            <div
              className="matrix-diagram__circle js-personal-calculation-item -size-md -position-p2 -white"
              data-personal-calculation-position="p2"
            >
              {activeTab !== "Матрица здоровья" && matrixData?.p2}
            </div>
            <div
              className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-p3 -white"
              data-personal-calculation-position="p3"
            >
              {activeTab !== "Матрица здоровья" && matrixData?.p3}
            </div>
            <div
              className="matrix-diagram__circle js-personal-calculation-item -size-md -position-p4 -white"
              data-personal-calculation-position="p4"
            >
              {activeTab !== "Матрица здоровья" && matrixData?.p4}
            </div>
            <div
              className="matrix-diagram__circle js-personal-calculation-item -size-lg -size-lg-transparent -position-k -white"
              data-personal-calculation-position="k"
            >
              {activeTab !== "Матрица здоровья" && matrixData?.k}
            </div>
            <div
              className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-s1 -white"
              data-personal-calculation-position="s1"
            >
              {activeTab !== "Матрица здоровья" && matrixData?.s1}
            </div>
            <div
              className="matrix-diagram__circle js-personal-calculation-item -size-md -position-s2 -white"
              data-personal-calculation-position="s2"
            >
              {activeTab !== "Матрица здоровья" && matrixData?.s2}
            </div>
            <div
              className="matrix-diagram__circle js-personal-calculation-item -size-md -position-s3 -white"
              data-personal-calculation-position="s3"
            >
              {activeTab !== "Матрица здоровья" && matrixData?.s3}
            </div>
            <div
              className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-s4 -white"
              data-personal-calculation-position="s4"
            >
              {activeTab !== "Матрица здоровья" && matrixData?.s4}
            </div>
            <div
              className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-x -white"
              data-personal-calculation-position="x"
            >
              {activeTab !== "Матрица здоровья" && matrixData?.x}
            </div>
            <div
              className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-x1 -white"
              data-personal-calculation-position="x1"
            >
              {activeTab !== "Матрица здоровья" && matrixData?.x1}
            </div>
            <div
              className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-x2 -white"
              data-personal-calculation-position="x2"
            >
              {activeTab !== "Матрица здоровья" && matrixData?.x2}
            </div>

            {/*numbers*/}
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-b8"
              data-personal-calculation-position="b8"
            >
              {activeTab == "Личная матрица" && matrixData?.age25_1}
            </div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-b7"
              data-personal-calculation-position="b7"
            >
              {activeTab == "Личная матрица" && matrixData?.age25_2}
            </div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-k2"
              data-personal-calculation-position="k2"
            >
              {activeTab == "Личная матрица" && matrixData?.age25_3}
            </div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-k1 -bold"
              data-personal-calculation-position="k1"
            >
              {activeTab == "Личная матрица" && matrixData?.age25}
            </div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-k4"
              data-personal-calculation-position="k4"
            >{activeTab == "Личная матрица" && matrixData?.age30_1}</div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-k3"
              data-personal-calculation-position="k3"
            >{activeTab == "Личная матрица" && matrixData?.age30_2}</div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-k5"
              data-personal-calculation-position="k5"
            >{activeTab == "Личная матрица" && matrixData?.age30_3}</div>

            <div
              className="matrix-diagram__number js-personal-calculation-item -position-k8"
              data-personal-calculation-position="k8"
            >
              {activeTab == "Личная матрица" && matrixData?.age35_1}
            </div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-k7"
              data-personal-calculation-position="k7"
            >
              {activeTab == "Личная матрица" && matrixData?.age35_2}
            </div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-k6"
              data-personal-calculation-position="k6"
            >
              {activeTab == "Личная матрица" && matrixData?.age35_3}
            </div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-c4 -bold"
              data-personal-calculation-position="c4"
            >
              {activeTab == "Личная матрица" && matrixData?.age35}
            </div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-c6"
              data-personal-calculation-position="c6"
            >
              {activeTab == "Личная матрица" && matrixData?.age40_1}
            </div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-c5"
              data-personal-calculation-position="c5"
            >
              {activeTab == "Личная матрица" && matrixData?.age40_2}
            </div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-c7"
              data-personal-calculation-position="c7"
            >
              {activeTab == "Личная матрица" && matrixData?.age40_3}
            </div>

            <div
              className="matrix-diagram__number js-personal-calculation-item -position-y3"
              data-personal-calculation-position="y3"
            >
              {activeTab == "Личная матрица" && matrixData?.age45_1}
            </div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-y2"
              data-personal-calculation-position="y2"
            >
              {activeTab == "Личная матрица" && matrixData?.age45_2}
            </div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-y4"
              data-personal-calculation-position="y4"
            >
              {activeTab == "Личная матрица" && matrixData?.age45_3}
            </div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-y1 -bold"
              data-personal-calculation-position="y1"
            >{activeTab == "Личная матрица" && matrixData?.age45}</div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-y6"
              data-personal-calculation-position="y6"
            >
              {activeTab == "Личная матрица" && matrixData?.age50_1}
            </div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-y5"
              data-personal-calculation-position="y5"
            >
              {activeTab == "Личная матрица" && matrixData?.age50_2}
            </div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-y7"
              data-personal-calculation-position="y7"
            >
              {activeTab == "Личная матрица" && matrixData?.age50_3}
            </div>

            <div
              className="matrix-diagram__number js-personal-calculation-item -position-d6"
              data-personal-calculation-position="d6"
            >
              {activeTab == "Личная матрица" && matrixData?.age55_1}
            </div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-y8"
              data-personal-calculation-position="y8"
            >
              {activeTab == "Личная матрица" && matrixData?.age55_2}
            </div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-d5"
              data-personal-calculation-position="d5"
            >
              {activeTab == "Личная матрица" && matrixData?.age55_3}
            </div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-d4 -bold"
              data-personal-calculation-position="d4"
            >
              {activeTab == "Личная матрица" && matrixData?.age55}
            </div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-d8"
              data-personal-calculation-position="d8"
            >
              {activeTab == "Личная матрица" && matrixData?.age60_1}
            </div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-d7"
              data-personal-calculation-position="d7"
            >
              {activeTab == "Личная матрица" && matrixData?.age60_2}
            </div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-d9"
              data-personal-calculation-position="d9"
            >
              {activeTab == "Личная матрица" && matrixData?.age60_3}
            </div>

            <div
              className="matrix-diagram__number js-personal-calculation-item -position-g3"
              data-personal-calculation-position="g3"
            >
              {/*{matrixData?.age65_1}*/}
            </div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-g2"
              data-personal-calculation-position="g2"
            ></div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-g4"
              data-personal-calculation-position="g4"
            ></div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-g1 -bold"
              data-personal-calculation-position="g1"
            ></div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-g7"
              data-personal-calculation-position="g7"
            ></div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-g5"
              data-personal-calculation-position="g5"
            ></div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-g6"
              data-personal-calculation-position="g6"
            ></div>

            <div
              className="matrix-diagram__number js-personal-calculation-item -position-t3"
              data-personal-calculation-position="t3"
            ></div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-t2"
              data-personal-calculation-position="t2"
            ></div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-t4"
              data-personal-calculation-position="t4"
            ></div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-t1 -bold"
              data-personal-calculation-position="t1"
            ></div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-t6"
              data-personal-calculation-position="t6"
            ></div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-t5"
              data-personal-calculation-position="t5"
            ></div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-t7"
              data-personal-calculation-position="t7"
            ></div>

            <div
              className="matrix-diagram__number js-personal-calculation-item -position-a5"
              data-personal-calculation-position="a5"
            >{activeTab == "Личная матрица" && matrixData?.age5_1}</div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-a4"
              data-personal-calculation-position="a4"
            >{activeTab == "Личная матрица" && matrixData?.age5_2}</div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-a6"
              data-personal-calculation-position="a6"
            >{activeTab == "Личная матрица" && matrixData?.age5_3}</div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-f1 -bold"
              data-personal-calculation-position="f1"
            >
              {activeTab == "Личная матрица" && matrixData?.age5}
            </div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-f3"
              data-personal-calculation-position="f3"
            >
              {activeTab == "Личная матрица" && matrixData?.age10_1}
            </div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-f2"
              data-personal-calculation-position="f2"
            >
              {activeTab == "Личная матрица" && matrixData?.age10_2}
            </div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-f4"
              data-personal-calculation-position="f4"
            >
              {activeTab == "Личная матрица" && matrixData?.age10_3}
            </div>

            <div
              className="matrix-diagram__number js-personal-calculation-item -position-f7"
              data-personal-calculation-position="f7"
            >
              {activeTab == "Личная матрица" && matrixData?.age15_1}
            </div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-f6"
              data-personal-calculation-position="f6"
            >
              {activeTab == "Личная матрица" && matrixData?.age15_2}
            </div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-f8"
              data-personal-calculation-position="f8"
            >
              {activeTab == "Личная матрица" && matrixData?.age15_3}
            </div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-f5 -bold"
              data-personal-calculation-position="f5"
            >
              {activeTab == "Личная матрица" && matrixData?.age15}
            </div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-b5"
              data-personal-calculation-position="b5"
            >
              {activeTab == "Личная матрица" && matrixData?.age20_1}
            </div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-b4"
              data-personal-calculation-position="b4"
            >
              {activeTab == "Личная матрица" && matrixData?.age20_2}
            </div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-b6"
              data-personal-calculation-position="b6"
            >{activeTab == "Личная матрица" && matrixData?.age20_3}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Matrix;
