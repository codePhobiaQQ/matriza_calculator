import onlineMatrixCalculation from "./onlineMatrixCalculation";

const sovmestMatrixCalculation = (date1: string, date2: string) => {
    return onlineMatrixCalculation(date1, date2, true)

    // let data2 = onlineMatrixCalculation(date2)


    // Object.keys(data1).forEach(key => {
    //
    //     if (key == "b") {
    //         // @ts-ignore
    //         console.log("-------- b --------")
    //         // @ts-ignore
    //         console.log(Number(data2[key]), Number(data1[key]))
    //     }
    //
    //     if (key == "b2") {
    //         // @ts-ignore
    //         console.log("-------- b2 --------")
    //         // @ts-ignore
    //         console.log(Number(data2[key]), Number(data1[key]))
    //     }
    //
    //     if (key == "b1") {
    //         // @ts-ignore
    //         console.log("-------- b1 --------")
    //         // @ts-ignore
    //         console.log(Number(data2[key]), Number(data1[key]))
    //     }
    //
    //
    //     // @ts-ignore
    //     data2[key] = String(fixTwentyTwo(Number(data2[key]) + Number(data1[key])))
    // })
};

export default sovmestMatrixCalculation;