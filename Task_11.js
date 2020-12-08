function commonCharacters(string1, string2) {
    var a = string1;
    var b = string2;
    var result = [];
    for (var i = 0; i < a.length; i++) {
        if (b.indexOf(a[i]) !== -1 && result.indexOf(a[i]) === -1) {
            result.push(a[i]);
        }
    }
       return result;
    }console.log(commonCharacters("mango", "orange"));