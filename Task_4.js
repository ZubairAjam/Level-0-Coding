function isThisThree(x,y) {
    var sum = x + y;
    var n = Array.from(String(sum), Number);
 if (x == 3||y == 3) {
     return "True";
 }else if (n.includes(3)) {
     return "True";
 }
   else {
       return "False";
   } 
}
console.log(isThisThree(232,40));