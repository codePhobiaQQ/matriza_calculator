export const sumOfDecimals = (numb: string | number) => {
    let newNumb
    if (typeof numb == "string") {
        newNumb = numb
    } else {
        newNumb = numb.toString()
    }
    return newNumb.split('').reduce((prev, current) => Number(current) + prev, 0)
};

const fixTwentyTwo = (numb: string | number) => {
    let newNumb

    if (typeof numb == "number") {
        newNumb = numb
    } else {
        newNumb = Number(numb)
    }

    if (Number(newNumb) > 22) {
        return sumOfDecimals(newNumb)
    }
    return Number(newNumb)
}

export default fixTwentyTwo