import fixTwentyTwo, {sumOfDecimals} from "../utils/fixTwentyTwo";

const calculateFullAge = require('full-age-calculator');

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
  age65_1: number;
  age65_2: number;
  age65_3: number;
  age65: number;
  age70_1: number;
  age70_2: number;
  age70_3: number;
  age70: number;
  age75_1: number;
  age75_2: number;
  age75_3: number;
  age75: number;
  age80_1: number;
  age80_2: number;
  age80_3: number;

  years: number;

  h: number;
  j: number;
  n: number;
  t: number;
}

const onlineMatrixCalculation = (date: string): matrixData => {
  console.log("date", date)

  const a = fixTwentyTwo(date.split("-")[2])
  const b = fixTwentyTwo(date.split("-")[1])
  const c = fixTwentyTwo(fixTwentyTwo(date.split("-")[0]))

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
  const age70 = k


  const age5 = fixTwentyTwo(age0 + age10)
  const age15 = fixTwentyTwo(age10 + age20)
  const age25 = fixTwentyTwo(age20 + age30)
  const age35 = fixTwentyTwo(age30 + age40)
  const age45 = fixTwentyTwo(age40 + age50)
  const age55 = fixTwentyTwo(age50 + age60)
  const age65 = fixTwentyTwo(age60 + age70)
  const age75 = fixTwentyTwo(age70 + age0)

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

  const age65_2 = fixTwentyTwo(age60 + age65)
  const age65_1 = fixTwentyTwo(age60 + age65_2)
  const age65_3 = fixTwentyTwo(age65_2 + age65)

  const age70_2 = fixTwentyTwo(age65 + age70)
  const age70_1 = fixTwentyTwo(age65 + age70_2)
  const age70_3 = fixTwentyTwo(age70_2 + age70)

  const age75_2 = fixTwentyTwo(age70 + age75)
  const age75_1 = fixTwentyTwo(age70 + age75_2)
  const age75_3 = fixTwentyTwo(age75_2 + age75)

  const age80_2 = fixTwentyTwo(age0 + age75)
  const age80_1 = fixTwentyTwo(age75 + age80_2)
  const age80_3 = fixTwentyTwo(age80_2 + age0)

  // -------- MoreDots -------



  let _resultAge: any = {}
  const _resultHandler = () => {
    const tmp0_0 = age0
    _resultAge["0_0"] = tmp0_0;

    const tmp5_0 = age5
    _resultAge["5_0"] = tmp5_0;

    const tmp10_0 = age10
    _resultAge["10_0"] = tmp10_0;

    const tmp15_0 = age15
    _resultAge["15_0"] = tmp15_0;

    const tmp20_0 = age20
    _resultAge["20_0"] = tmp20_0;

    const tmp25_0 = age25
    _resultAge["25_0"] = tmp25_0;

    const tmp30_0 = age30
    _resultAge["30_0"] = tmp30_0;

    const tmp35_0 = age35
    _resultAge["35_0"] = tmp35_0;

    const tmp40_0 = age40
    _resultAge["40_0"] = tmp40_0;

    const tmp45_0 = age45
    _resultAge["45_0"] = tmp45_0;

    const tmp50_0 = age50
    _resultAge["50_0"] = tmp50_0;

    const tmp55_0 = age55
    _resultAge["55_0"] = tmp55_0;

    const tmp60_0 = age60
    _resultAge["60_0"] = tmp60_0;

    const tmp65_0 = age65
    _resultAge["65_0"] = tmp65_0;

    const tmp70_0 = age70
    _resultAge["70_0"] = tmp70_0;

    const tmp75_0 = age75
    _resultAge["75_0"] = tmp75_0;





    const tmp2_6 = fixTwentyTwo(tmp0_0 + tmp5_0)
    _resultAge["2_6"] = tmp2_6

    const tmp1_3 = fixTwentyTwo(tmp0_0 + tmp2_6)
    _resultAge["1_3"] = tmp1_3

    const tmp0_6 = fixTwentyTwo(tmp0_0 + tmp1_3)
    _resultAge["0_6"] = tmp0_6

    const tmp0_3 = fixTwentyTwo(tmp0_0 + tmp0_6)
    _resultAge["0_3"] = tmp0_3

    const tmp0_1 = fixTwentyTwo(tmp0_0 + tmp0_3)
    _resultAge["0_1"] = tmp0_1

    const tmp0_2 = fixTwentyTwo(tmp0_1 + tmp0_3)
    _resultAge["0_2"] = tmp0_2

    const tmp0_4 = fixTwentyTwo(tmp0_3 + tmp0_6)
    _resultAge["0_4"] = tmp0_4

    const tmp0_5 = fixTwentyTwo(tmp0_4 + tmp0_6)
    _resultAge["0_5"] = tmp0_5

    const tmp0_9 = fixTwentyTwo(tmp0_6 + tmp1_3)
    _resultAge["0_9"] = tmp0_9

    const tmp0_7 = fixTwentyTwo(tmp0_6 + tmp0_9)
    _resultAge["0_7"] = tmp0_7

    const tmp0_8 = fixTwentyTwo(tmp0_7 + tmp0_9)
    _resultAge["0_8"] = tmp0_8

    const tmp1_1 = fixTwentyTwo(tmp0_9 + tmp1_3)
    _resultAge["1_1"] = tmp1_1

    const tmp1_2 = fixTwentyTwo(tmp1_1 + tmp1_3)
    _resultAge["1_2"] = tmp1_2

    const tmp1_0 = fixTwentyTwo(tmp0_9 + tmp1_1)
    _resultAge["1_0"] = tmp1_0

    const tmp0_10 = fixTwentyTwo(tmp0_9 + tmp1_0)
    _resultAge["0_10"] = tmp0_10

    const tmp0_11 = fixTwentyTwo(tmp0_10 + tmp1_0)
    _resultAge["0_11"] = tmp0_11

    const tmp1_9 = fixTwentyTwo(tmp1_3 + tmp2_6)
    _resultAge["1_9"] = tmp1_9

    const tmp1_6 = fixTwentyTwo(tmp1_3 + tmp1_9)
    _resultAge["1_6"] = tmp1_6

    const tmp1_4 = fixTwentyTwo(tmp1_3 + tmp1_6)
    _resultAge["1_4"] = tmp1_4

    const tmp1_5 = fixTwentyTwo(tmp1_4 + tmp1_6)
    _resultAge["1_5"] = tmp1_5

    const tmp1_7 = fixTwentyTwo(tmp1_6 + tmp1_9)
    _resultAge["1_7"] = tmp1_7

    const tmp1_8 = fixTwentyTwo(tmp1_7 + tmp1_9)
    _resultAge["1_8"] = tmp1_8

    const tmp2_2 = fixTwentyTwo(tmp1_9 + tmp2_6)
    _resultAge["2_2"] = tmp2_2

    const tmp2_0 = fixTwentyTwo(tmp1_9 + tmp2_2)
    _resultAge["2_0"] = tmp2_0

    const tmp1_10 = fixTwentyTwo(tmp1_9 + tmp2_0)
    _resultAge["1_10"] = tmp1_10

    const tmp1_11 = fixTwentyTwo(tmp1_10 + tmp2_0)
    _resultAge["1_11"] = tmp1_11

    const tmp2_4 = fixTwentyTwo(tmp2_2 + tmp2_6)
    _resultAge["2_4"] = tmp2_4

    const tmp2_3 = fixTwentyTwo(tmp2_2 + tmp2_4)
    _resultAge["2_3"] = tmp2_3

    const tmp2_5 = fixTwentyTwo(tmp2_4 + tmp2_6)
    _resultAge["2_5"] = tmp2_5

    const tmp3_8 = fixTwentyTwo(tmp2_6 + tmp5_0)
    _resultAge["3_8"] = tmp3_8

    const tmp3_2 = fixTwentyTwo(tmp2_6 + tmp3_8)
    _resultAge["3_2"] = tmp3_2

    const tmp2_9 = fixTwentyTwo(tmp2_6 + tmp3_2)
    _resultAge["2_9"] = tmp2_9

    const tmp2_7 = fixTwentyTwo(tmp2_6 + tmp2_9)
    _resultAge["2_7"] = tmp2_7

    const tmp2_8 = fixTwentyTwo(tmp2_7 + tmp2_9)
    _resultAge["2_8"] = tmp2_8

    const tmp3_0 = fixTwentyTwo(tmp2_9 + tmp3_2)
    _resultAge["3_0"] = tmp3_0

    const tmp2_10 = fixTwentyTwo(tmp2_9 + tmp3_0)
    _resultAge["2_10"] = tmp2_10

    const tmp2_11 = fixTwentyTwo(tmp2_10 + tmp3_0)
    _resultAge["2_11"] = tmp2_11

    const tmp3_1 = fixTwentyTwo(tmp3_0 + tmp3_2)
    _resultAge["3_1"] = tmp3_1

    const tmp3_5 = fixTwentyTwo(tmp3_2 + tmp3_8)
    _resultAge["3_5"] = tmp3_5

    const tmp3_3 = fixTwentyTwo(tmp3_2 + tmp3_5)
    _resultAge["3_3"] = tmp3_3

    const tmp3_4 = fixTwentyTwo(tmp3_3 + tmp3_5)
    _resultAge["3_4"] = tmp3_4

    const tmp3_6 = fixTwentyTwo(tmp3_5 + tmp3_8)
    _resultAge["3_6"] = tmp3_6

    const tmp3_7 = fixTwentyTwo(tmp3_6 + tmp3_8)
    _resultAge["3_7"] = tmp3_7

    const tmp4_4 = fixTwentyTwo(tmp3_8 + tmp5_0)
    _resultAge["4_4"] = tmp4_4

    const tmp4_1 = fixTwentyTwo(tmp3_8 + tmp4_4)
    _resultAge["4_1"] = tmp4_1

    const tmp3_9 = fixTwentyTwo(tmp3_8 + tmp4_1)
    _resultAge["3_9"] = tmp3_9

    const tmp4_0 = fixTwentyTwo(tmp3_9 + tmp4_1)
    _resultAge["4_0"] = tmp4_0

    const tmp3_10 = fixTwentyTwo(tmp3_9 + tmp4_0)
    _resultAge["3_10"] = tmp3_10

    const tmp3_11 = fixTwentyTwo(tmp3_10 + tmp4_0)
    _resultAge["3_11"] = tmp3_11

    const tmp4_2 = fixTwentyTwo(tmp4_1 + tmp4_4)
    _resultAge["4_2"] = tmp4_2

    const tmp4_3 = fixTwentyTwo(tmp4_2 + tmp4_4)
    _resultAge["4_3"] = tmp4_3

    const tmp4_7 = fixTwentyTwo(tmp4_4 + tmp5_0)
    _resultAge["4_7"] = tmp4_7

    const tmp4_5 = fixTwentyTwo(tmp4_4 + tmp4_7)
    _resultAge["4_5"] = tmp4_5

    const tmp4_6 = fixTwentyTwo(tmp4_5 + tmp4_7)
    _resultAge["4_6"] = tmp4_6

    const tmp4_9 = fixTwentyTwo(tmp4_7 + tmp5_0)
    _resultAge["4_9"] = tmp4_9

    const tmp4_8 = fixTwentyTwo(tmp4_7 + tmp4_9)
    _resultAge["4_8"] = tmp4_8

    const tmp4_10 = fixTwentyTwo(tmp4_9 + tmp5_0)
    _resultAge["4_10"] = tmp4_10

    const tmp4_11 = fixTwentyTwo(tmp4_10 + tmp5_0)
    _resultAge["4_11"] = tmp4_11
  };
  _resultHandler()

  // -------------------------

  const h = fixTwentyTwo(b + d)
  const j = fixTwentyTwo(a + c)
  const n = fixTwentyTwo(f + y)
  const t = fixTwentyTwo(g + k)

  let years = 5;

  const fullAge = calculateFullAge.getFullAge(date);

  // @ts-ignore
  years = resultAge[`${(fullAge.years).toString()}_${(fullAge.months + 1).toString()}`] || 5


  console.log(fullAge)
  console.log("years", years)


  return {
    a,
    b,
    c,
    d,
    e,
    f,
    g,
    y,
    k,
    a1,
    b1,
    c1,
    d1,
    d2,
    x,
    t1,
    t2,
    a2,
    a3,
    b2,
    b3,
    c2,
    e1,
    e2,
    p1,
    p2,
    p3,
    p4,
    s1,
    s2,
    s3,
    s4,
    x1,
    x2,
    age0,
    age5,
    age5_1,
    age5_2,
    age5_3,
    age10,
    age10_1,
    age10_2,
    age10_3,
    age15,
    age15_1,
    age15_2,
    age15_3,
    age20,
    age20_1,
    age20_2,
    age20_3,
    age25,
    age25_1,
    age25_2,
    age25_3,
    age30,
    age30_1,
    age30_2,
    age30_3,
    age35,
    age35_1,
    age35_2,
    age35_3,
    age40,
    age40_1,
    age40_2,
    age40_3,
    age45,
    age45_1,
    age45_2,
    age45_3,
    age50,
    age50_1,
    age50_2,
    age50_3,
    age55,
    age55_1,
    age55_2,
    age55_3,
    age60,
    age60_1,
    age60_2,
    age60_3,
    age65,
    age65_1,
    age65_2,
    age65_3,
    age70,
    age70_1,
    age70_2,
    age70_3,
    age75,
    age75_1,
    age75_2,
    age75_3,
    age80_1,
    age80_2,
    age80_3,
    l,
    l1,
    l2,
    l3,
    l4,
    l5,
    l6,
    h,
    j,
    n,
    t,
    years
  }
};

export default onlineMatrixCalculation;
