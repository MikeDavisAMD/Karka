const arr=["Apple","Orange","Banana","Kiwi","Grapes","Pineapple"];
// normal Destructuring
const [a,b,c] = arr;
console.log(a);
console.log(b);
console.log(c);
// skipping array variables
const [,e,,,f]=arr;
console.log(e);
console.log(f);
// rest property
const[g,h,...rest]=arr;
console.log(rest);
// Function parameter
const add = (() => [12,24])
const [i,j]=add()
console.log(i+j)