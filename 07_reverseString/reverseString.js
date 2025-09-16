const reverseString = function (str) {
    let str = "hello"
    let newStr = "";

    for (let i = (str.length - 1); i >= 0; i--) {
        newStr += str[i];
    }

};

// Do not edit below this line
module.exports = reverseString;
