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

    l: number;
    l1: number;
    l2: number;
    l3: number;
    l4: number;
    l5: number;
    l6: number;

    age0: number;
    age5_1: number;
    age5_2: number;
    age5_3: number;
    age5: number;
    age10_1: number;
    age10_2: number;
    age10_3: number;
    age10: number;
    age15_1: number;
    age15_2: number;
    age15_3: number;
    age15: number;
    age20_1: number;
    age20_2: number;
    age20_3: number;
    age20: number;
    age25_1: number;
    age25_2: number;
    age25_3: number;
    age25: number;
    age30_1: number;
    age30_2: number;
    age30_3: number;
    age30: number;
    age35_1: number;
    age35_2: number;
    age35_3: number;
    age35: number;
    age40_1: number;
    age40_2: number;
    age40_3: number;
    age40: number;
    age45_1: number;
    age45_2: number;
    age45_3: number;
    age45: number;
    age50_1: number;
    age50_2: number;
    age50_3: number;
    age50: number;
    age55_1: number;
    age55_2: number;
    age55_3: number;
    age55: number;
    age60_1: number;
    age60_2: number;
    age60_3: number;
    age60: number;
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
    const a3 = fixTwentyTwo(a1 + e)

    const b1 = fixTwentyTwo(b + e)
    const b2 = fixTwentyTwo(b1 + b)
    const b3 = fixTwentyTwo(b1 + e)

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

    const l = fixTwentyTwo(a + b)
    const l1 = fixTwentyTwo(a2 + b2)
    const l2 = fixTwentyTwo(a1 + b1)
    const l3 = fixTwentyTwo(a3 + b3)
    const l4 = fixTwentyTwo(e + e)
    const l5 = fixTwentyTwo(c1 + d1)
    const l6 = fixTwentyTwo(c + d)

    const age0 = a
    const age10 = f
    const age20 = b
    const age30 = g
    const age40 = c
    const age60 = d
    const age50 = fixTwentyTwo(age40 + age60)

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

    const age25_2 = fixTwentyTwo(age20 + age25)
    const age25_1 = fixTwentyTwo(age20 + age20_2)
    const age25_3 = fixTwentyTwo(age20_2 + age25)

    const age30_2 = fixTwentyTwo(age25 + age30)
    const age30_1 = fixTwentyTwo(age25 + age30_2)
    const age30_3 = fixTwentyTwo(age30_2 + age30)

    const age35_2 = fixTwentyTwo(age30 + age35)
    const age35_1 = fixTwentyTwo(age30 + age35_2)
    const age35_3 = fixTwentyTwo(age35_2 + age35)

    const age40_2 = fixTwentyTwo(age35 + age40)
    const age40_1 = fixTwentyTwo(age35 + age40_2)
    const age40_3 = fixTwentyTwo(age40_2 + age40)

    const age45_2 = fixTwentyTwo(age40 + age45)
    const age45_1 = fixTwentyTwo(age40 + age45_2)
    const age45_3 = fixTwentyTwo(age45_2 + age45)

    const age50_2 = fixTwentyTwo(age45 + age50)
    const age50_1 = fixTwentyTwo(age45 + age50_2)
    const age50_3 = fixTwentyTwo(age50_2 + age50)

    const age55_2 = fixTwentyTwo(age50 + age55)
    const age55_1 = fixTwentyTwo(age50 + age55_2)
    const age55_3 = fixTwentyTwo(age55_2 + age55)

    const age60_2 = fixTwentyTwo(age55 + age60)
    const age60_1 = fixTwentyTwo(age55 + age60_2)
    const age60_3 = fixTwentyTwo(age60_2 + age60)

    return {
        a, b, c, d, e, f, g, y, k, a1, b1, c1, d1, d2, x, t1, t2, a2, a3, b2, b3, c2, e1, e2, p1, p2, p3, p4, s1, s2, s3, s4, x1, x2,
        age0, age5, age5_1, age5_2, age5_3, age10, age10_1, age10_2, age10_3, age15, age15_1, age15_2, age15_3, age20, age20_1, age20_2, age20_3, age25, age25_1, age25_2, age25_3, age30, age30_1, age30_2, age30_3, age35, age35_1, age35_2, age35_3, age40, age40_1, age40_2, age40_3, age45, age45_1, age45_2, age45_3, age50, age50_1, age50_2, age50_3, age55, age55_1, age55_2, age55_3, age60, age60_1, age60_2, age60_3, l, l1, l2, l3, l4, l5, l6
    }
};

export default onlineMatrixCalculation;
