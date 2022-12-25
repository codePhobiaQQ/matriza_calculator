import onlineMatrixCalculation from "./onlineMatrixCalculation";
import fixTwentyTwo from "../utils/fixTwentyTwo";

const sovmestMatrixCalculation = (date1: string, date2: string) => {
    const data1 = onlineMatrixCalculation(date1)
    let data2 = onlineMatrixCalculation(date2)

    Object.keys(data1).forEach(key => {
        // @ts-ignore
        data2[key] = String(fixTwentyTwo(Number(data2[key]) + Number(data1[key])))
    })

    return data2;
};

export default sovmestMatrixCalculation;