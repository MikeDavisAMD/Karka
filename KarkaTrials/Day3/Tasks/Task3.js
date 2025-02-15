// 1. Area of Circle
function aoc(r){
    circle=3.14*(r**2)
    return circle
}
// 2. Area of Triangle 
function aot(l,b){
    triangle=0.5*(l*b)
    return triangle
}
// 3. Area of Square
function aos(r){
    circle=3.14*(r**2)
    return circle
}
// 4. Power of the number
function pow(a,b){
    power=a**b
    return power
}
// 5. Concatenation
function conc(a,b){
    cnc=a.concat(b)
    return cnc
}
// 6. cube of a number 
function cube(a){
    cb=a**3
    return cb
}
// 7. Percentage of total
function pot(T,E,M,S,SS){
    total=T+E+M+S+SS
    avg=total/5
    pcnt=(total/500)*100
    return total, avg, pcnt
}
// 8. convert hours into minutes
function h2m(h){
    m=h*60
    return m
}
// 9. calculate speed 
function speed(d,t){
    spd=d/t
    return spd
}
console.log(aoc(24))
console.log(aot(33,24))
console.log(aos(24))
console.log(pow(5,2))
console.log(conc("Karka","Academy"))
console.log(cube(24))
pertot=pot(95,96,99,99,97)
console.log(total)
console.log(avg)
console.log(pcnt)
console.log(h2m(24))
console.log(speed(24,.3))