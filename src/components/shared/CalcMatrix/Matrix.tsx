import React from "react";
import MatrixSvg from "../../common/svg/MatrixSvg";
import WomanMatrix from "../../common/svg/WomanMatrix";

const Matrix = () => {
  return (
    <div className="matrix">
      <div className="section-with-diagram__col-with-diagram">
        <WomanMatrix />
        <style></style>

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
              1
            </div>
            <div
              className="matrix-diagram__circle js-personal-calculation-item -size-md -position-a2 -blue"
              data-personal-calculation-position="a2"
            >
              2
            </div>
            <div
              className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-a1 -cyan"
              data-personal-calculation-position="a1"
            >
              3
            </div>
            <div
              className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-a3 -green"
              data-personal-calculation-position="a3"
            ></div>
            <div
              className="matrix-diagram__circle js-personal-calculation-item -size-lg -position-b -purple"
              data-personal-calculation-position="b"
            ></div>
            <div
              className="matrix-diagram__circle js-personal-calculation-item -size-md -position-b2 -blue"
              data-personal-calculation-position="b2"
            ></div>
            <div
              className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-b1 -cyan"
              data-personal-calculation-position="b1"
            ></div>
            <div
              className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-b3 -green"
              data-personal-calculation-position="b3"
            ></div>
            <div
              className="matrix-diagram__circle js-personal-calculation-item -size-lg -position-c -red"
              data-personal-calculation-position="c"
            ></div>
            <div
              className="matrix-diagram__circle js-personal-calculation-item -size-md -position-c2 -white"
              data-personal-calculation-position="c2"
            ></div>
            <div
              className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-c1 -orange"
              data-personal-calculation-position="c1"
            ></div>
            <div
              className="matrix-diagram__circle js-personal-calculation-item -size-lg -position-d -red"
              data-personal-calculation-position="d"
            ></div>
            <div
              className="matrix-diagram__circle js-personal-calculation-item -size-md -position-d2 -white"
              data-personal-calculation-position="d2"
            ></div>
            <div
              className="matrix-diagram__circle js-personal-calculation-item -size-sm -position-d1 -orange"
              data-personal-calculation-position="d1"
            ></div>
            <div
              className="matrix-diagram__circle js-personal-calculation-item -size-lg -position-e -yellow"
              data-personal-calculation-position="e"
            ></div>
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
            ></div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-b7"
              data-personal-calculation-position="b7"
            ></div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-k2"
              data-personal-calculation-position="k2"
            ></div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-k1 -bold"
              data-personal-calculation-position="k1"
            ></div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-k4"
              data-personal-calculation-position="k4"
            ></div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-k3"
              data-personal-calculation-position="k3"
            ></div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-k5"
              data-personal-calculation-position="k5"
            ></div>

            <div
              className="matrix-diagram__number js-personal-calculation-item -position-k8"
              data-personal-calculation-position="k8"
            ></div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-k7"
              data-personal-calculation-position="k7"
            ></div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-k6"
              data-personal-calculation-position="k6"
            ></div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-c4 -bold"
              data-personal-calculation-position="c4"
            ></div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-c6"
              data-personal-calculation-position="c6"
            ></div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-c5"
              data-personal-calculation-position="c5"
            ></div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-c7"
              data-personal-calculation-position="c7"
            ></div>

            <div
              className="matrix-diagram__number js-personal-calculation-item -position-y3"
              data-personal-calculation-position="y3"
            ></div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-y2"
              data-personal-calculation-position="y2"
            ></div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-y4"
              data-personal-calculation-position="y4"
            ></div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-y1 -bold"
              data-personal-calculation-position="y1"
            ></div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-y6"
              data-personal-calculation-position="y6"
            ></div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-y5"
              data-personal-calculation-position="y5"
            ></div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-y7"
              data-personal-calculation-position="y7"
            ></div>

            <div
              className="matrix-diagram__number js-personal-calculation-item -position-d6"
              data-personal-calculation-position="d6"
            ></div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-y8"
              data-personal-calculation-position="y8"
            ></div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-d5"
              data-personal-calculation-position="d5"
            ></div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-d4 -bold"
              data-personal-calculation-position="d4"
            ></div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-d8"
              data-personal-calculation-position="d8"
            ></div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-d7"
              data-personal-calculation-position="d7"
            ></div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-d9"
              data-personal-calculation-position="d9"
            ></div>

            <div
              className="matrix-diagram__number js-personal-calculation-item -position-g3"
              data-personal-calculation-position="g3"
            ></div>
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
            ></div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-a4"
              data-personal-calculation-position="a4"
            ></div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-a6"
              data-personal-calculation-position="a6"
            ></div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-f1 -bold"
              data-personal-calculation-position="f1"
            ></div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-f3"
              data-personal-calculation-position="f3"
            ></div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-f2"
              data-personal-calculation-position="f2"
            ></div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-f4"
              data-personal-calculation-position="f4"
            ></div>

            <div
              className="matrix-diagram__number js-personal-calculation-item -position-f7"
              data-personal-calculation-position="f7"
            ></div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-f6"
              data-personal-calculation-position="f6"
            ></div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-f8"
              data-personal-calculation-position="f8"
            ></div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-f5 -bold"
              data-personal-calculation-position="f5"
            ></div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-b5"
              data-personal-calculation-position="b5"
            ></div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-b4"
              data-personal-calculation-position="b4"
            ></div>
            <div
              className="matrix-diagram__number js-personal-calculation-item -position-b6"
              data-personal-calculation-position="b6"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Matrix;
