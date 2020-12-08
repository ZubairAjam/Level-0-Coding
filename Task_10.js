function printVowels() {
    var str = 'United States';//input word here.
    var vowels = 'aAeEiIoOuU';
    for (var i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            console.log(str[i]);
        }
    } 
} printVowels();