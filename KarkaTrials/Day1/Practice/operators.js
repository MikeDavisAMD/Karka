a=15, b=8
// Arithmetic
console.log(a+b, a-b, a*b, a/b, a%b, a**b)
// Assignment
a=45, b=23
console.log(a+=b,a,b)
console.log(a-=b,a,b)
console.log(a*=b,a,b)
console.log(a/=b,a,b)
console.log(a%=b,a,b)
console.log(a**=b,a,b)
// Logical
a=10, b=20
andCond=((a<b)&&(a==b)) // AND operator
console.log(andCond)
orCond=((a<b)||(a==b)) // OR operator
console.log(orCond)
notCond=(!(a<b)) // NOT operator
console.log(notCond)
// == vs === and Relational operators
a=0, b="0"
console.log(a==b, a===b)
console.log(a<b, a>b, a<=b, a>=b, a!=b)
// unary
a=50
console.log(a++,a,++a)