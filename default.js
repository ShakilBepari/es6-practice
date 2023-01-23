function add(num1, num2 = 40){
    
    console.log(arguments)
    return num1 + num2 + arguments[2];
}

const total = add(45,20,30);
console.log(total)