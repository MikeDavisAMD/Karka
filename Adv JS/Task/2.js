const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { e: 5, f: 6 };
const output = (a,b,c)=>console.log({...a,...b,...c})
output(obj1,obj2,obj3)