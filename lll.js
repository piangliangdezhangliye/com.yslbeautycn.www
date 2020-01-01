// var a = b = 10;
// (function () {
//     var a = b = 20
// })(); 
// console.log(b);

// var a = new Object();
// a.name = "admin";
// console.log(a.name); 
// var a = 888;
// ++a;
// console.log(a++);
// var arr=[1, 2, 3, 4].join("0").split("")
// console.log(arr)
var a
function test() {
    console.log(a);
    a = 10;
    console.log(a);
}
a = 100;
test();
console.log(a);