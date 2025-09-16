const repeatString = function (str, num) {
    let str = "hello"
    let num = 100;
    let newStr = "";

    for (let i = 0; i < num; i++) {
        newStr += str
    }

    return newStr;
};

// Do not edit below this line
module.exports = repeatString;

