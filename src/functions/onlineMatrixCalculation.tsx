import fixTwentyTwo from '../utils/fixTwentyTwo'
// @ts-ignore
import calculateAge from 'calculate-age'
// @ts-ignore
// import * as calculateFullAge from 'full-age-calculator'

export interface matrixData {
	a: number
	b: number
	c: number
	d: number

	e: number
	e1: number
	e2: number

	s1: number
	s2: number
	s3: number
	s4: number

	p1: number
	p2: number
	p3: number
	p4: number

	f: number
	g: number
	y: number
	k: number

	a1: number
	a2: number
	a3: number

	b1: number
	b2: number
	b3: number

	c1: number
	c2: number

	d1: number
	d2: number

	x: number
	x1: number
	x2: number

	t1: number
	t2: number

	l: number
	l1: number
	l2: number
	l3: number
	l4: number
	l5: number
	l6: number

	age0: number
	age5_1: number
	age5_2: number
	age5_3: number
	age5: number
	age10_1: number
	age10_2: number
	age10_3: number
	age10: number
	age15_1: number
	age15_2: number
	age15_3: number
	age15: number
	age20_1: number
	age20_2: number
	age20_3: number
	age20: number
	age25_1: number
	age25_2: number
	age25_3: number
	age25: number
	age30_1: number
	age30_2: number
	age30_3: number
	age30: number
	age35_1: number
	age35_2: number
	age35_3: number
	age35: number
	age40_1: number
	age40_2: number
	age40_3: number
	age40: number
	age45_1: number
	age45_2: number
	age45_3: number
	age45: number
	age50_1: number
	age50_2: number
	age50_3: number
	age50: number
	age55_1: number
	age55_2: number
	age55_3: number
	age55: number
	age60_1: number
	age60_2: number
	age60_3: number
	age60: number
	age65_1: number
	age65_2: number
	age65_3: number
	age65: number
	age70_1: number
	age70_2: number
	age70_3: number
	age70: number
	age75_1: number
	age75_2: number
	age75_3: number
	age75: number
	age80_1: number
	age80_2: number
	age80_3: number
	_resultAge: any

	years: number

	h: number
	j: number
	n: number
	t: number
}

const onlineMatrixCalculation = (date: string, date1 = '', isSovmest = false): matrixData => {
	console.log('date', date)

	let a = fixTwentyTwo(date.split('-')[2])
	let b = fixTwentyTwo(date.split('-')[1])
	let c = fixTwentyTwo(fixTwentyTwo(date.split('-')[0]))

	let d = fixTwentyTwo(a + b + c)
	let e = fixTwentyTwo(a + b + c + d)
	let f = fixTwentyTwo(a + b)
	let g = fixTwentyTwo(b + c)
	let y = fixTwentyTwo(c + d)
	let k = fixTwentyTwo(a + d)

	if (isSovmest) {
		const a1 = a
		const b1 = b
		const c1 = c
		const d1 = d
		const e1 = e
		const f1 = f
		const g1 = g
		const y1 = y
		const k1 = k

		// @ts-ignore
		const _a = fixTwentyTwo(date1?.split('-')[2])
		// @ts-ignore
		const _b = fixTwentyTwo(date1?.split('-')[1])
		// @ts-ignore
		const _c = fixTwentyTwo(fixTwentyTwo(date1?.split('-')[0]))

		let _d = fixTwentyTwo(_a + _b + _c)
		let _e = fixTwentyTwo(_a + _b + _c + _d)
		let _f = fixTwentyTwo(_a + _b)
		let _g = fixTwentyTwo(_b + _c)
		let _y = fixTwentyTwo(_c + _d)
		let _k = fixTwentyTwo(_a + _d)

		console.log(a, b, c, d, e, f, g, y, k)
		console.log(_a, _b, _c, _d, _e, _f, _g, _y, _k)

		a = fixTwentyTwo(a1 + _a)
		b = fixTwentyTwo(b1 + _b)
		c = fixTwentyTwo(c1 + _c)
		d = fixTwentyTwo(d1 + _d)
		e = fixTwentyTwo(e1 + _e)
		f = fixTwentyTwo(f1 + _f)
		g = fixTwentyTwo(g1 + _g)
		y = fixTwentyTwo(y1 + _y)
		k = fixTwentyTwo(k1 + _k)
	}

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
		_resultAge['0_0'] = tmp0_0

		const tmp5_0 = age5
		_resultAge['5_0'] = tmp5_0

		const tmp10_0 = age10
		_resultAge['10_0'] = tmp10_0

		const tmp15_0 = age15
		_resultAge['15_0'] = tmp15_0

		const tmp20_0 = age20
		_resultAge['20_0'] = tmp20_0

		const tmp25_0 = age25
		_resultAge['25_0'] = tmp25_0

		const tmp30_0 = age30
		_resultAge['30_0'] = tmp30_0

		const tmp35_0 = age35
		_resultAge['35_0'] = tmp35_0

		const tmp40_0 = age40
		_resultAge['40_0'] = tmp40_0

		const tmp45_0 = age45
		_resultAge['45_0'] = tmp45_0

		const tmp50_0 = age50
		_resultAge['50_0'] = tmp50_0

		const tmp55_0 = age55
		_resultAge['55_0'] = tmp55_0

		const tmp60_0 = age60
		_resultAge['60_0'] = tmp60_0

		const tmp65_0 = age65
		_resultAge['65_0'] = tmp65_0

		const tmp70_0 = age70
		_resultAge['70_0'] = tmp70_0

		const tmp75_0 = age75
		_resultAge['75_0'] = tmp75_0

		const tmp2_6 = fixTwentyTwo(tmp0_0 + tmp5_0)
		_resultAge['2_6'] = tmp2_6

		const tmp1_3 = fixTwentyTwo(tmp0_0 + tmp2_6)
		_resultAge['1_3'] = tmp1_3

		const tmp0_6 = fixTwentyTwo(tmp0_0 + tmp1_3)
		_resultAge['0_6'] = tmp0_6

		const tmp0_3 = fixTwentyTwo(tmp0_0 + tmp0_6)
		_resultAge['0_3'] = tmp0_3

		const tmp0_1 = fixTwentyTwo(tmp0_0 + tmp0_3)
		_resultAge['0_1'] = tmp0_1

		const tmp0_2 = fixTwentyTwo(tmp0_1 + tmp0_3)
		_resultAge['0_2'] = tmp0_2

		const tmp0_4 = fixTwentyTwo(tmp0_3 + tmp0_6)
		_resultAge['0_4'] = tmp0_4

		const tmp0_5 = fixTwentyTwo(tmp0_4 + tmp0_6)
		_resultAge['0_5'] = tmp0_5

		const tmp0_9 = fixTwentyTwo(tmp0_6 + tmp1_3)
		_resultAge['0_9'] = tmp0_9

		const tmp0_7 = fixTwentyTwo(tmp0_6 + tmp0_9)
		_resultAge['0_7'] = tmp0_7

		const tmp0_8 = fixTwentyTwo(tmp0_7 + tmp0_9)
		_resultAge['0_8'] = tmp0_8

		const tmp1_1 = fixTwentyTwo(tmp0_9 + tmp1_3)
		_resultAge['1_1'] = tmp1_1

		const tmp1_2 = fixTwentyTwo(tmp1_1 + tmp1_3)
		_resultAge['1_2'] = tmp1_2

		const tmp1_0 = fixTwentyTwo(tmp0_9 + tmp1_1)
		_resultAge['1_0'] = tmp1_0

		const tmp0_10 = fixTwentyTwo(tmp0_9 + tmp1_0)
		_resultAge['0_10'] = tmp0_10

		const tmp0_11 = fixTwentyTwo(tmp0_10 + tmp1_0)
		_resultAge['0_11'] = tmp0_11

		const tmp1_9 = fixTwentyTwo(tmp1_3 + tmp2_6)
		_resultAge['1_9'] = tmp1_9

		const tmp1_6 = fixTwentyTwo(tmp1_3 + tmp1_9)
		_resultAge['1_6'] = tmp1_6

		const tmp1_4 = fixTwentyTwo(tmp1_3 + tmp1_6)
		_resultAge['1_4'] = tmp1_4

		const tmp1_5 = fixTwentyTwo(tmp1_4 + tmp1_6)
		_resultAge['1_5'] = tmp1_5

		const tmp1_7 = fixTwentyTwo(tmp1_6 + tmp1_9)
		_resultAge['1_7'] = tmp1_7

		const tmp1_8 = fixTwentyTwo(tmp1_7 + tmp1_9)
		_resultAge['1_8'] = tmp1_8

		const tmp2_2 = fixTwentyTwo(tmp1_9 + tmp2_6)
		_resultAge['2_2'] = tmp2_2

		const tmp2_0 = fixTwentyTwo(tmp1_9 + tmp2_2)
		_resultAge['2_0'] = tmp2_0

		const tmp1_10 = fixTwentyTwo(tmp1_9 + tmp2_0)
		_resultAge['1_10'] = tmp1_10

		const tmp1_11 = fixTwentyTwo(tmp1_10 + tmp2_0)
		_resultAge['1_11'] = tmp1_11

		const tmp2_4 = fixTwentyTwo(tmp2_2 + tmp2_6)
		_resultAge['2_4'] = tmp2_4

		const tmp2_3 = fixTwentyTwo(tmp2_2 + tmp2_4)
		_resultAge['2_3'] = tmp2_3

		const tmp2_5 = fixTwentyTwo(tmp2_4 + tmp2_6)
		_resultAge['2_5'] = tmp2_5

		const tmp3_8 = fixTwentyTwo(tmp2_6 + tmp5_0)
		_resultAge['3_8'] = tmp3_8

		const tmp3_2 = fixTwentyTwo(tmp2_6 + tmp3_8)
		_resultAge['3_2'] = tmp3_2

		const tmp2_9 = fixTwentyTwo(tmp2_6 + tmp3_2)
		_resultAge['2_9'] = tmp2_9

		const tmp2_7 = fixTwentyTwo(tmp2_6 + tmp2_9)
		_resultAge['2_7'] = tmp2_7

		const tmp2_8 = fixTwentyTwo(tmp2_7 + tmp2_9)
		_resultAge['2_8'] = tmp2_8

		const tmp3_0 = fixTwentyTwo(tmp2_9 + tmp3_2)
		_resultAge['3_0'] = tmp3_0

		const tmp2_10 = fixTwentyTwo(tmp2_9 + tmp3_0)
		_resultAge['2_10'] = tmp2_10

		const tmp2_11 = fixTwentyTwo(tmp2_10 + tmp3_0)
		_resultAge['2_11'] = tmp2_11

		const tmp3_1 = fixTwentyTwo(tmp3_0 + tmp3_2)
		_resultAge['3_1'] = tmp3_1

		const tmp3_5 = fixTwentyTwo(tmp3_2 + tmp3_8)
		_resultAge['3_5'] = tmp3_5

		const tmp3_3 = fixTwentyTwo(tmp3_2 + tmp3_5)
		_resultAge['3_3'] = tmp3_3

		const tmp3_4 = fixTwentyTwo(tmp3_3 + tmp3_5)
		_resultAge['3_4'] = tmp3_4

		const tmp3_6 = fixTwentyTwo(tmp3_5 + tmp3_8)
		_resultAge['3_6'] = tmp3_6

		const tmp3_7 = fixTwentyTwo(tmp3_6 + tmp3_8)
		_resultAge['3_7'] = tmp3_7

		const tmp4_4 = fixTwentyTwo(tmp3_8 + tmp5_0)
		_resultAge['4_4'] = tmp4_4

		const tmp4_1 = fixTwentyTwo(tmp3_8 + tmp4_4)
		_resultAge['4_1'] = tmp4_1

		const tmp3_9 = fixTwentyTwo(tmp3_8 + tmp4_1)
		_resultAge['3_9'] = tmp3_9

		const tmp4_0 = fixTwentyTwo(tmp3_9 + tmp4_1)
		_resultAge['4_0'] = tmp4_0

		const tmp3_10 = fixTwentyTwo(tmp3_9 + tmp4_0)
		_resultAge['3_10'] = tmp3_10

		const tmp3_11 = fixTwentyTwo(tmp3_10 + tmp4_0)
		_resultAge['3_11'] = tmp3_11

		const tmp4_2 = fixTwentyTwo(tmp4_1 + tmp4_4)
		_resultAge['4_2'] = tmp4_2

		const tmp4_3 = fixTwentyTwo(tmp4_2 + tmp4_4)
		_resultAge['4_3'] = tmp4_3

		const tmp4_7 = fixTwentyTwo(tmp4_4 + tmp5_0)
		_resultAge['4_7'] = tmp4_7

		const tmp4_5 = fixTwentyTwo(tmp4_4 + tmp4_7)
		_resultAge['4_5'] = tmp4_5

		const tmp4_6 = fixTwentyTwo(tmp4_5 + tmp4_7)
		_resultAge['4_6'] = tmp4_6

		const tmp4_9 = fixTwentyTwo(tmp4_7 + tmp5_0)
		_resultAge['4_9'] = tmp4_9

		const tmp4_8 = fixTwentyTwo(tmp4_7 + tmp4_9)
		_resultAge['4_8'] = tmp4_8

		const tmp4_10 = fixTwentyTwo(tmp4_9 + tmp5_0)
		_resultAge['4_10'] = tmp4_10

		const tmp4_11 = fixTwentyTwo(tmp4_10 + tmp5_0)
		_resultAge['4_11'] = tmp4_11

		const tmp7_6 = fixTwentyTwo(tmp5_0 + tmp10_0)
		_resultAge['7_6'] = tmp7_6

		const tmp6_3 = fixTwentyTwo(tmp5_0 + tmp7_6)
		_resultAge['6_3'] = tmp6_3

		const tmp5_6 = fixTwentyTwo(tmp5_0 + tmp6_3)
		_resultAge['5_6'] = tmp5_6

		const tmp5_3 = fixTwentyTwo(tmp5_0 + tmp5_6)
		_resultAge['5_3'] = tmp5_3

		const tmp5_1 = fixTwentyTwo(tmp5_0 + tmp5_3)
		_resultAge['5_1'] = tmp5_1

		const tmp5_2 = fixTwentyTwo(tmp5_1 + tmp5_3)
		_resultAge['5_2'] = tmp5_2

		const tmp5_4 = fixTwentyTwo(tmp5_3 + tmp5_6)
		_resultAge['5_4'] = tmp5_4

		const tmp5_5 = fixTwentyTwo(tmp5_4 + tmp5_6)
		_resultAge['5_5'] = tmp5_5

		const tmp5_9 = fixTwentyTwo(tmp5_6 + tmp6_3)
		_resultAge['5_9'] = tmp5_9

		const tmp5_7 = fixTwentyTwo(tmp5_6 + tmp5_9)
		_resultAge['5_7'] = tmp5_7

		const tmp5_8 = fixTwentyTwo(tmp5_7 + tmp5_9)
		_resultAge['5_8'] = tmp5_8

		const tmp6_1 = fixTwentyTwo(tmp5_9 + tmp6_3)
		_resultAge['6_1'] = tmp6_1

		const tmp6_2 = fixTwentyTwo(tmp6_1 + tmp6_3)
		_resultAge['6_2'] = tmp6_2

		const tmp6_0 = fixTwentyTwo(tmp5_9 + tmp6_1)
		_resultAge['6_0'] = tmp6_0

		const tmp5_10 = fixTwentyTwo(tmp5_9 + tmp6_0)
		_resultAge['5_10'] = tmp5_10

		const tmp5_11 = fixTwentyTwo(tmp5_10 + tmp6_0)
		_resultAge['5_11'] = tmp5_11

		const tmp6_9 = fixTwentyTwo(tmp6_3 + tmp7_6)
		_resultAge['6_9'] = tmp6_9

		const tmp6_6 = fixTwentyTwo(tmp6_3 + tmp6_9)
		_resultAge['6_6'] = tmp6_6

		const tmp6_4 = fixTwentyTwo(tmp6_3 + tmp6_6)
		_resultAge['6_4'] = tmp6_4

		const tmp6_5 = fixTwentyTwo(tmp6_4 + tmp6_6)
		_resultAge['6_5'] = tmp6_5

		const tmp6_7 = fixTwentyTwo(tmp6_6 + tmp6_9)
		_resultAge['6_7'] = tmp6_7

		const tmp6_8 = fixTwentyTwo(tmp6_7 + tmp6_9)
		_resultAge['6_8'] = tmp6_8

		const tmp7_2 = fixTwentyTwo(tmp6_9 + tmp7_6)
		_resultAge['7_2'] = tmp7_2

		const tmp7_0 = fixTwentyTwo(tmp6_9 + tmp7_2)
		_resultAge['7_0'] = tmp7_0

		const tmp6_10 = fixTwentyTwo(tmp6_9 + tmp7_0)
		_resultAge['6_10'] = tmp6_10

		const tmp6_11 = fixTwentyTwo(tmp6_10 + tmp7_0)
		_resultAge['6_11'] = tmp6_11

		const tmp7_4 = fixTwentyTwo(tmp7_2 + tmp7_6)
		_resultAge['7_4'] = tmp7_4

		const tmp7_3 = fixTwentyTwo(tmp7_2 + tmp7_4)
		_resultAge['7_3'] = tmp7_3

		const tmp7_5 = fixTwentyTwo(tmp7_4 + tmp7_6)
		_resultAge['7_5'] = tmp7_5

		const tmp8_8 = fixTwentyTwo(tmp7_6 + tmp10_0)
		_resultAge['8_8'] = tmp8_8

		const tmp8_2 = fixTwentyTwo(tmp7_6 + tmp8_8)
		_resultAge['8_2'] = tmp8_2

		const tmp7_9 = fixTwentyTwo(tmp7_6 + tmp8_2)
		_resultAge['7_9'] = tmp7_9

		const tmp7_7 = fixTwentyTwo(tmp7_6 + tmp7_9)
		_resultAge['7_7'] = tmp7_7

		const tmp7_8 = fixTwentyTwo(tmp7_7 + tmp7_9)
		_resultAge['7_8'] = tmp7_8

		const tmp8_0 = fixTwentyTwo(tmp7_9 + tmp8_2)
		_resultAge['8_0'] = tmp8_0

		const tmp7_10 = fixTwentyTwo(tmp7_9 + tmp8_0)
		_resultAge['7_10'] = tmp7_10

		const tmp7_11 = fixTwentyTwo(tmp7_10 + tmp8_0)
		_resultAge['7_11'] = tmp7_11

		const tmp8_1 = fixTwentyTwo(tmp8_0 + tmp8_2)
		_resultAge['8_1'] = tmp8_1

		const tmp8_5 = fixTwentyTwo(tmp8_2 + tmp8_8)
		_resultAge['8_5'] = tmp8_5

		const tmp8_3 = fixTwentyTwo(tmp8_2 + tmp8_5)
		_resultAge['8_3'] = tmp8_3

		const tmp8_4 = fixTwentyTwo(tmp8_3 + tmp8_5)
		_resultAge['8_4'] = tmp8_4

		const tmp8_6 = fixTwentyTwo(tmp8_5 + tmp8_8)
		_resultAge['8_6'] = tmp8_6

		const tmp8_7 = fixTwentyTwo(tmp8_6 + tmp8_8)
		_resultAge['8_7'] = tmp8_7

		const tmp9_4 = fixTwentyTwo(tmp8_8 + tmp10_0)
		_resultAge['9_4'] = tmp9_4

		const tmp9_1 = fixTwentyTwo(tmp8_8 + tmp9_4)
		_resultAge['9_1'] = tmp9_1

		const tmp8_9 = fixTwentyTwo(tmp8_8 + tmp9_1)
		_resultAge['8_9'] = tmp8_9

		const tmp9_0 = fixTwentyTwo(tmp8_9 + tmp9_1)
		_resultAge['9_0'] = tmp9_0

		const tmp8_10 = fixTwentyTwo(tmp8_9 + tmp9_0)
		_resultAge['8_10'] = tmp8_10

		const tmp8_11 = fixTwentyTwo(tmp8_10 + tmp9_0)
		_resultAge['8_11'] = tmp8_11

		const tmp9_2 = fixTwentyTwo(tmp9_1 + tmp9_4)
		_resultAge['9_2'] = tmp9_2

		const tmp9_3 = fixTwentyTwo(tmp9_2 + tmp9_4)
		_resultAge['9_3'] = tmp9_3

		const tmp9_7 = fixTwentyTwo(tmp9_4 + tmp10_0)
		_resultAge['9_7'] = tmp9_7

		const tmp9_5 = fixTwentyTwo(tmp9_4 + tmp9_7)
		_resultAge['9_5'] = tmp9_5

		const tmp9_6 = fixTwentyTwo(tmp9_5 + tmp9_7)
		_resultAge['9_6'] = tmp9_6

		const tmp9_9 = fixTwentyTwo(tmp9_7 + tmp10_0)
		_resultAge['9_9'] = tmp9_9

		const tmp9_8 = fixTwentyTwo(tmp9_7 + tmp9_9)
		_resultAge['9_8'] = tmp9_8

		const tmp9_10 = fixTwentyTwo(tmp9_9 + tmp10_0)
		_resultAge['9_10'] = tmp9_10

		const tmp9_11 = fixTwentyTwo(tmp9_10 + tmp10_0)
		_resultAge['9_11'] = tmp9_11
		const tmp12_6 = fixTwentyTwo(tmp10_0 + tmp15_0)
		_resultAge['12_6'] = tmp12_6

		const tmp11_3 = fixTwentyTwo(tmp10_0 + tmp12_6)
		_resultAge['11_3'] = tmp11_3

		const tmp10_6 = fixTwentyTwo(tmp10_0 + tmp11_3)
		_resultAge['10_6'] = tmp10_6

		const tmp10_3 = fixTwentyTwo(tmp10_0 + tmp10_6)
		_resultAge['10_3'] = tmp10_3

		const tmp10_1 = fixTwentyTwo(tmp10_0 + tmp10_3)
		_resultAge['10_1'] = tmp10_1

		const tmp10_2 = fixTwentyTwo(tmp10_1 + tmp10_3)
		_resultAge['10_2'] = tmp10_2

		const tmp10_4 = fixTwentyTwo(tmp10_3 + tmp10_6)
		_resultAge['10_4'] = tmp10_4

		const tmp10_5 = fixTwentyTwo(tmp10_4 + tmp10_6)
		_resultAge['10_5'] = tmp10_5

		const tmp10_9 = fixTwentyTwo(tmp10_6 + tmp11_3)
		_resultAge['10_9'] = tmp10_9

		const tmp10_7 = fixTwentyTwo(tmp10_6 + tmp10_9)
		_resultAge['10_7'] = tmp10_7

		const tmp10_8 = fixTwentyTwo(tmp10_7 + tmp10_9)
		_resultAge['10_8'] = tmp10_8

		const tmp11_1 = fixTwentyTwo(tmp10_9 + tmp11_3)
		_resultAge['11_1'] = tmp11_1

		const tmp11_2 = fixTwentyTwo(tmp11_1 + tmp11_3)
		_resultAge['11_2'] = tmp11_2

		const tmp11_0 = fixTwentyTwo(tmp10_9 + tmp11_1)
		_resultAge['11_0'] = tmp11_0

		const tmp10_10 = fixTwentyTwo(tmp10_9 + tmp11_0)
		_resultAge['10_10'] = tmp10_10

		const tmp10_11 = fixTwentyTwo(tmp10_10 + tmp11_0)
		_resultAge['10_11'] = tmp10_11

		const tmp11_9 = fixTwentyTwo(tmp11_3 + tmp12_6)
		_resultAge['11_9'] = tmp11_9

		const tmp11_6 = fixTwentyTwo(tmp11_3 + tmp11_9)
		_resultAge['11_6'] = tmp11_6

		const tmp11_4 = fixTwentyTwo(tmp11_3 + tmp11_6)
		_resultAge['11_4'] = tmp11_4

		const tmp11_5 = fixTwentyTwo(tmp11_4 + tmp11_6)
		_resultAge['11_5'] = tmp11_5

		const tmp11_7 = fixTwentyTwo(tmp11_6 + tmp11_9)
		_resultAge['11_7'] = tmp11_7

		const tmp11_8 = fixTwentyTwo(tmp11_7 + tmp11_9)
		_resultAge['11_8'] = tmp11_8

		const tmp12_2 = fixTwentyTwo(tmp11_9 + tmp12_6)
		_resultAge['12_2'] = tmp12_2

		const tmp12_0 = fixTwentyTwo(tmp11_9 + tmp12_2)
		_resultAge['12_0'] = tmp12_0

		const tmp11_10 = fixTwentyTwo(tmp11_9 + tmp12_0)
		_resultAge['11_10'] = tmp11_10

		const tmp11_11 = fixTwentyTwo(tmp11_10 + tmp12_0)
		_resultAge['11_11'] = tmp11_11

		const tmp12_4 = fixTwentyTwo(tmp12_2 + tmp12_6)
		_resultAge['12_4'] = tmp12_4

		const tmp12_3 = fixTwentyTwo(tmp12_2 + tmp12_4)
		_resultAge['12_3'] = tmp12_3

		const tmp12_5 = fixTwentyTwo(tmp12_4 + tmp12_6)
		_resultAge['12_5'] = tmp12_5

		const tmp13_8 = fixTwentyTwo(tmp12_6 + tmp15_0)
		_resultAge['13_8'] = tmp13_8

		const tmp13_2 = fixTwentyTwo(tmp12_6 + tmp13_8)
		_resultAge['13_2'] = tmp13_2

		const tmp12_9 = fixTwentyTwo(tmp12_6 + tmp13_2)
		_resultAge['12_9'] = tmp12_9

		const tmp12_7 = fixTwentyTwo(tmp12_6 + tmp12_9)
		_resultAge['12_7'] = tmp12_7

		const tmp12_8 = fixTwentyTwo(tmp12_7 + tmp12_9)
		_resultAge['12_8'] = tmp12_8

		const tmp13_0 = fixTwentyTwo(tmp12_9 + tmp13_2)
		_resultAge['13_0'] = tmp13_0

		const tmp12_10 = fixTwentyTwo(tmp12_9 + tmp13_0)
		_resultAge['12_10'] = tmp12_10

		const tmp12_11 = fixTwentyTwo(tmp12_10 + tmp13_0)
		_resultAge['12_11'] = tmp12_11

		const tmp13_1 = fixTwentyTwo(tmp13_0 + tmp13_2)
		_resultAge['13_1'] = tmp13_1

		const tmp13_5 = fixTwentyTwo(tmp13_2 + tmp13_8)
		_resultAge['13_5'] = tmp13_5

		const tmp13_3 = fixTwentyTwo(tmp13_2 + tmp13_5)
		_resultAge['13_3'] = tmp13_3

		const tmp13_4 = fixTwentyTwo(tmp13_3 + tmp13_5)
		_resultAge['13_4'] = tmp13_4

		const tmp13_6 = fixTwentyTwo(tmp13_5 + tmp13_8)
		_resultAge['13_6'] = tmp13_6

		const tmp13_7 = fixTwentyTwo(tmp13_6 + tmp13_8)
		_resultAge['13_7'] = tmp13_7

		const tmp14_4 = fixTwentyTwo(tmp13_8 + tmp15_0)
		_resultAge['14_4'] = tmp14_4

		const tmp14_1 = fixTwentyTwo(tmp13_8 + tmp14_4)
		_resultAge['14_1'] = tmp14_1

		const tmp13_9 = fixTwentyTwo(tmp13_8 + tmp14_1)
		_resultAge['13_9'] = tmp13_9

		const tmp14_0 = fixTwentyTwo(tmp13_9 + tmp14_1)
		_resultAge['14_0'] = tmp14_0

		const tmp13_10 = fixTwentyTwo(tmp13_9 + tmp14_0)
		_resultAge['13_10'] = tmp13_10

		const tmp13_11 = fixTwentyTwo(tmp13_10 + tmp14_0)
		_resultAge['13_11'] = tmp13_11

		const tmp14_2 = fixTwentyTwo(tmp14_1 + tmp14_4)
		_resultAge['14_2'] = tmp14_2

		const tmp14_3 = fixTwentyTwo(tmp14_2 + tmp14_4)
		_resultAge['14_3'] = tmp14_3

		const tmp14_7 = fixTwentyTwo(tmp14_4 + tmp15_0)
		_resultAge['14_7'] = tmp14_7

		const tmp14_5 = fixTwentyTwo(tmp14_4 + tmp14_7)
		_resultAge['14_5'] = tmp14_5

		const tmp14_6 = fixTwentyTwo(tmp14_5 + tmp14_7)
		_resultAge['14_6'] = tmp14_6

		const tmp14_9 = fixTwentyTwo(tmp14_7 + tmp15_0)
		_resultAge['14_9'] = tmp14_9

		const tmp14_8 = fixTwentyTwo(tmp14_7 + tmp14_9)
		_resultAge['14_8'] = tmp14_8

		const tmp14_10 = fixTwentyTwo(tmp14_9 + tmp15_0)
		_resultAge['14_10'] = tmp14_10

		const tmp14_11 = fixTwentyTwo(tmp14_10 + tmp15_0)
		_resultAge['14_11'] = tmp14_11
		const tmp17_6 = fixTwentyTwo(tmp15_0 + tmp20_0)
		_resultAge['17_6'] = tmp17_6

		const tmp16_3 = fixTwentyTwo(tmp15_0 + tmp17_6)
		_resultAge['16_3'] = tmp16_3

		const tmp15_6 = fixTwentyTwo(tmp15_0 + tmp16_3)
		_resultAge['15_6'] = tmp15_6

		const tmp15_3 = fixTwentyTwo(tmp15_0 + tmp15_6)
		_resultAge['15_3'] = tmp15_3

		const tmp15_1 = fixTwentyTwo(tmp15_0 + tmp15_3)
		_resultAge['15_1'] = tmp15_1

		const tmp15_2 = fixTwentyTwo(tmp15_1 + tmp15_3)
		_resultAge['15_2'] = tmp15_2

		const tmp15_4 = fixTwentyTwo(tmp15_3 + tmp15_6)
		_resultAge['15_4'] = tmp15_4

		const tmp15_5 = fixTwentyTwo(tmp15_4 + tmp15_6)
		_resultAge['15_5'] = tmp15_5

		const tmp15_9 = fixTwentyTwo(tmp15_6 + tmp16_3)
		_resultAge['15_9'] = tmp15_9

		const tmp15_7 = fixTwentyTwo(tmp15_6 + tmp15_9)
		_resultAge['15_7'] = tmp15_7

		const tmp15_8 = fixTwentyTwo(tmp15_7 + tmp15_9)
		_resultAge['15_8'] = tmp15_8

		const tmp16_1 = fixTwentyTwo(tmp15_9 + tmp16_3)
		_resultAge['16_1'] = tmp16_1

		const tmp16_2 = fixTwentyTwo(tmp16_1 + tmp16_3)
		_resultAge['16_2'] = tmp16_2

		const tmp16_0 = fixTwentyTwo(tmp15_9 + tmp16_1)
		_resultAge['16_0'] = tmp16_0

		const tmp15_10 = fixTwentyTwo(tmp15_9 + tmp16_0)
		_resultAge['15_10'] = tmp15_10

		const tmp15_11 = fixTwentyTwo(tmp15_10 + tmp16_0)
		_resultAge['15_11'] = tmp15_11

		const tmp16_9 = fixTwentyTwo(tmp16_3 + tmp17_6)
		_resultAge['16_9'] = tmp16_9

		const tmp16_6 = fixTwentyTwo(tmp16_3 + tmp16_9)
		_resultAge['16_6'] = tmp16_6

		const tmp16_4 = fixTwentyTwo(tmp16_3 + tmp16_6)
		_resultAge['16_4'] = tmp16_4

		const tmp16_5 = fixTwentyTwo(tmp16_4 + tmp16_6)
		_resultAge['16_5'] = tmp16_5

		const tmp16_7 = fixTwentyTwo(tmp16_6 + tmp16_9)
		_resultAge['16_7'] = tmp16_7

		const tmp16_8 = fixTwentyTwo(tmp16_7 + tmp16_9)
		_resultAge['16_8'] = tmp16_8

		const tmp17_2 = fixTwentyTwo(tmp16_9 + tmp17_6)
		_resultAge['17_2'] = tmp17_2

		const tmp17_0 = fixTwentyTwo(tmp16_9 + tmp17_2)
		_resultAge['17_0'] = tmp17_0

		const tmp16_10 = fixTwentyTwo(tmp16_9 + tmp17_0)
		_resultAge['16_10'] = tmp16_10

		const tmp16_11 = fixTwentyTwo(tmp16_10 + tmp17_0)
		_resultAge['16_11'] = tmp16_11

		const tmp17_4 = fixTwentyTwo(tmp17_2 + tmp17_6)
		_resultAge['17_4'] = tmp17_4

		const tmp17_3 = fixTwentyTwo(tmp17_2 + tmp17_4)
		_resultAge['17_3'] = tmp17_3

		const tmp17_5 = fixTwentyTwo(tmp17_4 + tmp17_6)
		_resultAge['17_5'] = tmp17_5

		const tmp18_8 = fixTwentyTwo(tmp17_6 + tmp20_0)
		_resultAge['18_8'] = tmp18_8

		const tmp18_2 = fixTwentyTwo(tmp17_6 + tmp18_8)
		_resultAge['18_2'] = tmp18_2

		const tmp17_9 = fixTwentyTwo(tmp17_6 + tmp18_2)
		_resultAge['17_9'] = tmp17_9

		const tmp17_7 = fixTwentyTwo(tmp17_6 + tmp17_9)
		_resultAge['17_7'] = tmp17_7

		const tmp17_8 = fixTwentyTwo(tmp17_7 + tmp17_9)
		_resultAge['17_8'] = tmp17_8

		const tmp18_0 = fixTwentyTwo(tmp17_9 + tmp18_2)
		_resultAge['18_0'] = tmp18_0

		const tmp17_10 = fixTwentyTwo(tmp17_9 + tmp18_0)
		_resultAge['17_10'] = tmp17_10

		const tmp17_11 = fixTwentyTwo(tmp17_10 + tmp18_0)
		_resultAge['17_11'] = tmp17_11

		const tmp18_1 = fixTwentyTwo(tmp18_0 + tmp18_2)
		_resultAge['18_1'] = tmp18_1

		const tmp18_5 = fixTwentyTwo(tmp18_2 + tmp18_8)
		_resultAge['18_5'] = tmp18_5

		const tmp18_3 = fixTwentyTwo(tmp18_2 + tmp18_5)
		_resultAge['18_3'] = tmp18_3

		const tmp18_4 = fixTwentyTwo(tmp18_3 + tmp18_5)
		_resultAge['18_4'] = tmp18_4

		const tmp18_6 = fixTwentyTwo(tmp18_5 + tmp18_8)
		_resultAge['18_6'] = tmp18_6

		const tmp18_7 = fixTwentyTwo(tmp18_6 + tmp18_8)
		_resultAge['18_7'] = tmp18_7

		const tmp19_4 = fixTwentyTwo(tmp18_8 + tmp20_0)
		_resultAge['19_4'] = tmp19_4

		const tmp19_1 = fixTwentyTwo(tmp18_8 + tmp19_4)
		_resultAge['19_1'] = tmp19_1

		const tmp18_9 = fixTwentyTwo(tmp18_8 + tmp19_1)
		_resultAge['18_9'] = tmp18_9

		const tmp19_0 = fixTwentyTwo(tmp18_9 + tmp19_1)
		_resultAge['19_0'] = tmp19_0

		const tmp18_10 = fixTwentyTwo(tmp18_9 + tmp19_0)
		_resultAge['18_10'] = tmp18_10

		const tmp18_11 = fixTwentyTwo(tmp18_10 + tmp19_0)
		_resultAge['18_11'] = tmp18_11

		const tmp19_2 = fixTwentyTwo(tmp19_1 + tmp19_4)
		_resultAge['19_2'] = tmp19_2

		const tmp19_3 = fixTwentyTwo(tmp19_2 + tmp19_4)
		_resultAge['19_3'] = tmp19_3

		const tmp19_7 = fixTwentyTwo(tmp19_4 + tmp20_0)
		_resultAge['19_7'] = tmp19_7

		const tmp19_5 = fixTwentyTwo(tmp19_4 + tmp19_7)
		_resultAge['19_5'] = tmp19_5

		const tmp19_6 = fixTwentyTwo(tmp19_5 + tmp19_7)
		_resultAge['19_6'] = tmp19_6

		const tmp19_9 = fixTwentyTwo(tmp19_7 + tmp20_0)
		_resultAge['19_9'] = tmp19_9

		const tmp19_8 = fixTwentyTwo(tmp19_7 + tmp19_9)
		_resultAge['19_8'] = tmp19_8

		const tmp19_10 = fixTwentyTwo(tmp19_9 + tmp20_0)
		_resultAge['19_10'] = tmp19_10

		const tmp19_11 = fixTwentyTwo(tmp19_10 + tmp20_0)
		_resultAge['19_11'] = tmp19_11
		const tmp22_6 = fixTwentyTwo(tmp20_0 + tmp25_0)
		_resultAge['22_6'] = tmp22_6

		const tmp21_3 = fixTwentyTwo(tmp20_0 + tmp22_6)
		_resultAge['21_3'] = tmp21_3

		const tmp20_6 = fixTwentyTwo(tmp20_0 + tmp21_3)
		_resultAge['20_6'] = tmp20_6

		const tmp20_3 = fixTwentyTwo(tmp20_0 + tmp20_6)
		_resultAge['20_3'] = tmp20_3

		const tmp20_1 = fixTwentyTwo(tmp20_0 + tmp20_3)
		_resultAge['20_1'] = tmp20_1

		const tmp20_2 = fixTwentyTwo(tmp20_1 + tmp20_3)
		_resultAge['20_2'] = tmp20_2

		const tmp20_4 = fixTwentyTwo(tmp20_3 + tmp20_6)
		_resultAge['20_4'] = tmp20_4

		const tmp20_5 = fixTwentyTwo(tmp20_4 + tmp20_6)
		_resultAge['20_5'] = tmp20_5

		const tmp20_9 = fixTwentyTwo(tmp20_6 + tmp21_3)
		_resultAge['20_9'] = tmp20_9

		const tmp20_7 = fixTwentyTwo(tmp20_6 + tmp20_9)
		_resultAge['20_7'] = tmp20_7

		const tmp20_8 = fixTwentyTwo(tmp20_7 + tmp20_9)
		_resultAge['20_8'] = tmp20_8

		const tmp21_1 = fixTwentyTwo(tmp20_9 + tmp21_3)
		_resultAge['21_1'] = tmp21_1

		const tmp21_2 = fixTwentyTwo(tmp21_1 + tmp21_3)
		_resultAge['21_2'] = tmp21_2

		const tmp21_0 = fixTwentyTwo(tmp20_9 + tmp21_1)
		_resultAge['21_0'] = tmp21_0

		const tmp20_10 = fixTwentyTwo(tmp20_9 + tmp21_0)
		_resultAge['20_10'] = tmp20_10

		const tmp20_11 = fixTwentyTwo(tmp20_10 + tmp21_0)
		_resultAge['20_11'] = tmp20_11

		const tmp21_9 = fixTwentyTwo(tmp21_3 + tmp22_6)
		_resultAge['21_9'] = tmp21_9

		const tmp21_6 = fixTwentyTwo(tmp21_3 + tmp21_9)
		_resultAge['21_6'] = tmp21_6

		const tmp21_4 = fixTwentyTwo(tmp21_3 + tmp21_6)
		_resultAge['21_4'] = tmp21_4

		const tmp21_5 = fixTwentyTwo(tmp21_4 + tmp21_6)
		_resultAge['21_5'] = tmp21_5

		const tmp21_7 = fixTwentyTwo(tmp21_6 + tmp21_9)
		_resultAge['21_7'] = tmp21_7

		const tmp21_8 = fixTwentyTwo(tmp21_7 + tmp21_9)
		_resultAge['21_8'] = tmp21_8

		const tmp22_2 = fixTwentyTwo(tmp21_9 + tmp22_6)
		_resultAge['22_2'] = tmp22_2

		const tmp22_0 = fixTwentyTwo(tmp21_9 + tmp22_2)
		_resultAge['22_0'] = tmp22_0

		const tmp21_10 = fixTwentyTwo(tmp21_9 + tmp22_0)
		_resultAge['21_10'] = tmp21_10

		const tmp21_11 = fixTwentyTwo(tmp21_10 + tmp22_0)
		_resultAge['21_11'] = tmp21_11

		const tmp22_4 = fixTwentyTwo(tmp22_2 + tmp22_6)
		_resultAge['22_4'] = tmp22_4

		const tmp22_3 = fixTwentyTwo(tmp22_2 + tmp22_4)
		_resultAge['22_3'] = tmp22_3

		const tmp22_5 = fixTwentyTwo(tmp22_4 + tmp22_6)
		_resultAge['22_5'] = tmp22_5

		const tmp23_8 = fixTwentyTwo(tmp22_6 + tmp25_0)
		_resultAge['23_8'] = tmp23_8

		const tmp23_2 = fixTwentyTwo(tmp22_6 + tmp23_8)
		_resultAge['23_2'] = tmp23_2

		const tmp22_9 = fixTwentyTwo(tmp22_6 + tmp23_2)
		_resultAge['22_9'] = tmp22_9

		const tmp22_7 = fixTwentyTwo(tmp22_6 + tmp22_9)
		_resultAge['22_7'] = tmp22_7

		const tmp22_8 = fixTwentyTwo(tmp22_7 + tmp22_9)
		_resultAge['22_8'] = tmp22_8

		const tmp23_0 = fixTwentyTwo(tmp22_9 + tmp23_2)
		_resultAge['23_0'] = tmp23_0

		const tmp22_10 = fixTwentyTwo(tmp22_9 + tmp23_0)
		_resultAge['22_10'] = tmp22_10

		const tmp22_11 = fixTwentyTwo(tmp22_10 + tmp23_0)
		_resultAge['22_11'] = tmp22_11

		const tmp23_1 = fixTwentyTwo(tmp23_0 + tmp23_2)
		_resultAge['23_1'] = tmp23_1

		const tmp23_5 = fixTwentyTwo(tmp23_2 + tmp23_8)
		_resultAge['23_5'] = tmp23_5

		const tmp23_3 = fixTwentyTwo(tmp23_2 + tmp23_5)
		_resultAge['23_3'] = tmp23_3

		const tmp23_4 = fixTwentyTwo(tmp23_3 + tmp23_5)
		_resultAge['23_4'] = tmp23_4

		const tmp23_6 = fixTwentyTwo(tmp23_5 + tmp23_8)
		_resultAge['23_6'] = tmp23_6

		const tmp23_7 = fixTwentyTwo(tmp23_6 + tmp23_8)
		_resultAge['23_7'] = tmp23_7

		const tmp24_4 = fixTwentyTwo(tmp23_8 + tmp25_0)
		_resultAge['24_4'] = tmp24_4

		const tmp24_1 = fixTwentyTwo(tmp23_8 + tmp24_4)
		_resultAge['24_1'] = tmp24_1

		const tmp23_9 = fixTwentyTwo(tmp23_8 + tmp24_1)
		_resultAge['23_9'] = tmp23_9

		const tmp24_0 = fixTwentyTwo(tmp23_9 + tmp24_1)
		_resultAge['24_0'] = tmp24_0

		const tmp23_10 = fixTwentyTwo(tmp23_9 + tmp24_0)
		_resultAge['23_10'] = tmp23_10

		const tmp23_11 = fixTwentyTwo(tmp23_10 + tmp24_0)
		_resultAge['23_11'] = tmp23_11

		const tmp24_2 = fixTwentyTwo(tmp24_1 + tmp24_4)
		_resultAge['24_2'] = tmp24_2

		const tmp24_3 = fixTwentyTwo(tmp24_2 + tmp24_4)
		_resultAge['24_3'] = tmp24_3

		const tmp24_7 = fixTwentyTwo(tmp24_4 + tmp25_0)
		_resultAge['24_7'] = tmp24_7

		const tmp24_5 = fixTwentyTwo(tmp24_4 + tmp24_7)
		_resultAge['24_5'] = tmp24_5

		const tmp24_6 = fixTwentyTwo(tmp24_5 + tmp24_7)
		_resultAge['24_6'] = tmp24_6

		const tmp24_9 = fixTwentyTwo(tmp24_7 + tmp25_0)
		_resultAge['24_9'] = tmp24_9

		const tmp24_8 = fixTwentyTwo(tmp24_7 + tmp24_9)
		_resultAge['24_8'] = tmp24_8

		const tmp24_10 = fixTwentyTwo(tmp24_9 + tmp25_0)
		_resultAge['24_10'] = tmp24_10

		const tmp24_11 = fixTwentyTwo(tmp24_10 + tmp25_0)
		_resultAge['24_11'] = tmp24_11
		const tmp27_6 = fixTwentyTwo(tmp25_0 + tmp30_0)
		_resultAge['27_6'] = tmp27_6

		const tmp26_3 = fixTwentyTwo(tmp25_0 + tmp27_6)
		_resultAge['26_3'] = tmp26_3

		const tmp25_6 = fixTwentyTwo(tmp25_0 + tmp26_3)
		_resultAge['25_6'] = tmp25_6

		const tmp25_3 = fixTwentyTwo(tmp25_0 + tmp25_6)
		_resultAge['25_3'] = tmp25_3

		const tmp25_1 = fixTwentyTwo(tmp25_0 + tmp25_3)
		_resultAge['25_1'] = tmp25_1

		const tmp25_2 = fixTwentyTwo(tmp25_1 + tmp25_3)
		_resultAge['25_2'] = tmp25_2

		const tmp25_4 = fixTwentyTwo(tmp25_3 + tmp25_6)
		_resultAge['25_4'] = tmp25_4

		const tmp25_5 = fixTwentyTwo(tmp25_4 + tmp25_6)
		_resultAge['25_5'] = tmp25_5

		const tmp25_9 = fixTwentyTwo(tmp25_6 + tmp26_3)
		_resultAge['25_9'] = tmp25_9

		const tmp25_7 = fixTwentyTwo(tmp25_6 + tmp25_9)
		_resultAge['25_7'] = tmp25_7

		const tmp25_8 = fixTwentyTwo(tmp25_7 + tmp25_9)
		_resultAge['25_8'] = tmp25_8

		const tmp26_1 = fixTwentyTwo(tmp25_9 + tmp26_3)
		_resultAge['26_1'] = tmp26_1

		const tmp26_2 = fixTwentyTwo(tmp26_1 + tmp26_3)
		_resultAge['26_2'] = tmp26_2

		const tmp26_0 = fixTwentyTwo(tmp25_9 + tmp26_1)
		_resultAge['26_0'] = tmp26_0

		const tmp25_10 = fixTwentyTwo(tmp25_9 + tmp26_0)
		_resultAge['25_10'] = tmp25_10

		const tmp25_11 = fixTwentyTwo(tmp25_10 + tmp26_0)
		_resultAge['25_11'] = tmp25_11

		const tmp26_9 = fixTwentyTwo(tmp26_3 + tmp27_6)
		_resultAge['26_9'] = tmp26_9

		const tmp26_6 = fixTwentyTwo(tmp26_3 + tmp26_9)
		_resultAge['26_6'] = tmp26_6

		const tmp26_4 = fixTwentyTwo(tmp26_3 + tmp26_6)
		_resultAge['26_4'] = tmp26_4

		const tmp26_5 = fixTwentyTwo(tmp26_4 + tmp26_6)
		_resultAge['26_5'] = tmp26_5

		const tmp26_7 = fixTwentyTwo(tmp26_6 + tmp26_9)
		_resultAge['26_7'] = tmp26_7

		const tmp26_8 = fixTwentyTwo(tmp26_7 + tmp26_9)
		_resultAge['26_8'] = tmp26_8

		const tmp27_2 = fixTwentyTwo(tmp26_9 + tmp27_6)
		_resultAge['27_2'] = tmp27_2

		const tmp27_0 = fixTwentyTwo(tmp26_9 + tmp27_2)
		_resultAge['27_0'] = tmp27_0

		const tmp26_10 = fixTwentyTwo(tmp26_9 + tmp27_0)
		_resultAge['26_10'] = tmp26_10

		const tmp26_11 = fixTwentyTwo(tmp26_10 + tmp27_0)
		_resultAge['26_11'] = tmp26_11

		const tmp27_4 = fixTwentyTwo(tmp27_2 + tmp27_6)
		_resultAge['27_4'] = tmp27_4

		const tmp27_3 = fixTwentyTwo(tmp27_2 + tmp27_4)
		_resultAge['27_3'] = tmp27_3

		const tmp27_5 = fixTwentyTwo(tmp27_4 + tmp27_6)
		_resultAge['27_5'] = tmp27_5

		const tmp28_8 = fixTwentyTwo(tmp27_6 + tmp30_0)
		_resultAge['28_8'] = tmp28_8

		const tmp28_2 = fixTwentyTwo(tmp27_6 + tmp28_8)
		_resultAge['28_2'] = tmp28_2

		const tmp27_9 = fixTwentyTwo(tmp27_6 + tmp28_2)
		_resultAge['27_9'] = tmp27_9

		const tmp27_7 = fixTwentyTwo(tmp27_6 + tmp27_9)
		_resultAge['27_7'] = tmp27_7

		const tmp27_8 = fixTwentyTwo(tmp27_7 + tmp27_9)
		_resultAge['27_8'] = tmp27_8

		const tmp28_0 = fixTwentyTwo(tmp27_9 + tmp28_2)
		_resultAge['28_0'] = tmp28_0

		const tmp27_10 = fixTwentyTwo(tmp27_9 + tmp28_0)
		_resultAge['27_10'] = tmp27_10

		const tmp27_11 = fixTwentyTwo(tmp27_10 + tmp28_0)
		_resultAge['27_11'] = tmp27_11

		const tmp28_1 = fixTwentyTwo(tmp28_0 + tmp28_2)
		_resultAge['28_1'] = tmp28_1

		const tmp28_5 = fixTwentyTwo(tmp28_2 + tmp28_8)
		_resultAge['28_5'] = tmp28_5

		const tmp28_3 = fixTwentyTwo(tmp28_2 + tmp28_5)
		_resultAge['28_3'] = tmp28_3

		const tmp28_4 = fixTwentyTwo(tmp28_3 + tmp28_5)
		_resultAge['28_4'] = tmp28_4

		const tmp28_6 = fixTwentyTwo(tmp28_5 + tmp28_8)
		_resultAge['28_6'] = tmp28_6

		const tmp28_7 = fixTwentyTwo(tmp28_6 + tmp28_8)
		_resultAge['28_7'] = tmp28_7

		const tmp29_4 = fixTwentyTwo(tmp28_8 + tmp30_0)
		_resultAge['29_4'] = tmp29_4

		const tmp29_1 = fixTwentyTwo(tmp28_8 + tmp29_4)
		_resultAge['29_1'] = tmp29_1

		const tmp28_9 = fixTwentyTwo(tmp28_8 + tmp29_1)
		_resultAge['28_9'] = tmp28_9

		const tmp29_0 = fixTwentyTwo(tmp28_9 + tmp29_1)
		_resultAge['29_0'] = tmp29_0

		const tmp28_10 = fixTwentyTwo(tmp28_9 + tmp29_0)
		_resultAge['28_10'] = tmp28_10

		const tmp28_11 = fixTwentyTwo(tmp28_10 + tmp29_0)
		_resultAge['28_11'] = tmp28_11

		const tmp29_2 = fixTwentyTwo(tmp29_1 + tmp29_4)
		_resultAge['29_2'] = tmp29_2

		const tmp29_3 = fixTwentyTwo(tmp29_2 + tmp29_4)
		_resultAge['29_3'] = tmp29_3

		const tmp29_7 = fixTwentyTwo(tmp29_4 + tmp30_0)
		_resultAge['29_7'] = tmp29_7

		const tmp29_5 = fixTwentyTwo(tmp29_4 + tmp29_7)
		_resultAge['29_5'] = tmp29_5

		const tmp29_6 = fixTwentyTwo(tmp29_5 + tmp29_7)
		_resultAge['29_6'] = tmp29_6

		const tmp29_9 = fixTwentyTwo(tmp29_7 + tmp30_0)
		_resultAge['29_9'] = tmp29_9

		const tmp29_8 = fixTwentyTwo(tmp29_7 + tmp29_9)
		_resultAge['29_8'] = tmp29_8

		const tmp29_10 = fixTwentyTwo(tmp29_9 + tmp30_0)
		_resultAge['29_10'] = tmp29_10

		const tmp29_11 = fixTwentyTwo(tmp29_10 + tmp30_0)
		_resultAge['29_11'] = tmp29_11
		const tmp32_6 = fixTwentyTwo(tmp30_0 + tmp35_0)
		_resultAge['32_6'] = tmp32_6

		const tmp31_3 = fixTwentyTwo(tmp30_0 + tmp32_6)
		_resultAge['31_3'] = tmp31_3

		const tmp30_6 = fixTwentyTwo(tmp30_0 + tmp31_3)
		_resultAge['30_6'] = tmp30_6

		const tmp30_3 = fixTwentyTwo(tmp30_0 + tmp30_6)
		_resultAge['30_3'] = tmp30_3

		const tmp30_1 = fixTwentyTwo(tmp30_0 + tmp30_3)
		_resultAge['30_1'] = tmp30_1

		const tmp30_2 = fixTwentyTwo(tmp30_1 + tmp30_3)
		_resultAge['30_2'] = tmp30_2

		const tmp30_4 = fixTwentyTwo(tmp30_3 + tmp30_6)
		_resultAge['30_4'] = tmp30_4

		const tmp30_5 = fixTwentyTwo(tmp30_4 + tmp30_6)
		_resultAge['30_5'] = tmp30_5

		const tmp30_9 = fixTwentyTwo(tmp30_6 + tmp31_3)
		_resultAge['30_9'] = tmp30_9

		const tmp30_7 = fixTwentyTwo(tmp30_6 + tmp30_9)
		_resultAge['30_7'] = tmp30_7

		const tmp30_8 = fixTwentyTwo(tmp30_7 + tmp30_9)
		_resultAge['30_8'] = tmp30_8

		const tmp31_1 = fixTwentyTwo(tmp30_9 + tmp31_3)
		_resultAge['31_1'] = tmp31_1

		const tmp31_2 = fixTwentyTwo(tmp31_1 + tmp31_3)
		_resultAge['31_2'] = tmp31_2

		const tmp31_0 = fixTwentyTwo(tmp30_9 + tmp31_1)
		_resultAge['31_0'] = tmp31_0

		const tmp30_10 = fixTwentyTwo(tmp30_9 + tmp31_0)
		_resultAge['30_10'] = tmp30_10

		const tmp30_11 = fixTwentyTwo(tmp30_10 + tmp31_0)
		_resultAge['30_11'] = tmp30_11

		const tmp31_9 = fixTwentyTwo(tmp31_3 + tmp32_6)
		_resultAge['31_9'] = tmp31_9

		const tmp31_6 = fixTwentyTwo(tmp31_3 + tmp31_9)
		_resultAge['31_6'] = tmp31_6

		const tmp31_4 = fixTwentyTwo(tmp31_3 + tmp31_6)
		_resultAge['31_4'] = tmp31_4

		const tmp31_5 = fixTwentyTwo(tmp31_4 + tmp31_6)
		_resultAge['31_5'] = tmp31_5

		const tmp31_7 = fixTwentyTwo(tmp31_6 + tmp31_9)
		_resultAge['31_7'] = tmp31_7

		const tmp31_8 = fixTwentyTwo(tmp31_7 + tmp31_9)
		_resultAge['31_8'] = tmp31_8

		const tmp32_2 = fixTwentyTwo(tmp31_9 + tmp32_6)
		_resultAge['32_2'] = tmp32_2

		const tmp32_0 = fixTwentyTwo(tmp31_9 + tmp32_2)
		_resultAge['32_0'] = tmp32_0

		const tmp31_10 = fixTwentyTwo(tmp31_9 + tmp32_0)
		_resultAge['31_10'] = tmp31_10

		const tmp31_11 = fixTwentyTwo(tmp31_10 + tmp32_0)
		_resultAge['31_11'] = tmp31_11

		const tmp32_4 = fixTwentyTwo(tmp32_2 + tmp32_6)
		_resultAge['32_4'] = tmp32_4

		const tmp32_3 = fixTwentyTwo(tmp32_2 + tmp32_4)
		_resultAge['32_3'] = tmp32_3

		const tmp32_5 = fixTwentyTwo(tmp32_4 + tmp32_6)
		_resultAge['32_5'] = tmp32_5

		const tmp33_8 = fixTwentyTwo(tmp32_6 + tmp35_0)
		_resultAge['33_8'] = tmp33_8

		const tmp33_2 = fixTwentyTwo(tmp32_6 + tmp33_8)
		_resultAge['33_2'] = tmp33_2

		const tmp32_9 = fixTwentyTwo(tmp32_6 + tmp33_2)
		_resultAge['32_9'] = tmp32_9

		const tmp32_7 = fixTwentyTwo(tmp32_6 + tmp32_9)
		_resultAge['32_7'] = tmp32_7

		const tmp32_8 = fixTwentyTwo(tmp32_7 + tmp32_9)
		_resultAge['32_8'] = tmp32_8

		const tmp33_0 = fixTwentyTwo(tmp32_9 + tmp33_2)
		_resultAge['33_0'] = tmp33_0

		const tmp32_10 = fixTwentyTwo(tmp32_9 + tmp33_0)
		_resultAge['32_10'] = tmp32_10

		const tmp32_11 = fixTwentyTwo(tmp32_10 + tmp33_0)
		_resultAge['32_11'] = tmp32_11

		const tmp33_1 = fixTwentyTwo(tmp33_0 + tmp33_2)
		_resultAge['33_1'] = tmp33_1

		const tmp33_5 = fixTwentyTwo(tmp33_2 + tmp33_8)
		_resultAge['33_5'] = tmp33_5

		const tmp33_3 = fixTwentyTwo(tmp33_2 + tmp33_5)
		_resultAge['33_3'] = tmp33_3

		const tmp33_4 = fixTwentyTwo(tmp33_3 + tmp33_5)
		_resultAge['33_4'] = tmp33_4

		const tmp33_6 = fixTwentyTwo(tmp33_5 + tmp33_8)
		_resultAge['33_6'] = tmp33_6

		const tmp33_7 = fixTwentyTwo(tmp33_6 + tmp33_8)
		_resultAge['33_7'] = tmp33_7

		const tmp34_4 = fixTwentyTwo(tmp33_8 + tmp35_0)
		_resultAge['34_4'] = tmp34_4

		const tmp34_1 = fixTwentyTwo(tmp33_8 + tmp34_4)
		_resultAge['34_1'] = tmp34_1

		const tmp33_9 = fixTwentyTwo(tmp33_8 + tmp34_1)
		_resultAge['33_9'] = tmp33_9

		const tmp34_0 = fixTwentyTwo(tmp33_9 + tmp34_1)
		_resultAge['34_0'] = tmp34_0

		const tmp33_10 = fixTwentyTwo(tmp33_9 + tmp34_0)
		_resultAge['33_10'] = tmp33_10

		const tmp33_11 = fixTwentyTwo(tmp33_10 + tmp34_0)
		_resultAge['33_11'] = tmp33_11

		const tmp34_2 = fixTwentyTwo(tmp34_1 + tmp34_4)
		_resultAge['34_2'] = tmp34_2

		const tmp34_3 = fixTwentyTwo(tmp34_2 + tmp34_4)
		_resultAge['34_3'] = tmp34_3

		const tmp34_7 = fixTwentyTwo(tmp34_4 + tmp35_0)
		_resultAge['34_7'] = tmp34_7

		const tmp34_5 = fixTwentyTwo(tmp34_4 + tmp34_7)
		_resultAge['34_5'] = tmp34_5

		const tmp34_6 = fixTwentyTwo(tmp34_5 + tmp34_7)
		_resultAge['34_6'] = tmp34_6

		const tmp34_9 = fixTwentyTwo(tmp34_7 + tmp35_0)
		_resultAge['34_9'] = tmp34_9

		const tmp34_8 = fixTwentyTwo(tmp34_7 + tmp34_9)
		_resultAge['34_8'] = tmp34_8

		const tmp34_10 = fixTwentyTwo(tmp34_9 + tmp35_0)
		_resultAge['34_10'] = tmp34_10

		const tmp34_11 = fixTwentyTwo(tmp34_10 + tmp35_0)
		_resultAge['34_11'] = tmp34_11
		const tmp37_6 = fixTwentyTwo(tmp35_0 + tmp40_0)
		_resultAge['37_6'] = tmp37_6

		const tmp36_3 = fixTwentyTwo(tmp35_0 + tmp37_6)
		_resultAge['36_3'] = tmp36_3

		const tmp35_6 = fixTwentyTwo(tmp35_0 + tmp36_3)
		_resultAge['35_6'] = tmp35_6

		const tmp35_3 = fixTwentyTwo(tmp35_0 + tmp35_6)
		_resultAge['35_3'] = tmp35_3

		const tmp35_1 = fixTwentyTwo(tmp35_0 + tmp35_3)
		_resultAge['35_1'] = tmp35_1

		const tmp35_2 = fixTwentyTwo(tmp35_1 + tmp35_3)
		_resultAge['35_2'] = tmp35_2

		const tmp35_4 = fixTwentyTwo(tmp35_3 + tmp35_6)
		_resultAge['35_4'] = tmp35_4

		const tmp35_5 = fixTwentyTwo(tmp35_4 + tmp35_6)
		_resultAge['35_5'] = tmp35_5

		const tmp35_9 = fixTwentyTwo(tmp35_6 + tmp36_3)
		_resultAge['35_9'] = tmp35_9

		const tmp35_7 = fixTwentyTwo(tmp35_6 + tmp35_9)
		_resultAge['35_7'] = tmp35_7

		const tmp35_8 = fixTwentyTwo(tmp35_7 + tmp35_9)
		_resultAge['35_8'] = tmp35_8

		const tmp36_1 = fixTwentyTwo(tmp35_9 + tmp36_3)
		_resultAge['36_1'] = tmp36_1

		const tmp36_2 = fixTwentyTwo(tmp36_1 + tmp36_3)
		_resultAge['36_2'] = tmp36_2

		const tmp36_0 = fixTwentyTwo(tmp35_9 + tmp36_1)
		_resultAge['36_0'] = tmp36_0

		const tmp35_10 = fixTwentyTwo(tmp35_9 + tmp36_0)
		_resultAge['35_10'] = tmp35_10

		const tmp35_11 = fixTwentyTwo(tmp35_10 + tmp36_0)
		_resultAge['35_11'] = tmp35_11

		const tmp36_9 = fixTwentyTwo(tmp36_3 + tmp37_6)
		_resultAge['36_9'] = tmp36_9

		const tmp36_6 = fixTwentyTwo(tmp36_3 + tmp36_9)
		_resultAge['36_6'] = tmp36_6

		const tmp36_4 = fixTwentyTwo(tmp36_3 + tmp36_6)
		_resultAge['36_4'] = tmp36_4

		const tmp36_5 = fixTwentyTwo(tmp36_4 + tmp36_6)
		_resultAge['36_5'] = tmp36_5

		const tmp36_7 = fixTwentyTwo(tmp36_6 + tmp36_9)
		_resultAge['36_7'] = tmp36_7

		const tmp36_8 = fixTwentyTwo(tmp36_7 + tmp36_9)
		_resultAge['36_8'] = tmp36_8

		const tmp37_2 = fixTwentyTwo(tmp36_9 + tmp37_6)
		_resultAge['37_2'] = tmp37_2

		const tmp37_0 = fixTwentyTwo(tmp36_9 + tmp37_2)
		_resultAge['37_0'] = tmp37_0

		const tmp36_10 = fixTwentyTwo(tmp36_9 + tmp37_0)
		_resultAge['36_10'] = tmp36_10

		const tmp36_11 = fixTwentyTwo(tmp36_10 + tmp37_0)
		_resultAge['36_11'] = tmp36_11

		const tmp37_4 = fixTwentyTwo(tmp37_2 + tmp37_6)
		_resultAge['37_4'] = tmp37_4

		const tmp37_3 = fixTwentyTwo(tmp37_2 + tmp37_4)
		_resultAge['37_3'] = tmp37_3

		const tmp37_5 = fixTwentyTwo(tmp37_4 + tmp37_6)
		_resultAge['37_5'] = tmp37_5

		const tmp38_8 = fixTwentyTwo(tmp37_6 + tmp40_0)
		_resultAge['38_8'] = tmp38_8

		const tmp38_2 = fixTwentyTwo(tmp37_6 + tmp38_8)
		_resultAge['38_2'] = tmp38_2

		const tmp37_9 = fixTwentyTwo(tmp37_6 + tmp38_2)
		_resultAge['37_9'] = tmp37_9

		const tmp37_7 = fixTwentyTwo(tmp37_6 + tmp37_9)
		_resultAge['37_7'] = tmp37_7

		const tmp37_8 = fixTwentyTwo(tmp37_7 + tmp37_9)
		_resultAge['37_8'] = tmp37_8

		const tmp38_0 = fixTwentyTwo(tmp37_9 + tmp38_2)
		_resultAge['38_0'] = tmp38_0

		const tmp37_10 = fixTwentyTwo(tmp37_9 + tmp38_0)
		_resultAge['37_10'] = tmp37_10

		const tmp37_11 = fixTwentyTwo(tmp37_10 + tmp38_0)
		_resultAge['37_11'] = tmp37_11

		const tmp38_1 = fixTwentyTwo(tmp38_0 + tmp38_2)
		_resultAge['38_1'] = tmp38_1

		const tmp38_5 = fixTwentyTwo(tmp38_2 + tmp38_8)
		_resultAge['38_5'] = tmp38_5

		const tmp38_3 = fixTwentyTwo(tmp38_2 + tmp38_5)
		_resultAge['38_3'] = tmp38_3

		const tmp38_4 = fixTwentyTwo(tmp38_3 + tmp38_5)
		_resultAge['38_4'] = tmp38_4

		const tmp38_6 = fixTwentyTwo(tmp38_5 + tmp38_8)
		_resultAge['38_6'] = tmp38_6

		const tmp38_7 = fixTwentyTwo(tmp38_6 + tmp38_8)
		_resultAge['38_7'] = tmp38_7

		const tmp39_4 = fixTwentyTwo(tmp38_8 + tmp40_0)
		_resultAge['39_4'] = tmp39_4

		const tmp39_1 = fixTwentyTwo(tmp38_8 + tmp39_4)
		_resultAge['39_1'] = tmp39_1

		const tmp38_9 = fixTwentyTwo(tmp38_8 + tmp39_1)
		_resultAge['38_9'] = tmp38_9

		const tmp39_0 = fixTwentyTwo(tmp38_9 + tmp39_1)
		_resultAge['39_0'] = tmp39_0

		const tmp38_10 = fixTwentyTwo(tmp38_9 + tmp39_0)
		_resultAge['38_10'] = tmp38_10

		const tmp38_11 = fixTwentyTwo(tmp38_10 + tmp39_0)
		_resultAge['38_11'] = tmp38_11

		const tmp39_2 = fixTwentyTwo(tmp39_1 + tmp39_4)
		_resultAge['39_2'] = tmp39_2

		const tmp39_3 = fixTwentyTwo(tmp39_2 + tmp39_4)
		_resultAge['39_3'] = tmp39_3

		const tmp39_7 = fixTwentyTwo(tmp39_4 + tmp40_0)
		_resultAge['39_7'] = tmp39_7

		const tmp39_5 = fixTwentyTwo(tmp39_4 + tmp39_7)
		_resultAge['39_5'] = tmp39_5

		const tmp39_6 = fixTwentyTwo(tmp39_5 + tmp39_7)
		_resultAge['39_6'] = tmp39_6

		const tmp39_9 = fixTwentyTwo(tmp39_7 + tmp40_0)
		_resultAge['39_9'] = tmp39_9

		const tmp39_8 = fixTwentyTwo(tmp39_7 + tmp39_9)
		_resultAge['39_8'] = tmp39_8

		const tmp39_10 = fixTwentyTwo(tmp39_9 + tmp40_0)
		_resultAge['39_10'] = tmp39_10

		const tmp39_11 = fixTwentyTwo(tmp39_10 + tmp40_0)
		_resultAge['39_11'] = tmp39_11
		const tmp42_6 = fixTwentyTwo(tmp40_0 + tmp45_0)
		_resultAge['42_6'] = tmp42_6

		const tmp41_3 = fixTwentyTwo(tmp40_0 + tmp42_6)
		_resultAge['41_3'] = tmp41_3

		const tmp40_6 = fixTwentyTwo(tmp40_0 + tmp41_3)
		_resultAge['40_6'] = tmp40_6

		const tmp40_3 = fixTwentyTwo(tmp40_0 + tmp40_6)
		_resultAge['40_3'] = tmp40_3

		const tmp40_1 = fixTwentyTwo(tmp40_0 + tmp40_3)
		_resultAge['40_1'] = tmp40_1

		const tmp40_2 = fixTwentyTwo(tmp40_1 + tmp40_3)
		_resultAge['40_2'] = tmp40_2

		const tmp40_4 = fixTwentyTwo(tmp40_3 + tmp40_6)
		_resultAge['40_4'] = tmp40_4

		const tmp40_5 = fixTwentyTwo(tmp40_4 + tmp40_6)
		_resultAge['40_5'] = tmp40_5

		const tmp40_9 = fixTwentyTwo(tmp40_6 + tmp41_3)
		_resultAge['40_9'] = tmp40_9

		const tmp40_7 = fixTwentyTwo(tmp40_6 + tmp40_9)
		_resultAge['40_7'] = tmp40_7

		const tmp40_8 = fixTwentyTwo(tmp40_7 + tmp40_9)
		_resultAge['40_8'] = tmp40_8

		const tmp41_1 = fixTwentyTwo(tmp40_9 + tmp41_3)
		_resultAge['41_1'] = tmp41_1

		const tmp41_2 = fixTwentyTwo(tmp41_1 + tmp41_3)
		_resultAge['41_2'] = tmp41_2

		const tmp41_0 = fixTwentyTwo(tmp40_9 + tmp41_1)
		_resultAge['41_0'] = tmp41_0

		const tmp40_10 = fixTwentyTwo(tmp40_9 + tmp41_0)
		_resultAge['40_10'] = tmp40_10

		const tmp40_11 = fixTwentyTwo(tmp40_10 + tmp41_0)
		_resultAge['40_11'] = tmp40_11

		const tmp41_9 = fixTwentyTwo(tmp41_3 + tmp42_6)
		_resultAge['41_9'] = tmp41_9

		const tmp41_6 = fixTwentyTwo(tmp41_3 + tmp41_9)
		_resultAge['41_6'] = tmp41_6

		const tmp41_4 = fixTwentyTwo(tmp41_3 + tmp41_6)
		_resultAge['41_4'] = tmp41_4

		const tmp41_5 = fixTwentyTwo(tmp41_4 + tmp41_6)
		_resultAge['41_5'] = tmp41_5

		const tmp41_7 = fixTwentyTwo(tmp41_6 + tmp41_9)
		_resultAge['41_7'] = tmp41_7

		const tmp41_8 = fixTwentyTwo(tmp41_7 + tmp41_9)
		_resultAge['41_8'] = tmp41_8

		const tmp42_2 = fixTwentyTwo(tmp41_9 + tmp42_6)
		_resultAge['42_2'] = tmp42_2

		const tmp42_0 = fixTwentyTwo(tmp41_9 + tmp42_2)
		_resultAge['42_0'] = tmp42_0

		const tmp41_10 = fixTwentyTwo(tmp41_9 + tmp42_0)
		_resultAge['41_10'] = tmp41_10

		const tmp41_11 = fixTwentyTwo(tmp41_10 + tmp42_0)
		_resultAge['41_11'] = tmp41_11

		const tmp42_4 = fixTwentyTwo(tmp42_2 + tmp42_6)
		_resultAge['42_4'] = tmp42_4

		const tmp42_3 = fixTwentyTwo(tmp42_2 + tmp42_4)
		_resultAge['42_3'] = tmp42_3

		const tmp42_5 = fixTwentyTwo(tmp42_4 + tmp42_6)
		_resultAge['42_5'] = tmp42_5

		const tmp43_8 = fixTwentyTwo(tmp42_6 + tmp45_0)
		_resultAge['43_8'] = tmp43_8

		const tmp43_2 = fixTwentyTwo(tmp42_6 + tmp43_8)
		_resultAge['43_2'] = tmp43_2

		const tmp42_9 = fixTwentyTwo(tmp42_6 + tmp43_2)
		_resultAge['42_9'] = tmp42_9

		const tmp42_7 = fixTwentyTwo(tmp42_6 + tmp42_9)
		_resultAge['42_7'] = tmp42_7

		const tmp42_8 = fixTwentyTwo(tmp42_7 + tmp42_9)
		_resultAge['42_8'] = tmp42_8

		const tmp43_0 = fixTwentyTwo(tmp42_9 + tmp43_2)
		_resultAge['43_0'] = tmp43_0

		const tmp42_10 = fixTwentyTwo(tmp42_9 + tmp43_0)
		_resultAge['42_10'] = tmp42_10

		const tmp42_11 = fixTwentyTwo(tmp42_10 + tmp43_0)
		_resultAge['42_11'] = tmp42_11

		const tmp43_1 = fixTwentyTwo(tmp43_0 + tmp43_2)
		_resultAge['43_1'] = tmp43_1

		const tmp43_5 = fixTwentyTwo(tmp43_2 + tmp43_8)
		_resultAge['43_5'] = tmp43_5

		const tmp43_3 = fixTwentyTwo(tmp43_2 + tmp43_5)
		_resultAge['43_3'] = tmp43_3

		const tmp43_4 = fixTwentyTwo(tmp43_3 + tmp43_5)
		_resultAge['43_4'] = tmp43_4

		const tmp43_6 = fixTwentyTwo(tmp43_5 + tmp43_8)
		_resultAge['43_6'] = tmp43_6

		const tmp43_7 = fixTwentyTwo(tmp43_6 + tmp43_8)
		_resultAge['43_7'] = tmp43_7

		const tmp44_4 = fixTwentyTwo(tmp43_8 + tmp45_0)
		_resultAge['44_4'] = tmp44_4

		const tmp44_1 = fixTwentyTwo(tmp43_8 + tmp44_4)
		_resultAge['44_1'] = tmp44_1

		const tmp43_9 = fixTwentyTwo(tmp43_8 + tmp44_1)
		_resultAge['43_9'] = tmp43_9

		const tmp44_0 = fixTwentyTwo(tmp43_9 + tmp44_1)
		_resultAge['44_0'] = tmp44_0

		const tmp43_10 = fixTwentyTwo(tmp43_9 + tmp44_0)
		_resultAge['43_10'] = tmp43_10

		const tmp43_11 = fixTwentyTwo(tmp43_10 + tmp44_0)
		_resultAge['43_11'] = tmp43_11

		const tmp44_2 = fixTwentyTwo(tmp44_1 + tmp44_4)
		_resultAge['44_2'] = tmp44_2

		const tmp44_3 = fixTwentyTwo(tmp44_2 + tmp44_4)
		_resultAge['44_3'] = tmp44_3

		const tmp44_7 = fixTwentyTwo(tmp44_4 + tmp45_0)
		_resultAge['44_7'] = tmp44_7

		const tmp44_5 = fixTwentyTwo(tmp44_4 + tmp44_7)
		_resultAge['44_5'] = tmp44_5

		const tmp44_6 = fixTwentyTwo(tmp44_5 + tmp44_7)
		_resultAge['44_6'] = tmp44_6

		const tmp44_9 = fixTwentyTwo(tmp44_7 + tmp45_0)
		_resultAge['44_9'] = tmp44_9

		const tmp44_8 = fixTwentyTwo(tmp44_7 + tmp44_9)
		_resultAge['44_8'] = tmp44_8

		const tmp44_10 = fixTwentyTwo(tmp44_9 + tmp45_0)
		_resultAge['44_10'] = tmp44_10

		const tmp44_11 = fixTwentyTwo(tmp44_10 + tmp45_0)
		_resultAge['44_11'] = tmp44_11
		const tmp47_6 = fixTwentyTwo(tmp45_0 + tmp50_0)
		_resultAge['47_6'] = tmp47_6

		const tmp46_3 = fixTwentyTwo(tmp45_0 + tmp47_6)
		_resultAge['46_3'] = tmp46_3

		const tmp45_6 = fixTwentyTwo(tmp45_0 + tmp46_3)
		_resultAge['45_6'] = tmp45_6

		const tmp45_3 = fixTwentyTwo(tmp45_0 + tmp45_6)
		_resultAge['45_3'] = tmp45_3

		const tmp45_1 = fixTwentyTwo(tmp45_0 + tmp45_3)
		_resultAge['45_1'] = tmp45_1

		const tmp45_2 = fixTwentyTwo(tmp45_1 + tmp45_3)
		_resultAge['45_2'] = tmp45_2

		const tmp45_4 = fixTwentyTwo(tmp45_3 + tmp45_6)
		_resultAge['45_4'] = tmp45_4

		const tmp45_5 = fixTwentyTwo(tmp45_4 + tmp45_6)
		_resultAge['45_5'] = tmp45_5

		const tmp45_9 = fixTwentyTwo(tmp45_6 + tmp46_3)
		_resultAge['45_9'] = tmp45_9

		const tmp45_7 = fixTwentyTwo(tmp45_6 + tmp45_9)
		_resultAge['45_7'] = tmp45_7

		const tmp45_8 = fixTwentyTwo(tmp45_7 + tmp45_9)
		_resultAge['45_8'] = tmp45_8

		const tmp46_1 = fixTwentyTwo(tmp45_9 + tmp46_3)
		_resultAge['46_1'] = tmp46_1

		const tmp46_2 = fixTwentyTwo(tmp46_1 + tmp46_3)
		_resultAge['46_2'] = tmp46_2

		const tmp46_0 = fixTwentyTwo(tmp45_9 + tmp46_1)
		_resultAge['46_0'] = tmp46_0

		const tmp45_10 = fixTwentyTwo(tmp45_9 + tmp46_0)
		_resultAge['45_10'] = tmp45_10

		const tmp45_11 = fixTwentyTwo(tmp45_10 + tmp46_0)
		_resultAge['45_11'] = tmp45_11

		const tmp46_9 = fixTwentyTwo(tmp46_3 + tmp47_6)
		_resultAge['46_9'] = tmp46_9

		const tmp46_6 = fixTwentyTwo(tmp46_3 + tmp46_9)
		_resultAge['46_6'] = tmp46_6

		const tmp46_4 = fixTwentyTwo(tmp46_3 + tmp46_6)
		_resultAge['46_4'] = tmp46_4

		const tmp46_5 = fixTwentyTwo(tmp46_4 + tmp46_6)
		_resultAge['46_5'] = tmp46_5

		const tmp46_7 = fixTwentyTwo(tmp46_6 + tmp46_9)
		_resultAge['46_7'] = tmp46_7

		const tmp46_8 = fixTwentyTwo(tmp46_7 + tmp46_9)
		_resultAge['46_8'] = tmp46_8

		const tmp47_2 = fixTwentyTwo(tmp46_9 + tmp47_6)
		_resultAge['47_2'] = tmp47_2

		const tmp47_0 = fixTwentyTwo(tmp46_9 + tmp47_2)
		_resultAge['47_0'] = tmp47_0

		const tmp46_10 = fixTwentyTwo(tmp46_9 + tmp47_0)
		_resultAge['46_10'] = tmp46_10

		const tmp46_11 = fixTwentyTwo(tmp46_10 + tmp47_0)
		_resultAge['46_11'] = tmp46_11

		const tmp47_4 = fixTwentyTwo(tmp47_2 + tmp47_6)
		_resultAge['47_4'] = tmp47_4

		const tmp47_3 = fixTwentyTwo(tmp47_2 + tmp47_4)
		_resultAge['47_3'] = tmp47_3

		const tmp47_5 = fixTwentyTwo(tmp47_4 + tmp47_6)
		_resultAge['47_5'] = tmp47_5

		const tmp48_8 = fixTwentyTwo(tmp47_6 + tmp50_0)
		_resultAge['48_8'] = tmp48_8

		const tmp48_2 = fixTwentyTwo(tmp47_6 + tmp48_8)
		_resultAge['48_2'] = tmp48_2

		const tmp47_9 = fixTwentyTwo(tmp47_6 + tmp48_2)
		_resultAge['47_9'] = tmp47_9

		const tmp47_7 = fixTwentyTwo(tmp47_6 + tmp47_9)
		_resultAge['47_7'] = tmp47_7

		const tmp47_8 = fixTwentyTwo(tmp47_7 + tmp47_9)
		_resultAge['47_8'] = tmp47_8

		const tmp48_0 = fixTwentyTwo(tmp47_9 + tmp48_2)
		_resultAge['48_0'] = tmp48_0

		const tmp47_10 = fixTwentyTwo(tmp47_9 + tmp48_0)
		_resultAge['47_10'] = tmp47_10

		const tmp47_11 = fixTwentyTwo(tmp47_10 + tmp48_0)
		_resultAge['47_11'] = tmp47_11

		const tmp48_1 = fixTwentyTwo(tmp48_0 + tmp48_2)
		_resultAge['48_1'] = tmp48_1

		const tmp48_5 = fixTwentyTwo(tmp48_2 + tmp48_8)
		_resultAge['48_5'] = tmp48_5

		const tmp48_3 = fixTwentyTwo(tmp48_2 + tmp48_5)
		_resultAge['48_3'] = tmp48_3

		const tmp48_4 = fixTwentyTwo(tmp48_3 + tmp48_5)
		_resultAge['48_4'] = tmp48_4

		const tmp48_6 = fixTwentyTwo(tmp48_5 + tmp48_8)
		_resultAge['48_6'] = tmp48_6

		const tmp48_7 = fixTwentyTwo(tmp48_6 + tmp48_8)
		_resultAge['48_7'] = tmp48_7

		const tmp49_4 = fixTwentyTwo(tmp48_8 + tmp50_0)
		_resultAge['49_4'] = tmp49_4

		const tmp49_1 = fixTwentyTwo(tmp48_8 + tmp49_4)
		_resultAge['49_1'] = tmp49_1

		const tmp48_9 = fixTwentyTwo(tmp48_8 + tmp49_1)
		_resultAge['48_9'] = tmp48_9

		const tmp49_0 = fixTwentyTwo(tmp48_9 + tmp49_1)
		_resultAge['49_0'] = tmp49_0

		const tmp48_10 = fixTwentyTwo(tmp48_9 + tmp49_0)
		_resultAge['48_10'] = tmp48_10

		const tmp48_11 = fixTwentyTwo(tmp48_10 + tmp49_0)
		_resultAge['48_11'] = tmp48_11

		const tmp49_2 = fixTwentyTwo(tmp49_1 + tmp49_4)
		_resultAge['49_2'] = tmp49_2

		const tmp49_3 = fixTwentyTwo(tmp49_2 + tmp49_4)
		_resultAge['49_3'] = tmp49_3

		const tmp49_7 = fixTwentyTwo(tmp49_4 + tmp50_0)
		_resultAge['49_7'] = tmp49_7

		const tmp49_5 = fixTwentyTwo(tmp49_4 + tmp49_7)
		_resultAge['49_5'] = tmp49_5

		const tmp49_6 = fixTwentyTwo(tmp49_5 + tmp49_7)
		_resultAge['49_6'] = tmp49_6

		const tmp49_9 = fixTwentyTwo(tmp49_7 + tmp50_0)
		_resultAge['49_9'] = tmp49_9

		const tmp49_8 = fixTwentyTwo(tmp49_7 + tmp49_9)
		_resultAge['49_8'] = tmp49_8

		const tmp49_10 = fixTwentyTwo(tmp49_9 + tmp50_0)
		_resultAge['49_10'] = tmp49_10

		const tmp49_11 = fixTwentyTwo(tmp49_10 + tmp50_0)
		_resultAge['49_11'] = tmp49_11
		const tmp52_6 = fixTwentyTwo(tmp50_0 + tmp55_0)
		_resultAge['52_6'] = tmp52_6

		const tmp51_3 = fixTwentyTwo(tmp50_0 + tmp52_6)
		_resultAge['51_3'] = tmp51_3

		const tmp50_6 = fixTwentyTwo(tmp50_0 + tmp51_3)
		_resultAge['50_6'] = tmp50_6

		const tmp50_3 = fixTwentyTwo(tmp50_0 + tmp50_6)
		_resultAge['50_3'] = tmp50_3

		const tmp50_1 = fixTwentyTwo(tmp50_0 + tmp50_3)
		_resultAge['50_1'] = tmp50_1

		const tmp50_2 = fixTwentyTwo(tmp50_1 + tmp50_3)
		_resultAge['50_2'] = tmp50_2

		const tmp50_4 = fixTwentyTwo(tmp50_3 + tmp50_6)
		_resultAge['50_4'] = tmp50_4

		const tmp50_5 = fixTwentyTwo(tmp50_4 + tmp50_6)
		_resultAge['50_5'] = tmp50_5

		const tmp50_9 = fixTwentyTwo(tmp50_6 + tmp51_3)
		_resultAge['50_9'] = tmp50_9

		const tmp50_7 = fixTwentyTwo(tmp50_6 + tmp50_9)
		_resultAge['50_7'] = tmp50_7

		const tmp50_8 = fixTwentyTwo(tmp50_7 + tmp50_9)
		_resultAge['50_8'] = tmp50_8

		const tmp51_1 = fixTwentyTwo(tmp50_9 + tmp51_3)
		_resultAge['51_1'] = tmp51_1

		const tmp51_2 = fixTwentyTwo(tmp51_1 + tmp51_3)
		_resultAge['51_2'] = tmp51_2

		const tmp51_0 = fixTwentyTwo(tmp50_9 + tmp51_1)
		_resultAge['51_0'] = tmp51_0

		const tmp50_10 = fixTwentyTwo(tmp50_9 + tmp51_0)
		_resultAge['50_10'] = tmp50_10

		const tmp50_11 = fixTwentyTwo(tmp50_10 + tmp51_0)
		_resultAge['50_11'] = tmp50_11

		const tmp51_9 = fixTwentyTwo(tmp51_3 + tmp52_6)
		_resultAge['51_9'] = tmp51_9

		const tmp51_6 = fixTwentyTwo(tmp51_3 + tmp51_9)
		_resultAge['51_6'] = tmp51_6

		const tmp51_4 = fixTwentyTwo(tmp51_3 + tmp51_6)
		_resultAge['51_4'] = tmp51_4

		const tmp51_5 = fixTwentyTwo(tmp51_4 + tmp51_6)
		_resultAge['51_5'] = tmp51_5

		const tmp51_7 = fixTwentyTwo(tmp51_6 + tmp51_9)
		_resultAge['51_7'] = tmp51_7

		const tmp51_8 = fixTwentyTwo(tmp51_7 + tmp51_9)
		_resultAge['51_8'] = tmp51_8

		const tmp52_2 = fixTwentyTwo(tmp51_9 + tmp52_6)
		_resultAge['52_2'] = tmp52_2

		const tmp52_0 = fixTwentyTwo(tmp51_9 + tmp52_2)
		_resultAge['52_0'] = tmp52_0

		const tmp51_10 = fixTwentyTwo(tmp51_9 + tmp52_0)
		_resultAge['51_10'] = tmp51_10

		const tmp51_11 = fixTwentyTwo(tmp51_10 + tmp52_0)
		_resultAge['51_11'] = tmp51_11

		const tmp52_4 = fixTwentyTwo(tmp52_2 + tmp52_6)
		_resultAge['52_4'] = tmp52_4

		const tmp52_3 = fixTwentyTwo(tmp52_2 + tmp52_4)
		_resultAge['52_3'] = tmp52_3

		const tmp52_5 = fixTwentyTwo(tmp52_4 + tmp52_6)
		_resultAge['52_5'] = tmp52_5

		const tmp53_8 = fixTwentyTwo(tmp52_6 + tmp55_0)
		_resultAge['53_8'] = tmp53_8

		const tmp53_2 = fixTwentyTwo(tmp52_6 + tmp53_8)
		_resultAge['53_2'] = tmp53_2

		const tmp52_9 = fixTwentyTwo(tmp52_6 + tmp53_2)
		_resultAge['52_9'] = tmp52_9

		const tmp52_7 = fixTwentyTwo(tmp52_6 + tmp52_9)
		_resultAge['52_7'] = tmp52_7

		const tmp52_8 = fixTwentyTwo(tmp52_7 + tmp52_9)
		_resultAge['52_8'] = tmp52_8

		const tmp53_0 = fixTwentyTwo(tmp52_9 + tmp53_2)
		_resultAge['53_0'] = tmp53_0

		const tmp52_10 = fixTwentyTwo(tmp52_9 + tmp53_0)
		_resultAge['52_10'] = tmp52_10

		const tmp52_11 = fixTwentyTwo(tmp52_10 + tmp53_0)
		_resultAge['52_11'] = tmp52_11

		const tmp53_1 = fixTwentyTwo(tmp53_0 + tmp53_2)
		_resultAge['53_1'] = tmp53_1

		const tmp53_5 = fixTwentyTwo(tmp53_2 + tmp53_8)
		_resultAge['53_5'] = tmp53_5

		const tmp53_3 = fixTwentyTwo(tmp53_2 + tmp53_5)
		_resultAge['53_3'] = tmp53_3

		const tmp53_4 = fixTwentyTwo(tmp53_3 + tmp53_5)
		_resultAge['53_4'] = tmp53_4

		const tmp53_6 = fixTwentyTwo(tmp53_5 + tmp53_8)
		_resultAge['53_6'] = tmp53_6

		const tmp53_7 = fixTwentyTwo(tmp53_6 + tmp53_8)
		_resultAge['53_7'] = tmp53_7

		const tmp54_4 = fixTwentyTwo(tmp53_8 + tmp55_0)
		_resultAge['54_4'] = tmp54_4

		const tmp54_1 = fixTwentyTwo(tmp53_8 + tmp54_4)
		_resultAge['54_1'] = tmp54_1

		const tmp53_9 = fixTwentyTwo(tmp53_8 + tmp54_1)
		_resultAge['53_9'] = tmp53_9

		const tmp54_0 = fixTwentyTwo(tmp53_9 + tmp54_1)
		_resultAge['54_0'] = tmp54_0

		const tmp53_10 = fixTwentyTwo(tmp53_9 + tmp54_0)
		_resultAge['53_10'] = tmp53_10

		const tmp53_11 = fixTwentyTwo(tmp53_10 + tmp54_0)
		_resultAge['53_11'] = tmp53_11

		const tmp54_2 = fixTwentyTwo(tmp54_1 + tmp54_4)
		_resultAge['54_2'] = tmp54_2

		const tmp54_3 = fixTwentyTwo(tmp54_2 + tmp54_4)
		_resultAge['54_3'] = tmp54_3

		const tmp54_7 = fixTwentyTwo(tmp54_4 + tmp55_0)
		_resultAge['54_7'] = tmp54_7

		const tmp54_5 = fixTwentyTwo(tmp54_4 + tmp54_7)
		_resultAge['54_5'] = tmp54_5

		const tmp54_6 = fixTwentyTwo(tmp54_5 + tmp54_7)
		_resultAge['54_6'] = tmp54_6

		const tmp54_9 = fixTwentyTwo(tmp54_7 + tmp55_0)
		_resultAge['54_9'] = tmp54_9

		const tmp54_8 = fixTwentyTwo(tmp54_7 + tmp54_9)
		_resultAge['54_8'] = tmp54_8

		const tmp54_10 = fixTwentyTwo(tmp54_9 + tmp55_0)
		_resultAge['54_10'] = tmp54_10

		const tmp54_11 = fixTwentyTwo(tmp54_10 + tmp55_0)
		_resultAge['54_11'] = tmp54_11
		const tmp57_6 = fixTwentyTwo(tmp55_0 + tmp60_0)
		_resultAge['57_6'] = tmp57_6

		const tmp56_3 = fixTwentyTwo(tmp55_0 + tmp57_6)
		_resultAge['56_3'] = tmp56_3

		const tmp55_6 = fixTwentyTwo(tmp55_0 + tmp56_3)
		_resultAge['55_6'] = tmp55_6

		const tmp55_3 = fixTwentyTwo(tmp55_0 + tmp55_6)
		_resultAge['55_3'] = tmp55_3

		const tmp55_1 = fixTwentyTwo(tmp55_0 + tmp55_3)
		_resultAge['55_1'] = tmp55_1

		const tmp55_2 = fixTwentyTwo(tmp55_1 + tmp55_3)
		_resultAge['55_2'] = tmp55_2

		const tmp55_4 = fixTwentyTwo(tmp55_3 + tmp55_6)
		_resultAge['55_4'] = tmp55_4

		const tmp55_5 = fixTwentyTwo(tmp55_4 + tmp55_6)
		_resultAge['55_5'] = tmp55_5

		const tmp55_9 = fixTwentyTwo(tmp55_6 + tmp56_3)
		_resultAge['55_9'] = tmp55_9

		const tmp55_7 = fixTwentyTwo(tmp55_6 + tmp55_9)
		_resultAge['55_7'] = tmp55_7

		const tmp55_8 = fixTwentyTwo(tmp55_7 + tmp55_9)
		_resultAge['55_8'] = tmp55_8

		const tmp56_1 = fixTwentyTwo(tmp55_9 + tmp56_3)
		_resultAge['56_1'] = tmp56_1

		const tmp56_2 = fixTwentyTwo(tmp56_1 + tmp56_3)
		_resultAge['56_2'] = tmp56_2

		const tmp56_0 = fixTwentyTwo(tmp55_9 + tmp56_1)
		_resultAge['56_0'] = tmp56_0

		const tmp55_10 = fixTwentyTwo(tmp55_9 + tmp56_0)
		_resultAge['55_10'] = tmp55_10

		const tmp55_11 = fixTwentyTwo(tmp55_10 + tmp56_0)
		_resultAge['55_11'] = tmp55_11

		const tmp56_9 = fixTwentyTwo(tmp56_3 + tmp57_6)
		_resultAge['56_9'] = tmp56_9

		const tmp56_6 = fixTwentyTwo(tmp56_3 + tmp56_9)
		_resultAge['56_6'] = tmp56_6

		const tmp56_4 = fixTwentyTwo(tmp56_3 + tmp56_6)
		_resultAge['56_4'] = tmp56_4

		const tmp56_5 = fixTwentyTwo(tmp56_4 + tmp56_6)
		_resultAge['56_5'] = tmp56_5

		const tmp56_7 = fixTwentyTwo(tmp56_6 + tmp56_9)
		_resultAge['56_7'] = tmp56_7

		const tmp56_8 = fixTwentyTwo(tmp56_7 + tmp56_9)
		_resultAge['56_8'] = tmp56_8

		const tmp57_2 = fixTwentyTwo(tmp56_9 + tmp57_6)
		_resultAge['57_2'] = tmp57_2

		const tmp57_0 = fixTwentyTwo(tmp56_9 + tmp57_2)
		_resultAge['57_0'] = tmp57_0

		const tmp56_10 = fixTwentyTwo(tmp56_9 + tmp57_0)
		_resultAge['56_10'] = tmp56_10

		const tmp56_11 = fixTwentyTwo(tmp56_10 + tmp57_0)
		_resultAge['56_11'] = tmp56_11

		const tmp57_4 = fixTwentyTwo(tmp57_2 + tmp57_6)
		_resultAge['57_4'] = tmp57_4

		const tmp57_3 = fixTwentyTwo(tmp57_2 + tmp57_4)
		_resultAge['57_3'] = tmp57_3

		const tmp57_5 = fixTwentyTwo(tmp57_4 + tmp57_6)
		_resultAge['57_5'] = tmp57_5

		const tmp58_8 = fixTwentyTwo(tmp57_6 + tmp60_0)
		_resultAge['58_8'] = tmp58_8

		const tmp58_2 = fixTwentyTwo(tmp57_6 + tmp58_8)
		_resultAge['58_2'] = tmp58_2

		const tmp57_9 = fixTwentyTwo(tmp57_6 + tmp58_2)
		_resultAge['57_9'] = tmp57_9

		const tmp57_7 = fixTwentyTwo(tmp57_6 + tmp57_9)
		_resultAge['57_7'] = tmp57_7

		const tmp57_8 = fixTwentyTwo(tmp57_7 + tmp57_9)
		_resultAge['57_8'] = tmp57_8

		const tmp58_0 = fixTwentyTwo(tmp57_9 + tmp58_2)
		_resultAge['58_0'] = tmp58_0

		const tmp57_10 = fixTwentyTwo(tmp57_9 + tmp58_0)
		_resultAge['57_10'] = tmp57_10

		const tmp57_11 = fixTwentyTwo(tmp57_10 + tmp58_0)
		_resultAge['57_11'] = tmp57_11

		const tmp58_1 = fixTwentyTwo(tmp58_0 + tmp58_2)
		_resultAge['58_1'] = tmp58_1

		const tmp58_5 = fixTwentyTwo(tmp58_2 + tmp58_8)
		_resultAge['58_5'] = tmp58_5

		const tmp58_3 = fixTwentyTwo(tmp58_2 + tmp58_5)
		_resultAge['58_3'] = tmp58_3

		const tmp58_4 = fixTwentyTwo(tmp58_3 + tmp58_5)
		_resultAge['58_4'] = tmp58_4

		const tmp58_6 = fixTwentyTwo(tmp58_5 + tmp58_8)
		_resultAge['58_6'] = tmp58_6

		const tmp58_7 = fixTwentyTwo(tmp58_6 + tmp58_8)
		_resultAge['58_7'] = tmp58_7

		const tmp59_4 = fixTwentyTwo(tmp58_8 + tmp60_0)
		_resultAge['59_4'] = tmp59_4

		const tmp59_1 = fixTwentyTwo(tmp58_8 + tmp59_4)
		_resultAge['59_1'] = tmp59_1

		const tmp58_9 = fixTwentyTwo(tmp58_8 + tmp59_1)
		_resultAge['58_9'] = tmp58_9

		const tmp59_0 = fixTwentyTwo(tmp58_9 + tmp59_1)
		_resultAge['59_0'] = tmp59_0

		const tmp58_10 = fixTwentyTwo(tmp58_9 + tmp59_0)
		_resultAge['58_10'] = tmp58_10

		const tmp58_11 = fixTwentyTwo(tmp58_10 + tmp59_0)
		_resultAge['58_11'] = tmp58_11

		const tmp59_2 = fixTwentyTwo(tmp59_1 + tmp59_4)
		_resultAge['59_2'] = tmp59_2

		const tmp59_3 = fixTwentyTwo(tmp59_2 + tmp59_4)
		_resultAge['59_3'] = tmp59_3

		const tmp59_7 = fixTwentyTwo(tmp59_4 + tmp60_0)
		_resultAge['59_7'] = tmp59_7

		const tmp59_5 = fixTwentyTwo(tmp59_4 + tmp59_7)
		_resultAge['59_5'] = tmp59_5

		const tmp59_6 = fixTwentyTwo(tmp59_5 + tmp59_7)
		_resultAge['59_6'] = tmp59_6

		const tmp59_9 = fixTwentyTwo(tmp59_7 + tmp60_0)
		_resultAge['59_9'] = tmp59_9

		const tmp59_8 = fixTwentyTwo(tmp59_7 + tmp59_9)
		_resultAge['59_8'] = tmp59_8

		const tmp59_10 = fixTwentyTwo(tmp59_9 + tmp60_0)
		_resultAge['59_10'] = tmp59_10

		const tmp59_11 = fixTwentyTwo(tmp59_10 + tmp60_0)
		_resultAge['59_11'] = tmp59_11
		const tmp62_6 = fixTwentyTwo(tmp60_0 + tmp65_0)
		_resultAge['62_6'] = tmp62_6

		const tmp61_3 = fixTwentyTwo(tmp60_0 + tmp62_6)
		_resultAge['61_3'] = tmp61_3

		const tmp60_6 = fixTwentyTwo(tmp60_0 + tmp61_3)
		_resultAge['60_6'] = tmp60_6

		const tmp60_3 = fixTwentyTwo(tmp60_0 + tmp60_6)
		_resultAge['60_3'] = tmp60_3

		const tmp60_1 = fixTwentyTwo(tmp60_0 + tmp60_3)
		_resultAge['60_1'] = tmp60_1

		const tmp60_2 = fixTwentyTwo(tmp60_1 + tmp60_3)
		_resultAge['60_2'] = tmp60_2

		const tmp60_4 = fixTwentyTwo(tmp60_3 + tmp60_6)
		_resultAge['60_4'] = tmp60_4

		const tmp60_5 = fixTwentyTwo(tmp60_4 + tmp60_6)
		_resultAge['60_5'] = tmp60_5

		const tmp60_9 = fixTwentyTwo(tmp60_6 + tmp61_3)
		_resultAge['60_9'] = tmp60_9

		const tmp60_7 = fixTwentyTwo(tmp60_6 + tmp60_9)
		_resultAge['60_7'] = tmp60_7

		const tmp60_8 = fixTwentyTwo(tmp60_7 + tmp60_9)
		_resultAge['60_8'] = tmp60_8

		const tmp61_1 = fixTwentyTwo(tmp60_9 + tmp61_3)
		_resultAge['61_1'] = tmp61_1

		const tmp61_2 = fixTwentyTwo(tmp61_1 + tmp61_3)
		_resultAge['61_2'] = tmp61_2

		const tmp61_0 = fixTwentyTwo(tmp60_9 + tmp61_1)
		_resultAge['61_0'] = tmp61_0

		const tmp60_10 = fixTwentyTwo(tmp60_9 + tmp61_0)
		_resultAge['60_10'] = tmp60_10

		const tmp60_11 = fixTwentyTwo(tmp60_10 + tmp61_0)
		_resultAge['60_11'] = tmp60_11

		const tmp61_9 = fixTwentyTwo(tmp61_3 + tmp62_6)
		_resultAge['61_9'] = tmp61_9

		const tmp61_6 = fixTwentyTwo(tmp61_3 + tmp61_9)
		_resultAge['61_6'] = tmp61_6

		const tmp61_4 = fixTwentyTwo(tmp61_3 + tmp61_6)
		_resultAge['61_4'] = tmp61_4

		const tmp61_5 = fixTwentyTwo(tmp61_4 + tmp61_6)
		_resultAge['61_5'] = tmp61_5

		const tmp61_7 = fixTwentyTwo(tmp61_6 + tmp61_9)
		_resultAge['61_7'] = tmp61_7

		const tmp61_8 = fixTwentyTwo(tmp61_7 + tmp61_9)
		_resultAge['61_8'] = tmp61_8

		const tmp62_2 = fixTwentyTwo(tmp61_9 + tmp62_6)
		_resultAge['62_2'] = tmp62_2

		const tmp62_0 = fixTwentyTwo(tmp61_9 + tmp62_2)
		_resultAge['62_0'] = tmp62_0

		const tmp61_10 = fixTwentyTwo(tmp61_9 + tmp62_0)
		_resultAge['61_10'] = tmp61_10

		const tmp61_11 = fixTwentyTwo(tmp61_10 + tmp62_0)
		_resultAge['61_11'] = tmp61_11

		const tmp62_4 = fixTwentyTwo(tmp62_2 + tmp62_6)
		_resultAge['62_4'] = tmp62_4

		const tmp62_3 = fixTwentyTwo(tmp62_2 + tmp62_4)
		_resultAge['62_3'] = tmp62_3

		const tmp62_5 = fixTwentyTwo(tmp62_4 + tmp62_6)
		_resultAge['62_5'] = tmp62_5

		const tmp63_8 = fixTwentyTwo(tmp62_6 + tmp65_0)
		_resultAge['63_8'] = tmp63_8

		const tmp63_2 = fixTwentyTwo(tmp62_6 + tmp63_8)
		_resultAge['63_2'] = tmp63_2

		const tmp62_9 = fixTwentyTwo(tmp62_6 + tmp63_2)
		_resultAge['62_9'] = tmp62_9

		const tmp62_7 = fixTwentyTwo(tmp62_6 + tmp62_9)
		_resultAge['62_7'] = tmp62_7

		const tmp62_8 = fixTwentyTwo(tmp62_7 + tmp62_9)
		_resultAge['62_8'] = tmp62_8

		const tmp63_0 = fixTwentyTwo(tmp62_9 + tmp63_2)
		_resultAge['63_0'] = tmp63_0

		const tmp62_10 = fixTwentyTwo(tmp62_9 + tmp63_0)
		_resultAge['62_10'] = tmp62_10

		const tmp62_11 = fixTwentyTwo(tmp62_10 + tmp63_0)
		_resultAge['62_11'] = tmp62_11

		const tmp63_1 = fixTwentyTwo(tmp63_0 + tmp63_2)
		_resultAge['63_1'] = tmp63_1

		const tmp63_5 = fixTwentyTwo(tmp63_2 + tmp63_8)
		_resultAge['63_5'] = tmp63_5

		const tmp63_3 = fixTwentyTwo(tmp63_2 + tmp63_5)
		_resultAge['63_3'] = tmp63_3

		const tmp63_4 = fixTwentyTwo(tmp63_3 + tmp63_5)
		_resultAge['63_4'] = tmp63_4

		const tmp63_6 = fixTwentyTwo(tmp63_5 + tmp63_8)
		_resultAge['63_6'] = tmp63_6

		const tmp63_7 = fixTwentyTwo(tmp63_6 + tmp63_8)
		_resultAge['63_7'] = tmp63_7

		const tmp64_4 = fixTwentyTwo(tmp63_8 + tmp65_0)
		_resultAge['64_4'] = tmp64_4

		const tmp64_1 = fixTwentyTwo(tmp63_8 + tmp64_4)
		_resultAge['64_1'] = tmp64_1

		const tmp63_9 = fixTwentyTwo(tmp63_8 + tmp64_1)
		_resultAge['63_9'] = tmp63_9

		const tmp64_0 = fixTwentyTwo(tmp63_9 + tmp64_1)
		_resultAge['64_0'] = tmp64_0

		const tmp63_10 = fixTwentyTwo(tmp63_9 + tmp64_0)
		_resultAge['63_10'] = tmp63_10

		const tmp63_11 = fixTwentyTwo(tmp63_10 + tmp64_0)
		_resultAge['63_11'] = tmp63_11

		const tmp64_2 = fixTwentyTwo(tmp64_1 + tmp64_4)
		_resultAge['64_2'] = tmp64_2

		const tmp64_3 = fixTwentyTwo(tmp64_2 + tmp64_4)
		_resultAge['64_3'] = tmp64_3

		const tmp64_7 = fixTwentyTwo(tmp64_4 + tmp65_0)
		_resultAge['64_7'] = tmp64_7

		const tmp64_5 = fixTwentyTwo(tmp64_4 + tmp64_7)
		_resultAge['64_5'] = tmp64_5

		const tmp64_6 = fixTwentyTwo(tmp64_5 + tmp64_7)
		_resultAge['64_6'] = tmp64_6

		const tmp64_9 = fixTwentyTwo(tmp64_7 + tmp65_0)
		_resultAge['64_9'] = tmp64_9

		const tmp64_8 = fixTwentyTwo(tmp64_7 + tmp64_9)
		_resultAge['64_8'] = tmp64_8

		const tmp64_10 = fixTwentyTwo(tmp64_9 + tmp65_0)
		_resultAge['64_10'] = tmp64_10

		const tmp64_11 = fixTwentyTwo(tmp64_10 + tmp65_0)
		_resultAge['64_11'] = tmp64_11
		const tmp67_6 = fixTwentyTwo(tmp65_0 + tmp70_0)
		_resultAge['67_6'] = tmp67_6

		const tmp66_3 = fixTwentyTwo(tmp65_0 + tmp67_6)
		_resultAge['66_3'] = tmp66_3

		const tmp65_6 = fixTwentyTwo(tmp65_0 + tmp66_3)
		_resultAge['65_6'] = tmp65_6

		const tmp65_3 = fixTwentyTwo(tmp65_0 + tmp65_6)
		_resultAge['65_3'] = tmp65_3

		const tmp65_1 = fixTwentyTwo(tmp65_0 + tmp65_3)
		_resultAge['65_1'] = tmp65_1

		const tmp65_2 = fixTwentyTwo(tmp65_1 + tmp65_3)
		_resultAge['65_2'] = tmp65_2

		const tmp65_4 = fixTwentyTwo(tmp65_3 + tmp65_6)
		_resultAge['65_4'] = tmp65_4

		const tmp65_5 = fixTwentyTwo(tmp65_4 + tmp65_6)
		_resultAge['65_5'] = tmp65_5

		const tmp65_9 = fixTwentyTwo(tmp65_6 + tmp66_3)
		_resultAge['65_9'] = tmp65_9

		const tmp65_7 = fixTwentyTwo(tmp65_6 + tmp65_9)
		_resultAge['65_7'] = tmp65_7

		const tmp65_8 = fixTwentyTwo(tmp65_7 + tmp65_9)
		_resultAge['65_8'] = tmp65_8

		const tmp66_1 = fixTwentyTwo(tmp65_9 + tmp66_3)
		_resultAge['66_1'] = tmp66_1

		const tmp66_2 = fixTwentyTwo(tmp66_1 + tmp66_3)
		_resultAge['66_2'] = tmp66_2

		const tmp66_0 = fixTwentyTwo(tmp65_9 + tmp66_1)
		_resultAge['66_0'] = tmp66_0

		const tmp65_10 = fixTwentyTwo(tmp65_9 + tmp66_0)
		_resultAge['65_10'] = tmp65_10

		const tmp65_11 = fixTwentyTwo(tmp65_10 + tmp66_0)
		_resultAge['65_11'] = tmp65_11

		const tmp66_9 = fixTwentyTwo(tmp66_3 + tmp67_6)
		_resultAge['66_9'] = tmp66_9

		const tmp66_6 = fixTwentyTwo(tmp66_3 + tmp66_9)
		_resultAge['66_6'] = tmp66_6

		const tmp66_4 = fixTwentyTwo(tmp66_3 + tmp66_6)
		_resultAge['66_4'] = tmp66_4

		const tmp66_5 = fixTwentyTwo(tmp66_4 + tmp66_6)
		_resultAge['66_5'] = tmp66_5

		const tmp66_7 = fixTwentyTwo(tmp66_6 + tmp66_9)
		_resultAge['66_7'] = tmp66_7

		const tmp66_8 = fixTwentyTwo(tmp66_7 + tmp66_9)
		_resultAge['66_8'] = tmp66_8

		const tmp67_2 = fixTwentyTwo(tmp66_9 + tmp67_6)
		_resultAge['67_2'] = tmp67_2

		const tmp67_0 = fixTwentyTwo(tmp66_9 + tmp67_2)
		_resultAge['67_0'] = tmp67_0

		const tmp66_10 = fixTwentyTwo(tmp66_9 + tmp67_0)
		_resultAge['66_10'] = tmp66_10

		const tmp66_11 = fixTwentyTwo(tmp66_10 + tmp67_0)
		_resultAge['66_11'] = tmp66_11

		const tmp67_4 = fixTwentyTwo(tmp67_2 + tmp67_6)
		_resultAge['67_4'] = tmp67_4

		const tmp67_3 = fixTwentyTwo(tmp67_2 + tmp67_4)
		_resultAge['67_3'] = tmp67_3

		const tmp67_5 = fixTwentyTwo(tmp67_4 + tmp67_6)
		_resultAge['67_5'] = tmp67_5

		const tmp68_8 = fixTwentyTwo(tmp67_6 + tmp70_0)
		_resultAge['68_8'] = tmp68_8

		const tmp68_2 = fixTwentyTwo(tmp67_6 + tmp68_8)
		_resultAge['68_2'] = tmp68_2

		const tmp67_9 = fixTwentyTwo(tmp67_6 + tmp68_2)
		_resultAge['67_9'] = tmp67_9

		const tmp67_7 = fixTwentyTwo(tmp67_6 + tmp67_9)
		_resultAge['67_7'] = tmp67_7

		const tmp67_8 = fixTwentyTwo(tmp67_7 + tmp67_9)
		_resultAge['67_8'] = tmp67_8

		const tmp68_0 = fixTwentyTwo(tmp67_9 + tmp68_2)
		_resultAge['68_0'] = tmp68_0

		const tmp67_10 = fixTwentyTwo(tmp67_9 + tmp68_0)
		_resultAge['67_10'] = tmp67_10

		const tmp67_11 = fixTwentyTwo(tmp67_10 + tmp68_0)
		_resultAge['67_11'] = tmp67_11

		const tmp68_1 = fixTwentyTwo(tmp68_0 + tmp68_2)
		_resultAge['68_1'] = tmp68_1

		const tmp68_5 = fixTwentyTwo(tmp68_2 + tmp68_8)
		_resultAge['68_5'] = tmp68_5

		const tmp68_3 = fixTwentyTwo(tmp68_2 + tmp68_5)
		_resultAge['68_3'] = tmp68_3

		const tmp68_4 = fixTwentyTwo(tmp68_3 + tmp68_5)
		_resultAge['68_4'] = tmp68_4

		const tmp68_6 = fixTwentyTwo(tmp68_5 + tmp68_8)
		_resultAge['68_6'] = tmp68_6

		const tmp68_7 = fixTwentyTwo(tmp68_6 + tmp68_8)
		_resultAge['68_7'] = tmp68_7

		const tmp69_4 = fixTwentyTwo(tmp68_8 + tmp70_0)
		_resultAge['69_4'] = tmp69_4

		const tmp69_1 = fixTwentyTwo(tmp68_8 + tmp69_4)
		_resultAge['69_1'] = tmp69_1

		const tmp68_9 = fixTwentyTwo(tmp68_8 + tmp69_1)
		_resultAge['68_9'] = tmp68_9

		const tmp69_0 = fixTwentyTwo(tmp68_9 + tmp69_1)
		_resultAge['69_0'] = tmp69_0

		const tmp68_10 = fixTwentyTwo(tmp68_9 + tmp69_0)
		_resultAge['68_10'] = tmp68_10

		const tmp68_11 = fixTwentyTwo(tmp68_10 + tmp69_0)
		_resultAge['68_11'] = tmp68_11

		const tmp69_2 = fixTwentyTwo(tmp69_1 + tmp69_4)
		_resultAge['69_2'] = tmp69_2

		const tmp69_3 = fixTwentyTwo(tmp69_2 + tmp69_4)
		_resultAge['69_3'] = tmp69_3

		const tmp69_7 = fixTwentyTwo(tmp69_4 + tmp70_0)
		_resultAge['69_7'] = tmp69_7

		const tmp69_5 = fixTwentyTwo(tmp69_4 + tmp69_7)
		_resultAge['69_5'] = tmp69_5

		const tmp69_6 = fixTwentyTwo(tmp69_5 + tmp69_7)
		_resultAge['69_6'] = tmp69_6

		const tmp69_9 = fixTwentyTwo(tmp69_7 + tmp70_0)
		_resultAge['69_9'] = tmp69_9

		const tmp69_8 = fixTwentyTwo(tmp69_7 + tmp69_9)
		_resultAge['69_8'] = tmp69_8

		const tmp69_10 = fixTwentyTwo(tmp69_9 + tmp70_0)
		_resultAge['69_10'] = tmp69_10

		const tmp69_11 = fixTwentyTwo(tmp69_10 + tmp70_0)
		_resultAge['69_11'] = tmp69_11
		const tmp72_6 = fixTwentyTwo(tmp70_0 + tmp75_0)
		_resultAge['72_6'] = tmp72_6

		const tmp71_3 = fixTwentyTwo(tmp70_0 + tmp72_6)
		_resultAge['71_3'] = tmp71_3

		const tmp70_6 = fixTwentyTwo(tmp70_0 + tmp71_3)
		_resultAge['70_6'] = tmp70_6

		const tmp70_3 = fixTwentyTwo(tmp70_0 + tmp70_6)
		_resultAge['70_3'] = tmp70_3

		const tmp70_1 = fixTwentyTwo(tmp70_0 + tmp70_3)
		_resultAge['70_1'] = tmp70_1

		const tmp70_2 = fixTwentyTwo(tmp70_1 + tmp70_3)
		_resultAge['70_2'] = tmp70_2

		const tmp70_4 = fixTwentyTwo(tmp70_3 + tmp70_6)
		_resultAge['70_4'] = tmp70_4

		const tmp70_5 = fixTwentyTwo(tmp70_4 + tmp70_6)
		_resultAge['70_5'] = tmp70_5

		const tmp70_9 = fixTwentyTwo(tmp70_6 + tmp71_3)
		_resultAge['70_9'] = tmp70_9

		const tmp70_7 = fixTwentyTwo(tmp70_6 + tmp70_9)
		_resultAge['70_7'] = tmp70_7

		const tmp70_8 = fixTwentyTwo(tmp70_7 + tmp70_9)
		_resultAge['70_8'] = tmp70_8

		const tmp71_1 = fixTwentyTwo(tmp70_9 + tmp71_3)
		_resultAge['71_1'] = tmp71_1

		const tmp71_2 = fixTwentyTwo(tmp71_1 + tmp71_3)
		_resultAge['71_2'] = tmp71_2

		const tmp71_0 = fixTwentyTwo(tmp70_9 + tmp71_1)
		_resultAge['71_0'] = tmp71_0

		const tmp70_10 = fixTwentyTwo(tmp70_9 + tmp71_0)
		_resultAge['70_10'] = tmp70_10

		const tmp70_11 = fixTwentyTwo(tmp70_10 + tmp71_0)
		_resultAge['70_11'] = tmp70_11

		const tmp71_9 = fixTwentyTwo(tmp71_3 + tmp72_6)
		_resultAge['71_9'] = tmp71_9

		const tmp71_6 = fixTwentyTwo(tmp71_3 + tmp71_9)
		_resultAge['71_6'] = tmp71_6

		const tmp71_4 = fixTwentyTwo(tmp71_3 + tmp71_6)
		_resultAge['71_4'] = tmp71_4

		const tmp71_5 = fixTwentyTwo(tmp71_4 + tmp71_6)
		_resultAge['71_5'] = tmp71_5

		const tmp71_7 = fixTwentyTwo(tmp71_6 + tmp71_9)
		_resultAge['71_7'] = tmp71_7

		const tmp71_8 = fixTwentyTwo(tmp71_7 + tmp71_9)
		_resultAge['71_8'] = tmp71_8

		const tmp72_2 = fixTwentyTwo(tmp71_9 + tmp72_6)
		_resultAge['72_2'] = tmp72_2

		const tmp72_0 = fixTwentyTwo(tmp71_9 + tmp72_2)
		_resultAge['72_0'] = tmp72_0

		const tmp71_10 = fixTwentyTwo(tmp71_9 + tmp72_0)
		_resultAge['71_10'] = tmp71_10

		const tmp71_11 = fixTwentyTwo(tmp71_10 + tmp72_0)
		_resultAge['71_11'] = tmp71_11

		const tmp72_4 = fixTwentyTwo(tmp72_2 + tmp72_6)
		_resultAge['72_4'] = tmp72_4

		const tmp72_3 = fixTwentyTwo(tmp72_2 + tmp72_4)
		_resultAge['72_3'] = tmp72_3

		const tmp72_5 = fixTwentyTwo(tmp72_4 + tmp72_6)
		_resultAge['72_5'] = tmp72_5

		const tmp73_8 = fixTwentyTwo(tmp72_6 + tmp75_0)
		_resultAge['73_8'] = tmp73_8

		const tmp73_2 = fixTwentyTwo(tmp72_6 + tmp73_8)
		_resultAge['73_2'] = tmp73_2

		const tmp72_9 = fixTwentyTwo(tmp72_6 + tmp73_2)
		_resultAge['72_9'] = tmp72_9

		const tmp72_7 = fixTwentyTwo(tmp72_6 + tmp72_9)
		_resultAge['72_7'] = tmp72_7

		const tmp72_8 = fixTwentyTwo(tmp72_7 + tmp72_9)
		_resultAge['72_8'] = tmp72_8

		const tmp73_0 = fixTwentyTwo(tmp72_9 + tmp73_2)
		_resultAge['73_0'] = tmp73_0

		const tmp72_10 = fixTwentyTwo(tmp72_9 + tmp73_0)
		_resultAge['72_10'] = tmp72_10

		const tmp72_11 = fixTwentyTwo(tmp72_10 + tmp73_0)
		_resultAge['72_11'] = tmp72_11

		const tmp73_1 = fixTwentyTwo(tmp73_0 + tmp73_2)
		_resultAge['73_1'] = tmp73_1

		const tmp73_5 = fixTwentyTwo(tmp73_2 + tmp73_8)
		_resultAge['73_5'] = tmp73_5

		const tmp73_3 = fixTwentyTwo(tmp73_2 + tmp73_5)
		_resultAge['73_3'] = tmp73_3

		const tmp73_4 = fixTwentyTwo(tmp73_3 + tmp73_5)
		_resultAge['73_4'] = tmp73_4

		const tmp73_6 = fixTwentyTwo(tmp73_5 + tmp73_8)
		_resultAge['73_6'] = tmp73_6

		const tmp73_7 = fixTwentyTwo(tmp73_6 + tmp73_8)
		_resultAge['73_7'] = tmp73_7

		const tmp74_4 = fixTwentyTwo(tmp73_8 + tmp75_0)
		_resultAge['74_4'] = tmp74_4

		const tmp74_1 = fixTwentyTwo(tmp73_8 + tmp74_4)
		_resultAge['74_1'] = tmp74_1

		const tmp73_9 = fixTwentyTwo(tmp73_8 + tmp74_1)
		_resultAge['73_9'] = tmp73_9

		const tmp74_0 = fixTwentyTwo(tmp73_9 + tmp74_1)
		_resultAge['74_0'] = tmp74_0

		const tmp73_10 = fixTwentyTwo(tmp73_9 + tmp74_0)
		_resultAge['73_10'] = tmp73_10

		const tmp73_11 = fixTwentyTwo(tmp73_10 + tmp74_0)
		_resultAge['73_11'] = tmp73_11

		const tmp74_2 = fixTwentyTwo(tmp74_1 + tmp74_4)
		_resultAge['74_2'] = tmp74_2

		const tmp74_3 = fixTwentyTwo(tmp74_2 + tmp74_4)
		_resultAge['74_3'] = tmp74_3

		const tmp74_7 = fixTwentyTwo(tmp74_4 + tmp75_0)
		_resultAge['74_7'] = tmp74_7

		const tmp74_5 = fixTwentyTwo(tmp74_4 + tmp74_7)
		_resultAge['74_5'] = tmp74_5

		const tmp74_6 = fixTwentyTwo(tmp74_5 + tmp74_7)
		_resultAge['74_6'] = tmp74_6

		const tmp74_9 = fixTwentyTwo(tmp74_7 + tmp75_0)
		_resultAge['74_9'] = tmp74_9

		const tmp74_8 = fixTwentyTwo(tmp74_7 + tmp74_9)
		_resultAge['74_8'] = tmp74_8

		const tmp74_10 = fixTwentyTwo(tmp74_9 + tmp75_0)
		_resultAge['74_10'] = tmp74_10

		const tmp74_11 = fixTwentyTwo(tmp74_10 + tmp75_0)
		_resultAge['74_11'] = tmp74_11
		const tmp77_6 = fixTwentyTwo(tmp75_0 + tmp0_0)
		_resultAge['77_6'] = tmp77_6

		const tmp76_3 = fixTwentyTwo(tmp75_0 + tmp77_6)
		_resultAge['76_3'] = tmp76_3

		const tmp75_6 = fixTwentyTwo(tmp75_0 + tmp76_3)
		_resultAge['75_6'] = tmp75_6

		const tmp75_3 = fixTwentyTwo(tmp75_0 + tmp75_6)
		_resultAge['75_3'] = tmp75_3

		const tmp75_1 = fixTwentyTwo(tmp75_0 + tmp75_3)
		_resultAge['75_1'] = tmp75_1

		const tmp75_2 = fixTwentyTwo(tmp75_1 + tmp75_3)
		_resultAge['75_2'] = tmp75_2

		const tmp75_4 = fixTwentyTwo(tmp75_3 + tmp75_6)
		_resultAge['75_4'] = tmp75_4

		const tmp75_5 = fixTwentyTwo(tmp75_4 + tmp75_6)
		_resultAge['75_5'] = tmp75_5

		const tmp75_9 = fixTwentyTwo(tmp75_6 + tmp76_3)
		_resultAge['75_9'] = tmp75_9

		const tmp75_7 = fixTwentyTwo(tmp75_6 + tmp75_9)
		_resultAge['75_7'] = tmp75_7

		const tmp75_8 = fixTwentyTwo(tmp75_7 + tmp75_9)
		_resultAge['75_8'] = tmp75_8

		const tmp76_1 = fixTwentyTwo(tmp75_9 + tmp76_3)
		_resultAge['76_1'] = tmp76_1

		const tmp76_2 = fixTwentyTwo(tmp76_1 + tmp76_3)
		_resultAge['76_2'] = tmp76_2

		const tmp76_0 = fixTwentyTwo(tmp75_9 + tmp76_1)
		_resultAge['76_0'] = tmp76_0

		const tmp75_10 = fixTwentyTwo(tmp75_9 + tmp76_0)
		_resultAge['75_10'] = tmp75_10

		const tmp75_11 = fixTwentyTwo(tmp75_10 + tmp76_0)
		_resultAge['75_11'] = tmp75_11

		const tmp76_9 = fixTwentyTwo(tmp76_3 + tmp77_6)
		_resultAge['76_9'] = tmp76_9

		const tmp76_6 = fixTwentyTwo(tmp76_3 + tmp76_9)
		_resultAge['76_6'] = tmp76_6

		const tmp76_4 = fixTwentyTwo(tmp76_3 + tmp76_6)
		_resultAge['76_4'] = tmp76_4

		const tmp76_5 = fixTwentyTwo(tmp76_4 + tmp76_6)
		_resultAge['76_5'] = tmp76_5

		const tmp76_7 = fixTwentyTwo(tmp76_6 + tmp76_9)
		_resultAge['76_7'] = tmp76_7

		const tmp76_8 = fixTwentyTwo(tmp76_7 + tmp76_9)
		_resultAge['76_8'] = tmp76_8

		const tmp77_2 = fixTwentyTwo(tmp76_9 + tmp77_6)
		_resultAge['77_2'] = tmp77_2

		const tmp77_0 = fixTwentyTwo(tmp76_9 + tmp77_2)
		_resultAge['77_0'] = tmp77_0

		const tmp76_10 = fixTwentyTwo(tmp76_9 + tmp77_0)
		_resultAge['76_10'] = tmp76_10

		const tmp76_11 = fixTwentyTwo(tmp76_10 + tmp77_0)
		_resultAge['76_11'] = tmp76_11

		const tmp77_4 = fixTwentyTwo(tmp77_2 + tmp77_6)
		_resultAge['77_4'] = tmp77_4

		const tmp77_3 = fixTwentyTwo(tmp77_2 + tmp77_4)
		_resultAge['77_3'] = tmp77_3

		const tmp77_5 = fixTwentyTwo(tmp77_4 + tmp77_6)
		_resultAge['77_5'] = tmp77_5

		const tmp78_8 = fixTwentyTwo(tmp77_6 + tmp0_0)
		_resultAge['78_8'] = tmp78_8

		const tmp78_2 = fixTwentyTwo(tmp77_6 + tmp78_8)
		_resultAge['78_2'] = tmp78_2

		const tmp77_9 = fixTwentyTwo(tmp77_6 + tmp78_2)
		_resultAge['77_9'] = tmp77_9

		const tmp77_7 = fixTwentyTwo(tmp77_6 + tmp77_9)
		_resultAge['77_7'] = tmp77_7

		const tmp77_8 = fixTwentyTwo(tmp77_7 + tmp77_9)
		_resultAge['77_8'] = tmp77_8

		const tmp78_0 = fixTwentyTwo(tmp77_9 + tmp78_2)
		_resultAge['78_0'] = tmp78_0

		const tmp77_10 = fixTwentyTwo(tmp77_9 + tmp78_0)
		_resultAge['77_10'] = tmp77_10

		const tmp77_11 = fixTwentyTwo(tmp77_10 + tmp78_0)
		_resultAge['77_11'] = tmp77_11

		const tmp78_1 = fixTwentyTwo(tmp78_0 + tmp78_2)
		_resultAge['78_1'] = tmp78_1

		const tmp78_5 = fixTwentyTwo(tmp78_2 + tmp78_8)
		_resultAge['78_5'] = tmp78_5

		const tmp78_3 = fixTwentyTwo(tmp78_2 + tmp78_5)
		_resultAge['78_3'] = tmp78_3

		const tmp78_4 = fixTwentyTwo(tmp78_3 + tmp78_5)
		_resultAge['78_4'] = tmp78_4

		const tmp78_6 = fixTwentyTwo(tmp78_5 + tmp78_8)
		_resultAge['78_6'] = tmp78_6

		const tmp78_7 = fixTwentyTwo(tmp78_6 + tmp78_8)
		_resultAge['78_7'] = tmp78_7

		const tmp79_4 = fixTwentyTwo(tmp78_8 + tmp0_0)
		_resultAge['79_4'] = tmp79_4

		const tmp79_1 = fixTwentyTwo(tmp78_8 + tmp79_4)
		_resultAge['79_1'] = tmp79_1

		const tmp78_9 = fixTwentyTwo(tmp78_8 + tmp79_1)
		_resultAge['78_9'] = tmp78_9

		const tmp79_0 = fixTwentyTwo(tmp78_9 + tmp79_1)
		_resultAge['79_0'] = tmp79_0

		const tmp78_10 = fixTwentyTwo(tmp78_9 + tmp79_0)
		_resultAge['78_10'] = tmp78_10

		const tmp78_11 = fixTwentyTwo(tmp78_10 + tmp79_0)
		_resultAge['78_11'] = tmp78_11

		const tmp79_2 = fixTwentyTwo(tmp79_1 + tmp79_4)
		_resultAge['79_2'] = tmp79_2

		const tmp79_3 = fixTwentyTwo(tmp79_2 + tmp79_4)
		_resultAge['79_3'] = tmp79_3

		const tmp79_7 = fixTwentyTwo(tmp79_4 + tmp0_0)
		_resultAge['79_7'] = tmp79_7

		const tmp79_5 = fixTwentyTwo(tmp79_4 + tmp79_7)
		_resultAge['79_5'] = tmp79_5

		const tmp79_6 = fixTwentyTwo(tmp79_5 + tmp79_7)
		_resultAge['79_6'] = tmp79_6

		const tmp79_9 = fixTwentyTwo(tmp79_7 + tmp0_0)
		_resultAge['79_9'] = tmp79_9

		const tmp79_8 = fixTwentyTwo(tmp79_7 + tmp79_9)
		_resultAge['79_8'] = tmp79_8

		const tmp79_10 = fixTwentyTwo(tmp79_9 + tmp0_0)
		_resultAge['79_10'] = tmp79_10

		const tmp79_11 = fixTwentyTwo(tmp79_10 + tmp0_0)
		_resultAge['79_11'] = tmp79_11
	}
	_resultHandler()

	console.log(_resultAge)

	// -------------------------

	const h = fixTwentyTwo(b + d)
	const j = fixTwentyTwo(a + c)
	const n = fixTwentyTwo(f + y)
	const t = fixTwentyTwo(g + k)

	let years

	// ------------
	const today = new Date()
	const yyyy = today.getFullYear()
	let mm = today.getMonth() + 1 // Months start at 0!
	let dd = today.getDate()

	// @ts-ignore
	if (dd < 10) dd = '0' + dd
	// @ts-ignore
	if (mm < 10) mm = '0' + mm
	const formattedToday = yyyy + '-' + mm + '-' + dd
	//-----------

	console.log(
		`date`,
		date
			.split('-')
			.map((el, index) => {
				if (index > 0 && Number(el) < 10) {
					return '0' + el
				}
				return el
			})
			.join('-')
	)

	// const fullAge = calculateFullAge.getFullAge(date);
	const fullAge = new calculateAge(
		date
			.split('-')
			.map((el, index) => {
				if (index > 0 && Number(el) < 10) {
					return '0' + el
				}
				return el
			})
			.join('-'),
		formattedToday
	).getObject()

  console.log('fullAge', fullAge)

	// @ts-ignore
	console.log(`${fullAge.years.toString()}_${(fullAge.months + 1).toString()}`)

	if (fullAge.months + 1 === 12) {
		years = _resultAge[(Number(fullAge.years) % 80).toString() + '_0']
	} else {
		years = _resultAge[`${fullAge.years.toString()}_${(fullAge.months + 1).toString()}`]
	}

	console.log(fullAge)
	console.log('years', years)

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
		years,
		_resultAge,
	}
}

export default onlineMatrixCalculation
