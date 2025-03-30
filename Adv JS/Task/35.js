const arr = { firstName: 'John', lastName: 'Doe', age: 30 };
const {firstName:fname, lastName:lname, age:Age} = arr;
const out = (() => console.log(`${fname} ${lname} is ${Age} years old.`))
out()