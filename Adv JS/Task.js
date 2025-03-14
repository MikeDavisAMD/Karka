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
async function fetchData() {
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        let data = await response.json()
        console.log(data)
    } catch(error){
        console.log("Error:",error)
    }
}
fetchData()
// Task 14: Exception Handling
const exHandle = (a,b) => {
    try{
        if(b==0){
            throw new Error("Division by zero is not allowed.")
        }
        return a/b
    } catch(error) {
        return error.message
    }
}
console.log(exHandle(4,2))
console.log(exHandle(4,0))
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
const flat = (arr => arr.reduce((acc,num)=> acc.concat(num),[]))
console.log(flat(t22))
// Task 23: Count Occurrences
const t23 = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']
const count = (fruits => fruits.reduce((acc,ele) => {
    acc[ele]=(acc[ele] || 0)+1;
    return acc;
},{}))
console.log(count(t23))
// Task 24: Group by Property
const people = [
    { name: 'Alice', age: 21 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 21 },
    { name: 'David', age: 25 },
    { name: 'Eve', age: 22 }
];
const groupBy = ((data,prop) => data.reduce((acc,ele)=> {
    const key = ele[prop]
    !acc[key] ? acc[key] = [] : ""
    acc[key].push(ele)
    return acc
},{}))
console.log(groupBy(people,'age'))
// Task 25: Calculate Average
const t25 = [10, 20, 30, 40, 50]
const avg = (avg => avg.reduce((acc,num)=>acc+num,0)/avg.length)
console.log(avg(t25))
// Task 26: Total Price of Items in Cart
const cart = [
    { item: 'apple', price: 1.5 },
    { item: 'banana', price: 2.0 },
    { item: 'orange', price: 1.25 }
];
const calculateTotal = (data => data.reduce((acc,num)=>acc+num.price,0))
console.log(calculateTotal(cart))
// Task 27: Find First Even Number
const t27 = [1, 3, 7, 10, 2]
const findEven = (data => data.find(element => element%2==0))
console.log(findEven(t27))
// Task 27: Find Student by Name
const student = [
    { name: 'Alice', age: 21 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 23 }
];
const findStudentByName = ((data,key) => data.find(data => data.name === key))
console.log(findStudentByName(student,'Bob'))
// Task 29: Find Product by ID
const products = [
    { id: 101, name: 'Laptop' },
    { id: 102, name: 'Phone' },
    { id: 103, name: 'Tablet' }
];
const findProductById =((data,key) => data.find(data => data.id === key))
console.log(findProductById(products, 102))
// Task 30: Find Overdue Task
const tasks = [
    { taskName: 'Task 1', dueDate: '2023-06-01' },
    { taskName: 'Task 2', dueDate: '2024-05-01' },
    { taskName: 'Task 3', dueDate: '2024-01-01' }
];
const findOverdueTask = ((data,date) => data.find(data => data > date))
console.log(findOverdueTask(tasks,'2023-08-08'))
// Task 31: Find First Positive Number
const t31 = [-5, -3, 0, 9, 2]
const t31o = (data => data.find(data => data>0))
console.log(t31o(t31))
// Task 32: Find Book by Title
const books = [
    { title: '1984', author: 'George Orwell' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' }
];
const findBookByTitle = ((data,key) => data.find(data => data.title===key))
console.log(findBookByTitle(books, '1984'))
// Task 33: Find Employee by ID
const employees = [
    { id: 1, name: 'Alice', position: 'Manager' },
    { id: 2, name: 'Bob', position: 'Engineer' },
    { id: 3, name: 'Charlie', position: 'Technician' }
];
const findEmployeeById = ((data,key) => data.find(data => data.id===key))
console.log(findEmployeeById(employees, 2));
// Task 34: Find First Prime Number
const t34 = [4, 6, 8, 9, 11, 15]
const prime = (num) => {
    if(num<2) return false;
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i===0) return false
    }
    return true
}
const t34o = (data => data.find(data => prime(data)))
console.log(t34o(t34))
// Task 35: Destructuring and Template Literals
const t35 = { firstName: 'John', lastName: 'Doe', age: 30 };
const {firstName:fname, lastName:lname, age:Age} = t35;
const t35o = (() => console.log(`${fname} ${lname} is ${Age} years old.`))
t35o()
// Task 36: Array Methods and Arrow Functions
const t36 = [1, 2, 3, 4, 5, 6]
const t36o = (data => data.filter(data => data%2 == 0).map(data => data**2))
console.log(t36o(t36))
// Task 37: Default Parameters and Rest Parameters