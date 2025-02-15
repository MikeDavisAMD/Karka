// Write a program that prints numbers from 1 to 10 using a for loop.
function loop110(){
    for(i=1;i<=10;i++){
        console.log(i)    
    }
}
// Write a program that prints even numbers from 1 to 20 using a for loop.
function even120(){
    for(i=1;i<=20;i++){
        if(i%2==0){
            console.log(i)
        }
    }
}
// Write a program that prints odd numbers from 1 to 20 using a for loop.
function odd120(){
    for(i=1;i<=20;i++){
        if(i%2!=0){
            console.log(i)
        }
    }
}
// Write a program that calculates the factorial of a number using a for loop.
function factorial(number){
    fact=1
    for(i=1;i<=number;i++){
        fact*=i        
    }
    console.log(fact)
}
// Write a program that calculates the sum of numbers from 1 to 100 using a for loop.
function sum1100(){
    n=0
    for(i=1;i<=100;i++){
        n+=i       
    }
    console.log(n) 
}
// Write a program that calculates the average of numbers in an array using a for loop.
function arravg(){
    total=0
    arr=[1,2,3,4,5]
    for(i=0;i<arr.length;i++){
        total+=arr[i]
        avg=total/arr.length
    }
    console.log(total)
    console.log(avg)
}
// Prints numbers   from 1 to 5
function num15(){
    for(i=1;i<=5;i++){
        console.log(i)
    }
}
// Print the first 10 natural numbers using for loop
function natnum(){
    for(i=0;i<=10;i++){
        console.log(i)
    }
}
// Check if the first and last number of a list is the same
// Example : Given list: [10, 20, 30, 40, 10] 
// result is True
function flnum(){
    list=[10, 20, 30, 40, 10]
    if(list[0]==list[list.length-1]){
        console.log(true)
    }else{
        console.log(false)
    }
}
// Iterate the given array of numbers and print only those numbers which are divisible by 5.
function arrDiv5(){
    d=[]
    nd=[]
    arr=[10,20,22,23,24,30,35,33,45]
    for(i=0;i<arr.length;i++){
        if(arr[i]%5==0){
            d.push(arr[i])
        }else{
            nd.push(arr[i])
        }
    }
    console.log(d)
    console.log(nd)
}
// Write a program that uses nested for loops to draw patterns (e.g., squares, triangles, diamonds).
function triangle(row){
    let pattern=""
    for(let i=1;i<=row;i++){
        for(let j=1;j<=i;j++){
            pattern+="* "
        }
        pattern+="\n"
    }console.log(pattern)
}
function squares(rows){
    let pattern=""
    for(i=1;i<=rows;i++){
        for(j=1;j<=rows;j++){
            pattern+="* "
        }
        pattern+="\n"
    }console.log(pattern)
}
function diamonds(rows){
    for(i=1;i<=rows;i++){
        console.log(" ".repeat(rows-i)+"*".repeat(2*i-1))
    }
    for(i=rows-1;i>=1;i--){
        console.log(" ".repeat(rows-i)+"*".repeat(2*i-1))
    }
}
// Write a program to check whether the given character is vowel or consonant.
function vowcons(alp){
    vow=["a","e","i","o","u"]
    if(alp==vow[i]){
        console.log("Vowel")
    }
    else{
        console.log("Consonant")
    }
}
// Write a program to count the occurence of even numbers and odd numbers between the range 10 – 55.
function oddeven1055(){
    for(i=10;i<=55;i++){
        if(i%2==0){
            console.log(i)
        }
    }
}
// Write a program in Python to print numbers ranging from 1 to 25 but excluding numbers which are the multiples of 5.
function num125(){
    for(i=1;i<=25;i++){
        if(i%5!=0){
            console.log(i)
        }
    }
}
// Write a program that takes an array of numbers and calculates the factorial of each element using a for loop, then prints the results.
function arrFact(){
    arr=[5,10,20,30,40,50]
    for(i=0;i<arr.length;i++){
        num=arr[i]
        fact=1
        for(j=1;j<=num;j++){
            fact*=j
        }
        console.log(fact)
    }
}
// Given two integer numbers return their product. If the product is greater than 500, then return their sum.
function prosum(a,b){
    prod=a*b
    if(prod>500){
        console.log(prod)
        console.log(a+b)
    }else{
        console.log(prod)
    }
}
// Write a program to print the greatest of two numbers.
function larOf2(a,b){
    if(a>b){
        console.log("A is GREATER")
    }else{
        console.log("B is GREATER")
    }
}
// Write a program to print the greatest of three numbers.
function larOf3(a,b,c){
    if((a>b)&&(a>c)){
        console.log("A is GREATER")
    }else if((b>a)&&(b>c)){
        console.log("B is GREATER")
    }else{
        console.log("C is GREATER")
    }
}
// Write a program to separate positive and negative numbers from a list.
// 	Input:  Given x = [23, 4, -6, 23, -9, 21, 3, -45, -8]
function posnegArr(){
    x = [23, 4, -6, 23, -9, 21, 3, -45, -8]
    pos=[]
    neg=[]
    for(i=0;i<x.length;i++){
        if(x[i]>0){
            pos.push(x[i])
        }else{
            neg.push(x[i])
        }
    }
    console.log(pos)
    console.log(neg)
}
posnegArr()