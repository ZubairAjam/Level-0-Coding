function findMax() {
    var i;
    var max = 0;
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
        return max;
    }
console.log(findMax(87,7,100,5,6));