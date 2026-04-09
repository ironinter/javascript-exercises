const repeatString = function(str, num) {
    if (num < 0) return 'ERROR';

    let strRepeat = '';
    for (let i = 0; i < num; i++) {
        strRepeat += str;
    }
    return strRepeat;
};

// Do not edit below this line
module.exports = repeatString;
