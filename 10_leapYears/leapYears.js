const leapYears = function(year) {
    let leapYear = false;

    // Rule 1: Divisible by 4
    if (year % 4 == 0) {
        leapYear = true;
    }

    // Rule 2: Not divisible by 100 (unless divisible by 400)
    if (year % 100 == 0) {
      leapYear = false;
      if (year % 400 == 0) {
        leapYear = true;
      }
    } else {
      leapYear = true;
    }

    return leapYear;
};

// Do not edit below this line
module.exports = leapYears;


// Leap years are years divisible by four (like 1984 and 2004). However, years divisible by 100 are 
// not leap years (such as 1800 and 1900) unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years). (Yes, it's all pretty confusing)