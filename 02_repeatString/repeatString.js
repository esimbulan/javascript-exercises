const repeatString = function(toPrint, length) {
    if (length < 0) {
        return "ERROR";
    }
    let toPrintRepeated = "";
    for(let i = 0; i < length; i++) {
        toPrintRepeated += toPrint;
    }
    return toPrintRepeated;
};

// Do not edit below this line
module.exports = repeatString;
