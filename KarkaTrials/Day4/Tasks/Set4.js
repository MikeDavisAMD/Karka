// 1) Program to identify if the  number is positive or negative
function posneg(number){
    if(number>0){
        console.log(number,"is a positive number")
    }
    else if(number==0){
        console.log(number,"is neither positive nor negative")
    }
    else{
        console.log(number,"is a negative number")
    }
}
// 2) Program to identify if the number is even or odd
function oddeven(number){
    if(number%2==0){
        console.log(number,"is a even number")
    }
    else if(number==0){
        console.log("The number is Zero")
    }
    else{
        console.log(number,"is a odd number")
    }
}
// 3) Program to find Power of a number
// Input
// 5
// 2
// Output
// 25
function Power(){
    return 5**2
}
// 4) Write a program that takes two numbers as input and prints which one is greater (or if they are equal) using if-else statements.
function greatsmall(a,b){
    if(a>b){
        console.log("A is GREATER");
    }else if(a==b){
        console.log("A is equal to B");   
    }else{
        console.log("B is GREATER");        
    }
}
// 5) Write a program that takes a year as input and prints whether it's a leap year or not using if-else statements.
// 9) Write a Python program that determines if a given year is a leap year.Enter a year as input. Use conditional statements to check if the year satisfies the leap year conditions: 
// The year should be divisible by 4 but not divisible by 100, or The year should be divisible by 400. 
// Use appropriate logical operators and conditions to implement the leap year logic. 
// Display an appropriate message indicating whether the year is a leap year or not. 
// Example output: Enter the year=2024 2024 is a leap year
function leapYear(year){
    if((year%4==0 && year%100!=0)||year%400==0){
        console.log(year,"is a leap year")
    }
    else{
        console.log(year,"is not a leap year")
    }
}
// 6) Write a program that takes a student's score as input and prints their grade (A, B, C, D, or F) using if-else statements
function score(mark){
    if((mark<=1200)&&(mark>960)){
        console.log("Grade: A");
    }
    else if((mark<=960)&&(mark>720)){
        console.log("Grade: B");
    }
    else if((mark<=720)&&(mark>480)){
        console.log("Grade: C");
    }
    else if((mark<=480)&&(mark>240)){
        console.log("Grade: D");
    }
    else{
        console.log("Grade: F");
    }
}
// 7) How Old Are You, Specifically?
// less than 16	
// "You can't drive."
// 16 to 17		
// "You can drive but not vote."
// 18 to 24		
// "You can vote but not rent a car."
// 25 or older		
// "You can do pretty much anything."
function howOld(age){
    if(age<16){
        console.log("You can't drive.");
    }
    else if((age>=16)&&(age<=17)){
        console.log("You can drive but not vote.");
    }
    else if((age>=18)&&(age<=24)){
        console.log("You can vote but not rent a car.");
    }
    else{
        console.log("You can do pretty much anything.");
    }
}
// 8) Write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". 
// For numbers which are multiples of both three and five print "FizzBuzz".
function FizBuz(){
    for(i=1;i<=100;i++){
        if((i%3==0)&&(i%5==0)){
            console.log("FizzBuzz")
        }
        else if(i%3==0){
            console.log("Fizz")
        }
        else if(i%5==0){
            console.log("Buzz")
        }
        else{
            console.log(i)
        }
    }
}
posneg(-24)
oddeven(2353)
console.log(Power())
greatsmall(10,20)
leapYear(2024)
score(1065)
howOld(25)
// FizBuz()
