const palindromes = function (str) {
    let newStr = "";

    for (let i = (str.length - 1); i >= 0; i--) {
        newStr += str[i];
    }
    
    return palindeom = newStr === str ? true : false;

};

// Do not edit below this line
module.exports = palindromes;
