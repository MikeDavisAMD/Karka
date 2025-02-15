// 1) Declare different variables with meaningful names that follow naming conventions (camelCase, under_score_case).
firstName="Mike"
second_name="Davis"
console.log(firstName, second_name)
// 3) Declare an array, access elements, and perform basic array operations.
arr=["K","A","R","K","A"]
console.log(arr[0],arr[1],arr[2],arr[3],arr[4])
// 4) Sum of Two Numbers: Declare two variables & assign number values to them. Then add them and print the result.
num1=35, num2=66, sum=num1+num2
console.log(sum)
// 5) Program to find the Area of a circle
rad=24, aoc=3.14*(rad**2)
console.log(aoc)
// 6) Program to find Area of a rectangle
len=24, wid=44, aor=len*wid
console.log(aor)
// 7) Program to find Area of a Triangle
base=36, ht=46, aot=0.5*(base*ht)
console.log(aot)
// 8) Simple Calculator: Implement a basic calculator.
inte1=24, inte2=35
sum=inte1+inte2, sub=inte1-inte2, mul=inte1*inte2, div=inte1/inte2
console.log(
    "Addition: ",sum,
    "\nSubtraction: ",sub,
    "\nMultiplication: ",mul,
    "\nDivision: ",div
)
// 9) Use the assignment operators (=, +=, -=, *=, /=) to modify the value of a variable and print the result.
console.log(
    "Assignment: ",inte1=inte2,
    "Addition: ",inte1+=inte2,
    "\nSubtraction: ",inte1-=inte2,
    "\nMultiplication: ",inte1*=inte2,
    "\nDivision: ",inte1/=inte2,
    "\nModulo: ",inte1%inte2,
    "\nexponent: ",inte1**=inte2
)
// 10) Declare a variable and use the increment (++) and decrement (--) operators to modify its value.
console.log(inte1++, ++inte1, inte1--, --inte1)
// 11) Declare two variables and use comparison operators (==, !=, ===, !==, >, <, >=, <=) to compare their values. Print the results of each comparison to the console.
console.log(inte1==inte2, inte1!=inte2, inte1===inte2, inte1!==inte2, inte1>inte2, inte1<inte2, inte1>=inte2, inte1<=inte2)
// 12) Declare two variables representing boolean values (true or false) and use logical operators (&&, ||, !) to combine or negate them. Print the results of each logical operation to the console.
c1=inte1<inte2, c2=inte1>inte2
console.log(c1&&c2, c1||c2, !((c1&&c2)&&(c1||c2)))
// 13) Program to swap two variables.
inte1=24, inte2=25
console.log(inte1, inte2)
temp=inte1
inte1=inte2
inte2=temp
console.log(inte1, inte2)
// 14) Program to find the average of given numbers.
console.log((inte1+inte2)/2)
// 15) Program to add a two numbers ( a and b ) and multiply the result by ( c ) and divide that final result by ( d ) ( eg :  a = 10, b = 30, c = 12 , d = 3 )
a = 10, b = 30, c = 12 , d = 3
calc=((a+b)*c)/d
console.log(calc)
// 16) Program to declare 10th marks one by one (Eg: Tamil, English, Maths, Science, Social ). Store the inputs in separate variables and Calculate total marks, average and print it.
Tamil=87, English=90, Maths=97, Science=97, Social=94
total=Tamil+English+Maths+Science+Social
console.log(total)
console.log(total/5)
// 2) Declare a constant variable using the const keyword and try to reassign a value to it. Observe what happens
const num=234
console.log(num)
num=23
console.log(num)