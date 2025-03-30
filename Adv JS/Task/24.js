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