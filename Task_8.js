function secondstoHMS (s) {
    var h = Math.floor(s / 3600);
    var m = Math.floor(s % 3600 / 60);
    var s = Math.floor(s % 3600 % 60);

    return h + "h, "+ m + "m, " + s + "s";
}
console.log(secondstoHMS(8954));