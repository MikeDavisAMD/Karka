const student = [
    { name: 'Alice', age: 21 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 23 }
];
const findStudentByName = ((data,key) => data.find(data => data.name === key))
console.log(findStudentByName(student,'Bob'))