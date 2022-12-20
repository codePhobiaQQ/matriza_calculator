import { calculationDataMatrixI } from "../redux/reducers/AppSlice";
import fixTwentyTwo, {sumOfDecimals} from "../utils/fixTwentyTwo";

export interface matrixData {
    a: number;
    b: number;
    c: number;
    d: number;
    e: number;
    f: number;
    g: number;
    y: number;
    k: number;
    a1: number;
    b1: number;
    c1: number;
    d1: number;
    d2: number;
    x: number;
    t1: number;
    t2: number;
}

const onlineMatrixCalculation = (date: string): matrixData => {
    const a = sumOfDecimals(date.split("-")[2])
    const b = sumOfDecimals(date.split("-")[1])
    const c = sumOfDecimals(date.split("-")[0])
    const d = fixTwentyTwo(a + b + c)
    const e = fixTwentyTwo(a + b + c + d)
    const f = fixTwentyTwo(a + b)
    const g = fixTwentyTwo(b + c)
    const y = fixTwentyTwo(c + d)
    const k = fixTwentyTwo(a + d)
    const a1 = fixTwentyTwo(a + e)
    const b1 = fixTwentyTwo(b + e)
    const c1 = fixTwentyTwo(e + c)
    const d1 = fixTwentyTwo(d + e)
    const d2 = fixTwentyTwo(d + d1)
    const x = fixTwentyTwo(d1 + c1)
    const t1 = fixTwentyTwo(d1 + x)
    const t2 = fixTwentyTwo(x + c1)

    const onlineMatrixData = {
        a, b, c, d, e, f, g, y, k, a1, b1, c1, d1, d2, x, t1, t2
    }

    return onlineMatrixData
};

export default onlineMatrixCalculation;
