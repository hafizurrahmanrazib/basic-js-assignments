// Problem-01: Convert Radian To Degree
function radianToDegree(num) {
    if (typeof num !== 'number') {
        return 'Please Enter a Number';
    }
    const degree = num * (180 / Math.PI);
    const afterTwoDecimal = degree.toFixed(2);
    const result = parseFloat(afterTwoDecimal);
    return result;
}

const number = radianToDegree(199);
console.log(number);