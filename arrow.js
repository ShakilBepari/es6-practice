// function myFun(num){
//     return num * 2;
// }

// const myFun = function(num){
//     return num * 3;
// }

// const myFun = num => num * 5;
const myFun = (num1, num2) => {
    const sum = num1 + num2;
    const diff = num1 - num2;
    return sum * diff;
};

console.log(myFun(10, 7))