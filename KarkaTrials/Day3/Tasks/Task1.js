// 1. Area of Circle
function aoc(r){
    console.log("Area of the Circle is",3.14*(r**2))
}
// 2. Area of Triangle 
function aot(l,b){
    console.log("Area of the Triangle is",0.5*(l*b))
}
// 3. Area of Square
function aos(s){
    console.log("Area of the Square is",s**2)
}
// 4. Power of the number
function pow(a,b){
    console.log("number is",a)
    console.log("power is",b)
    console.log("Answer is",a**b)
}
// 5. Concatenation
function conc(a,b){
    console.log("String 1 is",a)
    console.log("String 2",b)
    console.log("Concatnation is",a.concat(b))
}
// 6. cube of a number 
function cube(s){
    console.log("cube of the value",s,"is",s**b)
}
// 7. Percentage of total
function pot(T,E,M,S,SS){
    console.log("Tamil: ",T,"\nEnglish: ",E,"\nMaths: ",M,"\nScience: ",S,"\nSocial Science: ",SS)
    total=T+E+M+S+SS
    console.log("Total is",total)
    console.log("Average is",total/5)
    console.log("Percentage is",(total/500)*100+"%")
}
aoc(22)
aos(23)
aot(24,35)
pow(5,2)
conc("Karka","Academy")
pot(95,96,99,99,97)