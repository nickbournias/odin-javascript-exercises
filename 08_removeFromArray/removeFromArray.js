const removeFromArray = function (arr, remove) {
    let arr = ["a", "b", "c", "d", "e"];
    let remove = "c";
    let newArr = [];

    for (i in arr) {
        if (arr[i] !== remove) {
            newArr += arr[i];
        }
    }

};

// Do not edit below this line
module.exports = removeFromArray;
