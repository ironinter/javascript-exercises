const leapYears = function(year) {
    // No tests for confirming year's type (non-negative int / NaN / NULL / infinity / 'string' / etc)
    // let counter = false;    
    // if (year % 4 === 0) counter = true;
    // if (year % 100 === 0) counter = false; 
    // if (year % 400 === 0) counter = true;
    // return counter;

    if ((year%400===0) || ((year%4===0) && (year%100!==0))) return true;
    return false;
};



// Do not edit below this line
module.exports = leapYears;
