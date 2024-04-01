// unit test for the addition function
function sum(a,b){}
if (sum(5,5) !=10){
    throw new Error("Test failed for sum(5,5)");
}
if (sum(0,0) !=0){
    throw new Error("Test failed for sum(0,0)")
}
if (sum(-14,28) !=14){
    throw new Error("Test failed for sum(-14,28)")
}
//This function adds the two values
function sum(a,b){
    return a + b;
}
console.log(sum(5,5))
console.log(sum(0,0))
console.log(sum(-14,28))

// unit test for the subtraction function
function sub(a,b){}
if (sub(50,25) !=25){
    throw new Error("Test failed for sub(50,25)");
}
if (sub(5,-10)!=15){
    throw new Error("Test failed for sub(5,-10)")
}
if (sub(0,4) !=-4){
    throw new Error("Test failed for sub(0,4)")
}
 //This function subtracts the two values
function sub(a,b){
    return a - b;
}
console.log(sub(50,23))
console.log(sub(5,-10))
console.log(sub(0,4))

// unit test for the multiplication function
function multiply(a,b){}
if (multiply(4,4)!=16){
    throw new Error("Test failed for multiply(4,4)");
}
if (multiply(-5,6)!=-30){
    throw new Error("Test failed for multiply(-5,6)")
}
if (multiply(0,9) !=0){
    throw new Error("Test failed for multiply(0,9)")
}
 //This function multiplies the two values
function multiply(a,b){
    return a * b;
}
console.log(multiply(4,4))
console.log(multiply(-5,6))
console.log(multiply(0,9))

// unit test for the division function
function divide(a,b){}
if (divide(6,2)!=3){
    throw new Error("Test failed for divide(6,2)");
}
if (divide(-20,4)!=-5){
    throw new Error("Test failed for divide(-20,4)")
}
if (divide(0,18) !=0){
    throw new Error("Test failed for divide(0,18)")
}
//This function divides the two values
function divide (a,b){
    return a / b; 
}
console.log(divide(6,2));
console.log(divide(-20,4));
console.log(divide(0,18));

function greeting(name){
    return "Hello " + " " + name;
}
console.log(greeting("Steven"))

