function welcome(){
    console.log("Hello World")
}
welcome()
export function calculator(a,b){
    console.log("Addition is",a+b)
    console.log("Subtraction is",a-b)
    console.log("Multiplication is",a*b)
    console.log("Division is",a/b)
    console.log("Modulus is",a%b)
    console.log("Exponential is",a**b)
}
function greatest(a,b){
    console.log("A is greater than B",a>b)
    console.log("B is greater than A",a<b)
}
function me(name,age){
    console.log(name,age)
}
calculator(20,30)
greatest(30,40)
me("Mike Davis",24)
import { h2m } from "../Tasks/Task2.js"
h2m(24)