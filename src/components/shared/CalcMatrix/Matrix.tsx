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

interface Matrix {

}

const Matrix = () => {
  const matrixData = useAppSelector(state => state.app.matrixData)

  return (
    <div className="matrix">
      <div className="section-with-diagram__col-with-diagram">
        <WomanMatrix />

        <div className="section-with-diagram__matrix-diagram">
          <div className="matrix-diagram">
            <div className="matrix-diagram__svg">
              <MatrixSvg />
            </div>

            {/*circles*/}
            <div
              className="matrix-diagram__circle js-personal-calculation-item -size-lg -position-a -purple"
              data-personal-calculation-position="a"
            >
              <img src={tableIcon1} alt="Icon1"/>
            </div>
            <div
              className="matrix-diagram__circle js-personal-calculation-item -size-md -position-a2 -blue"
              data-personal-calculation-position="a2"
            >
              <img src={tableIcon2} alt="Icon2"/>
            </div>
            <div
              className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-a1 -cyan"
              data-personal-calculation-position="a1"
            >
              <img src={tableIcon3} alt="Icon1"/>
            </div>
            <div
              className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-a3 -green"
              data-personal-calculation-position="a3"
            >
              <img src={tableIcon4} alt="Icon4"/>
            </div>
            <div
              className="matrix-diagram__circle js-personal-calculation-item -size-lg -position-b -purple"
              data-personal-calculation-position="b"
            >
              <img src={tableIcon1} alt="icon1"/>
            </div>
            <div
              className="matrix-diagram__circle js-personal-calculation-item -size-md -position-b2 -blue"
              data-personal-calculation-position="b2"
            >
              <img src={tableIcon2} alt="Icon2"/>
            </div>
            <div
              className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-b1 -cyan"
              data-personal-calculation-position="b1"
            >
              <img src={tableIcon3} alt="Icon3"/>
            </div>
            <div
              className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-b3 -green"
              data-personal-calculation-position="b3"
            >
              <img src={tableIcon4} alt="Icon4"/>
            </div>
            <div
              className="matrix-diagram__circle js-personal-calculation-item -size-lg -position-c -red"
              data-personal-calculation-position="c"
            >
              <img src={tableIcon7} alt="Icon7"/>
            </div>
            <div
              className="matrix-diagram__circle js-personal-calculation-item -size-md -position-c2 -white"
              data-personal-calculation-position="c2"
            ></div>
            <div
              className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-c1 -orange"
              data-personal-calculation-position="c1"
            >
              <img src={tableIcon6} alt="Icon6"/>
            </div>
            <div
              className="matrix-diagram__circle js-personal-calculation-item -size-lg -position-d -red"
              data-personal-calculation-position="d"
            >
              <img src={tableIcon7} alt="Icon7"/>
            </div>
            <div
              className="matrix-diagram__circle js-personal-calculation-item -size-md -position-d2 -white"
              data-personal-calculation-position="d2"
            ></div>
            <div
              className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-d1 -orange"
              data-personal-calculation-position="d1"
            >
              <img src={tableIcon6} alt="Icon6"/>
            </div>
            <div
              className="matrix-diagram__circle js-personal-calculation-item -size-lg -position-e -yellow"
              data-personal-calculation-position="e"
            >
              <img src={tableIcon5} alt="Icon5"/>
            </div>
            <div
              className="matrix-diagram__circle js-personal-calculation-item -size-md -position-e1 -white"
              data-personal-calculation-position="e1"
            ></div>
            <div
              className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-e2 -white"
              data-personal-calculation-position="e2"
            ></div>
            <div
              className="matrix-diagram__circle js-personal-calculation-item -size-lg -size-lg-transparent -position-f -white"
              data-personal-calculation-position="f"
            ></div>
            <div
              className="matrix-diagram__circle js-personal-calculation-item -size-lg -size-lg-transparent -position-g -white"
              data-personal-calculation-position="g"
            ></div>
            <div
              className="matrix-diagram__circle js-personal-calculation-item -size-lg -size-lg-transparent -position-y -white"
              data-personal-calculation-position="y"
            ></div>
            <div
              className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-p1 -white"
              data-personal-calculation-position="p1"
            ></div>
            <div
              className="matrix-diagram__circle js-personal-calculation-item -size-md -position-p2 -white"
              data-personal-calculation-position="p2"
            ></div>
            <div
              className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-p3 -white"
              data-personal-calculation-position="p3"
            ></div>
            <div
              className="matrix-diagram__circle js-personal-calculation-item -size-md -position-p4 -white"
              data-personal-calculation-position="p4"
            ></div>
            <div
              className="matrix-diagram__circle js-personal-calculation-item -size-lg -size-lg-transparent -position-k -white"
              data-personal-calculation-position="k"
            ></div>
            <div
              className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-s1 -white"
              data-personal-calculation-position="s1"
            ></div>
            <div
              className="matrix-diagram__circle js-personal-calculation-item -size-md -position-s2 -white"
              data-personal-calculation-position="s2"
            ></div>
            <div
              className="matrix-diagram__circle js-personal-calculation-item -size-md -position-s3 -white"
              data-personal-calculation-position="s3"
            ></div>
            <div
              className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-s4 -white"
              data-personal-calculation-position="s4"
            ></div>
            <div
              className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-x -white"
              data-personal-calculation-position="x"
            ></div>
            <div
              className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-x1 -white"
              data-personal-calculation-position="x1"
            ></div>
            <div
              className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-x2 -white"
              data-personal-calculation-position="x2"
            ></div>

            {/*numbers*/}
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-b8"
              data-personal-calculation-position="b8"
            >
              {matrixData?.age25_1}
            </div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-b7"
              data-personal-calculation-position="b7"
            >
              {matrixData?.age25_2}
            </div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-k2"
              data-personal-calculation-position="k2"
            >
              {matrixData?.age25_3}
            </div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-k1 -bold"
              data-personal-calculation-position="k1"
            >
              {matrixData?.age25}
            </div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-k4"
              data-personal-calculation-position="k4"
            >{matrixData?.age30_1}</div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-k3"
              data-personal-calculation-position="k3"
            >{matrixData?.age30_2}</div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-k5"
              data-personal-calculation-position="k5"
            >{matrixData?.age30_3}</div>

            <div
              className="matrix-diagram__number js-personal-calculation-item -position-k8"
              data-personal-calculation-position="k8"
            >
              {matrixData?.age35_1}
            </div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-k7"
              data-personal-calculation-position="k7"
            >
              {matrixData?.age35_2}
            </div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-k6"
              data-personal-calculation-position="k6"
            >
              {matrixData?.age35_3}
            </div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-c4 -bold"
              data-personal-calculation-position="c4"
            >
              {matrixData?.age35}
            </div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-c6"
              data-personal-calculation-position="c6"
            >
              {matrixData?.age40_1}
            </div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-c5"
              data-personal-calculation-position="c5"
            >
              {matrixData?.age40_2}
            </div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-c7"
              data-personal-calculation-position="c7"
            >
              {matrixData?.age40_3}
            </div>

            <div
              className="matrix-diagram__number js-personal-calculation-item -position-y3"
              data-personal-calculation-position="y3"
            >
              {matrixData?.age45_1}
            </div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-y2"
              data-personal-calculation-position="y2"
            >
              {matrixData?.age45_2}
            </div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-y4"
              data-personal-calculation-position="y4"
            >
              {matrixData?.age45_3}
            </div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-y1 -bold"
              data-personal-calculation-position="y1"
            >{matrixData?.age45}</div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-y6"
              data-personal-calculation-position="y6"
            >
              {matrixData?.age50_1}
            </div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-y5"
              data-personal-calculation-position="y5"
            >
              {matrixData?.age50_2}
            </div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-y7"
              data-personal-calculation-position="y7"
            >
              {matrixData?.age50_3}
            </div>

            <div
              className="matrix-diagram__number js-personal-calculation-item -position-d6"
              data-personal-calculation-position="d6"
            >
              {matrixData?.age55_1}
            </div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-y8"
              data-personal-calculation-position="y8"
            >
              {matrixData?.age55_2}
            </div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-d5"
              data-personal-calculation-position="d5"
            >
              {matrixData?.age55_3}
            </div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-d4 -bold"
              data-personal-calculation-position="d4"
            >
              {matrixData?.age55}
            </div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-d8"
              data-personal-calculation-position="d8"
            >
              {matrixData?.age60_1}
            </div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-d7"
              data-personal-calculation-position="d7"
            >
              {matrixData?.age60_2}
            </div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-d9"
              data-personal-calculation-position="d9"
            >
              {matrixData?.age60_3}
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
            >{matrixData?.age5_1}</div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-a4"
              data-personal-calculation-position="a4"
            >{matrixData?.age5_2}</div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-a6"
              data-personal-calculation-position="a6"
            >{matrixData?.age5_3}</div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-f1 -bold"
              data-personal-calculation-position="f1"
            >
              {matrixData?.age5}
            </div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-f3"
              data-personal-calculation-position="f3"
            >
              {matrixData?.age10_1}
            </div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-f2"
              data-personal-calculation-position="f2"
            >
              {matrixData?.age10_2}
            </div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-f4"
              data-personal-calculation-position="f4"
            >
              {matrixData?.age10_3}
            </div>

            <div
              className="matrix-diagram__number js-personal-calculation-item -position-f7"
              data-personal-calculation-position="f7"
            >
              {matrixData?.age15_1}
            </div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-f6"
              data-personal-calculation-position="f6"
            >
              {matrixData?.age15_2}
            </div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-f8"
              data-personal-calculation-position="f8"
            >
              {matrixData?.age15_3}
            </div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-f5 -bold"
              data-personal-calculation-position="f5"
            >
              {matrixData?.age15}
            </div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-b5"
              data-personal-calculation-position="b5"
            >
              {matrixData?.age20_1}
            </div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-b4"
              data-personal-calculation-position="b4"
            >
              {matrixData?.age20_2}
            </div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-b6"
              data-personal-calculation-position="b6"
            >{matrixData?.age20_3}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Matrix;
