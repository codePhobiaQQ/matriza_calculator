import { calculationDataMatrixI } from "../redux/reducers/AppSlice";
import fixTwentyTwo, {sumOfDecimals} from "../utils/fixTwentyTwo";

export interface matrixData {
    a: number;
    b: number;
    c: number;
    d: number;

    e: number;
    e1: number;
    e2: number;

    s1: number;
    s2: number;
    s3: number;
    s4: number;

    p1: number;
    p2: number;
    p3: number;
    p4: number;

    f: number;
    g: number;
    y: number;
    k: number;

    a1: number;
    a2: number;
    a3: number;

    b1: number;
    b2: number;
    b3: number;

    c1: number;
    c2: number;

    d1: number;
    d2: number;

    x: number;
    x1: number;
    x2: number;

    t1: number;
    t2: number;

    age0: number;
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

    const d1 = fixTwentyTwo(d + e)
    const d2 = fixTwentyTwo(d + d1)

    const c1 = fixTwentyTwo(e + c)
    const c2 = fixTwentyTwo(c1 + c)

    const x = fixTwentyTwo(d1 + c1)
    const x1 = fixTwentyTwo(d1 + x)
    const x2 = fixTwentyTwo(c1 + x)

    const a1 = fixTwentyTwo(a + e)
    const a2 = fixTwentyTwo(a1 + a)

    const b1 = fixTwentyTwo(b + e)
    const b2 = fixTwentyTwo(b1 + b)

    const e1 = fixTwentyTwo(f + g + k + y)
    const e2 = fixTwentyTwo(e + e1)

    const s1 = fixTwentyTwo(e1 + f)
    const s2 = fixTwentyTwo(f + s1)
    const s4 = fixTwentyTwo(y + e1)
    const s3 = fixTwentyTwo(y + s4)

    const p1 = fixTwentyTwo(g + e1)
    const p2 = fixTwentyTwo(g + p1)
    const p3 = fixTwentyTwo(k + e1)
    const p4 = fixTwentyTwo(k + p3)

    const t1 = fixTwentyTwo(d1 + x)
    const t2 = fixTwentyTwo(x + c1)

    const age0 = a
    const age10 = f
    const age20 = b
    const age30 = g
    const age40 = c
    const age50 = 0
    const age60 = d

    const age5 = fixTwentyTwo(age0 + age10)
    const age15 = fixTwentyTwo(age10 + age20)
    const age25 = fixTwentyTwo(age20 + age30)
    const age35 = fixTwentyTwo(age30 + age40)
    const age45 = fixTwentyTwo(age40 + age50)
    const age55 = fixTwentyTwo(age50 + age60)

    const age5_2 = fixTwentyTwo(age0 + age5)
    const age5_1 = fixTwentyTwo(age0 + age5_2)
    const age5_3 = fixTwentyTwo(age5_2 + age5)

    const age10_2 = fixTwentyTwo(age5 + age10)
    const age10_1 = fixTwentyTwo(age5 + age10_2)
    const age10_3 = fixTwentyTwo(age10_2 + age10)

    const age15_2 = fixTwentyTwo(age10 + age15)
    const age15_1 = fixTwentyTwo(age10 + age15_2)
    const age15_3 = fixTwentyTwo(age15_2 + age15)

    const age20_2 = fixTwentyTwo(age15 + age20)
    const age20_1 = fixTwentyTwo(age15 + age20_2)
    const age20_3 = fixTwentyTwo(age20_2 + age20)

    const age25_2 = fixTwentyTwo(age15 + age20)
    const age25_1 = fixTwentyTwo(age15 + age20_2)
    const age25_3 = fixTwentyTwo(age20_2 + age20)

    return {
        a, b, c, d, e, f, g, y, k, a1, b1, c1, d1, d2, x, t1, t2, a2, a3: 0, b2, b3: 0, c2, e1, e2, p1, p2, p3, p4, s1, s2, s3, s4, x1, x2,
        age0
    }
};

export default onlineMatrixCalculation;
