const fs = require("fs")

let data = `
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
`

let resultData = ""

function script() {
	for (let k = 1; k < 16; k++) {
		
		for (let index = 0; index < data.length; index++) {
			if (index < 2) continue;
			
			// --- TMP Name ---
			if (data[index] == "p" && data[index - 1] == "m" && data[index - 2] == "t") {
				
				if (data[index + 2] == `_`) {
					resultData += "p" + (Number(data[index + 1]) + 5 * k).toString()
					index += 1
				} else if (data[index + 3] == `_`) {
					resultData += "p" + (Number(`${data[index + 1]}${data[index + 2]}`) + 5 * k).toString()
					index += 2
				}
				
			}
			// --- TMP Name ---
			else if (data[index] == '"' && data[index - 1] == '[') {
				if (data[index + 2] == `_`) {
					resultData += '"' + (Number(data[index + 1]) + 5 * k).toString()
					index += 1
				} else if (data[index + 3] == `_`) {
					resultData += '"' + (Number(`${data[index + 1]}${data[index + 2]}`) + 5 * k).toString()
					index += 2
				}
			} else {
				resultData += data[index]
			}
			
		}
	}
}

script()

fs.writeFileSync("./result.txt", resultData)





