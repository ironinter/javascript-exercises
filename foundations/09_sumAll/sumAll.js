const sumAll = function(num1, num2) {
    let a = 0, b = 0;

    if (!Number.isInteger(num1) || !Number.isInteger(num2)) return 'ERROR';
    else if (num1 < 0 || num2 < 0) return 'ERROR';


    if (num1 > num2) {
        a = num2;
        b = num1;
    } else if (num1 < num2) {
        a = num1;
        b = num2;
    } 

    let sum = 0;
    for (let i = a; i <= b; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
