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
console.log(findMax(8,100,26));