const removeFromArray = function (arrayValue, ...toRemove) {
    return arrayValue.filter(
        element => !toRemove.includes(element)
    );
};

// Do not edit below this line
module.exports = removeFromArray;
