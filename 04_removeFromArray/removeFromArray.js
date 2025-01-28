const removeFromArray = function(arrayValue, ...toRemove) {
    arrayValue.forEach((element,index) => {
        if (toRemove.includes(element)) {
            arrayValue.splice(index, 1);
        }
    });
    return arrayValue;
};

// Do not edit below this line
module.exports = removeFromArray;
