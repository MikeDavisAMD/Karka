import { star } from "../../Day1/Tasks/star.js"
// 1) Half of a number 
function hon(n){
    let h = n/2
    return h
}
let a=hon(234)
console.log(a)
// 2) Find Remainder
function Remainder(a,b){
    let r=a%b
    return r
}
console.log(Remainder(23,22))
// 3) odd/even 
function odev(n){
    console.log("Is the given number odd?",n%2!=0)
    console.log("Is the given number even?",n%2==0)
}
odev(24)
function oddeven(n){
    if(n%2==0)
        console.log("The Number is even")
    else
        console.log("The Number is odd")
}
oddeven(3)
star(5)