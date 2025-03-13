// Task 1: Function vs Arrow Function
// Normal function
function task1fn() {
    let a=[1, 2, 3, 4, 5] 
    let b=[]
    for(i=0;i<a.length;i++){
        b.push(a[i]**2)
    }
    console.log(b)
}
task1fn()
// arrow function
const task1arr = () => {
    let a=[1, 2, 3, 4, 5] 
    let b=[]
    for(i=0;i<a.length;i++){
        b.push(a[i]**2)
    }
    console.log(b)
}
task1arr()
// Task 2: Spread (...) Operator
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { e: 5, f: 6 };
console.log({...obj1,...obj2,...obj3})
// Task 3: Map Objects
const students = [
    { Name: 'Alice', score: 85 },
    { Name: 'Bob', score: 92 },
    { Name: 'Charlie', score: 78 }
];
const t3=students.map(({Name,score}) => Name === 'Bob' ? score : "")
console.log(...t3)
// Task 4: Set Objects
const t4=[1, 2, 2, 3, 4, 4, 5]
const t4o= new Set(t4)
console.log(t4o)
// Task 5: Array Filter
const t5=['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape']
const t5o=t5.filter(data => data.length>5)
console.log(t5o)
// Task 6: Array reduce
const t6 = [1, 2, 3, 4, 5]
const t6o = t6.reduce((acc,num) => acc*num,1)
console.log(t6o)
// Task 7: Array indexOf() and lastIndexOf()
const numbers = [1, 2, 3, 2, 4, 2, 5];
console.log(`{ firstindex: ${numbers.indexOf(2)}, lastindex: ${numbers.lastIndexOf(2)} }`)
// Task 8: Array.isArray()
const t8a=[1, 2, 3]
const t8s='Hello'
console.log(Array.isArray(t8a))
console.log(Array.isArray(t8s))
// Task 9: String includes
const t9='The quick brown fox jumps over the lazy dog'
console.log(t9.includes('fox'))
// Task 10: Array keys()
const t10=['apple', 'banana', 'cherry']
console.log(Object.keys(t10))
// Task 11: String replaceAll()
const t11='apple banana apple grape apple'
console.log(t11.replaceAll('apple','orange'))
// Task 12: Array includes()
const t12=['apple', 'banana', 'cherry']
console.log(t12.includes('banana'))
// Task 13: Async, await, promise, fetch, axios
// Task 14: Exception Handling
// Task 15: Template Literals
const t15 = {
    Name:'John',
    Age:"30"
}
console.log(`Hello, my name is ${t15.Name} and I am ${t15.Age} years old.`)
// Task 16: Destructuring Assignment
const t16={
    Name: 'Alice', 
    age: 25, 
    city: 'New York'
}
const {Name,age,city}=t16
console.log(`${Name}
${age}
${city}`)
// Task 17: Default Parameters
const t17=[5,20];
const[a,b,c=10]=t17
console.log(a+b)
console.log(a+c)
// Task 18: Rest Parameters
const t18=[1,2,3,4,5]
const[...rest]=t18
console.log(rest.reduce((acc,num) => acc+num,0))
// Task 19: Sum of Numbers
const t19=[1,2,3,4,5]
console.log(t19.reduce((acc,num) => acc+num,0))
// Task 20: Product of Numbers
const t20=[1,2,3,4,5]
console.log(t20.reduce((acc,num) => acc*num,1))
// Task 21: Longest String
const t21 = ['apple', 'bananas', 'cherry', 'date']
console.log(t21.reduce((acc,num) => acc.length > num.length ? acc : num))
// Task 22: Flatten Array
const t22=[[1, 2, 3], [4, 5], [6, 7, 8, 9]]
const flat = (arr => arr.reduce)