// function sum(a, b) {
//     return a + b;
// }

// function sumWithMsg(clbk, msg) {
//     const result = clbk(20, 30);
//     const fresult = "HI I love u " + msg + " Your sum is = " + result;
//     console.log(fresult);
// }

// sumWithMsg(sum, "Ms, Bibek");

function greet(name){
    console.log("Hello "+name);
}
function execute(callback){
    callback("Vansh");
}
execute(greet);